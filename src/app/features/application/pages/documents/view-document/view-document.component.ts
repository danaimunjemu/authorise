import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubscriptionsManager } from '../../../../../core/helpers/SubscriptionsManager';
import { DocumentsService } from '../../../services/documents.service';
import { RoutingService } from '../../../../../core/services/routing.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import * as pako from 'pako';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { CookiesService } from '../../../../shared/storage/cookies.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { DatePipe } from '@angular/common';

interface ActionModal {
  share: boolean;
  approve: boolean;
  decline: boolean;
  pause: boolean;
  signature: boolean;
}

@Component({
  selector: 'app-view-document',
  templateUrl: './view-document.component.html',
  styleUrl: './view-document.component.scss',
})
export class ViewDocumentComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private documentsService: DocumentsService,
    private routingService: RoutingService,
    private sanitizer: DomSanitizer,
    private notificationService: NzNotificationService,
    private cookiesService: CookiesService,
    private datePipe: DatePipe,
  ) {}

  subs = new SubscriptionsManager();

  document?: any;
  getDocumentLoader?: boolean;

  shareDocumentForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  user = this.cookiesService.getCookie('user');

  shareDocument() {
    let req = {
      documentId: parseInt(this.documentId),
      action: 'SHARE',
      newUser: this.shareDocumentForm.value.email,
    };
    console.log('The request: ', req);
    this.documentsService.actionDocument(req);
  }

  actionDocumentForm = {
    reason: '',
    signature: '',
  };

  actionDocument(action: string) {
    let req = {
      documentId: parseInt(this.documentId),
      action: action,
      reason: this.actionDocumentForm.reason,
      signature: this.actionDocumentForm.signature,
    };
    if (this.useSavedSignature) {
      req.signature = this.signature;
    }

    this.documentsService.actionDocument(req);
  }

  useSavedSignature: boolean = false;
  signature?: any;

  checkIfUserHasSavedSignature() {
    console.log('here');
    if (localStorage.getItem('signature')?.length == 0) {
      this.notificationService.create(
        'error',
        'Error',
        'Please add a signature on the preferences page',
      );
      this.useSavedSignature = this.useSavedSignature;
    }
    console.log(this.useSavedSignature);
  }

  signatureChanged(event: any) {
    console.log('We got the signature: ');
    console.log('Signature before conversion: ', event);
    this.actionDocumentForm.signature = event;
    // this.signature = this.compress(event);
    // console.log("Signature after conversion: ", this.signature);
  }

  compress(base64: string): string {
    // Decode base64 to binary string
    const binaryString = atob(base64);

    // Convert binary string to Uint8Array
    const binaryLen = binaryString.length;
    const bytes = new Uint8Array(binaryLen);
    for (let i = 0; i < binaryLen; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    // Compress using pako
    const compressed = pako.deflate(bytes);

    // Convert compressed data back to base64
    const compressedBase64 = btoa(String.fromCharCode(...compressed));

    return compressedBase64;
  }

  decompress(compressedBase64: string): string {
    // Decode compressed base64 to binary string
    const binaryString = atob(compressedBase64);

    // Convert binary string to Uint8Array
    const binaryLen = binaryString.length;
    const bytes = new Uint8Array(binaryLen);
    for (let i = 0; i < binaryLen; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    // Decompress using pako
    const decompressed = pako.inflate(bytes);

    // Convert decompressed data back to base64
    const decompressedBase64 = btoa(String.fromCharCode(...decompressed));

    return decompressedBase64;
  }

  documentId?: any;

  ngOnInit(): void {
    this.signature =
      'data:image/png;base64,' + localStorage.getItem('signature');

    this.route.params.subscribe((params: any) => {
      this.documentId = params['id'];
      this.getDocument(params['id']);
    });

    this.subs.add = this.documentsService.getDocumentResponse$.subscribe(
      (response: any) => {
        console.log(response);
        this.onGetDocumentResponse(response);
      },
    );

    this.subs.add = this.documentsService.actionDocumentResponse$.subscribe(
      (res: any) => {
        console.log(res);
        this.onActionDocumentResponse(res);
      },
    );

    this.subs.add = this.documentsService.commentResponse$.subscribe(
      (res: any) => {
        console.log(res);
        this.onCommentDocument(res);
      },
    );

    this.subs.add = this.documentsService.updateDocumentResponse$.subscribe(
      (res: any) => {
        console.log(res);
        this.onUpdateDocument(res);
      },
    );
  }

  onUpdateDocument(res: any) {
    if (res.success) {
      this.notificationService.create('success', 'Success', res.message);
      this.addDocumentCommentForm.message = '';
      this.addDocumentCommentForm.time = '';
      this.addDocumentCommentForm.to = '';
      this.getDocument(this.documentId);
      this.isCommentDocumentVisible = false;
    } else {
      this.notificationService.create('error', 'Error', res.message);
    }
  }

  onCommentDocument(res: any) {
    if (res.success) {
      this.notificationService.create('success', 'Success', res.message);
      this.commentDocumentForm.message = '';
      this.fileList = [];
      this.getDocument(this.documentId);
    } else {
      this.notificationService.create('error', 'Error', res.message);
    }
  }

  onActionDocumentResponse(res: any) {
    if (res.success) {
      this.notificationService.create('success', 'Success', res.message);
      this.getDocument(this.documentId);
      this.handleCancel();
    } else {
      this.notificationService.create('error', 'Error', res.message);
    }
  }

  getDocument(id: any) {
    this.getDocumentLoader = true;
    this.documentsService.getDocument(id);
  }

  signaturesQuota?: any;
  actionersWhoSigned: any[] = []; // Initialize as an empty array

  onGetDocumentResponse(response: any) {
    console.log("the response, ", response)
    if (response.success) {
      this.document = response.data;
      this.document.audit.sort((a: any, b: any) => {
        return Number(new Date(a.createdAt)) - Number(new Date(b.createdAt));
      });
      this.document.comments.sort((a: any, b: any) => {
        return Number(new Date(a.createdAt)) - Number(new Date(b.createdAt));
      });
      this.document.actioners.sort((a: any, b:any) => a.index - b.index);
      console.log('Sorted Doc: ', this.document);

      const groupedByIndex = this.document.actioners.reduce(
        (acc: any, item: any) => {
          if (item.index === -1) return acc; // Ignore owners

          // If the group for this index doesn't exist, create it
          if (!acc[item.index]) {
            acc[item.index] = [];
          }

          // Add the item to the corresponding group
          acc[item.index].push(item);

          return acc;
        },
        {},
      );

      // Convert to an array of groups if needed
      const groupedArray = Object.entries(groupedByIndex).map(
        ([key, value]) => ({
          index: Number(key),
          items: value,
        }),
      );

      console.log(groupedByIndex);
      console.log(groupedArray);
      this.signaturesQuota = groupedArray;

      // Find actioners who signed
      const actionersWithSignature = this.document.actioners.filter(
        (item: any) => item.signature,
      );
      console.log('Actioners with Signature: ', actionersWithSignature);

      // Push signed actioners into actionersWhoSigned array
      this.actionersWhoSigned.push(...actionersWithSignature); // Spread operator to add all signed actioners

      // Optionally, you can adjust signaturesQuota based on actionersWhoSigned
      this.signaturesQuota = this.signaturesQuota.filter((quota: any) => {
        return !this.actionersWhoSigned.some(
          (signed) => signed.index === quota.index,
        );
      });
    } else {
      // Handle error case here
    }
    this.getDocumentLoader = false;
  }

  onBack(): void {
    this.routingService.navigateByUrl('authorise/documents/all');
  }

  getHighlightedText(field: any) {
    // console.log(field)
    let text = field.value;
    if (field.comments && field.comments.length > 0) {
      field.comments.forEach((comment: any) => {
        const regex = new RegExp(`(${comment.highlightedText})`, 'gi');
        text = text.replace(
          regex,
          ` <span nzTooltipTitle="Export to Word" nzTooltipPlacement="top" nz-tooltip nz-button style="background: yellow">$1</span>`,
        );
        // console.log("TEXT: ", text)
      });
    }
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }

  @ViewChild('commentTemplate') commentTemplate!: ElementRef;
  text = 'Your text from the backend goes here.';
  selectedText = '';
  commentText = '';
  comments: any[] = [];

  documentViewOptions = [
    { name: 'collaborators' },
    { name: 'comments' },
    { name: 'linked-documents' },
    { name: 'activity' },
  ];

  currentViewOption: number = 0;

  selectViewOption(i: number) {
    this.currentViewOption = i;
  }

  @ViewChild('collaboratorsTemplate', { static: true })
  collaboratorsTemplate!: TemplateRef<any>;
  @ViewChild('commentsTemplate', { static: true })
  commentsTemplate!: TemplateRef<any>;
  @ViewChild('linkedDocumentsTemplate', { static: true })
  linkedDocumentsTemplate!: TemplateRef<any>;
  @ViewChild('activityDocumentsTemplate', { static: true })
  activityDocumentsTemplate!: TemplateRef<any>;

  getViewOption(type: string) {
    switch (type) {
      case 'collaborators':
        return this.collaboratorsTemplate;
      case 'comments':
        return this.commentsTemplate;
      case 'linked-documents':
        return this.linkedDocumentsTemplate;
      case 'activity':
        return this.activityDocumentsTemplate;
      default:
        return null;
    }
  }

  onTextSelect(event: MouseEvent) {
    console.log('Something happened');
    console.log(event);
    const selection = window.getSelection();
    this.selectedText = selection!.toString();
    console.log(this.selectedText);
    if (this.selectedText) {
      // Show popup
      // You might use Angular Material or any other library to show a modal
    }
  }

  saveComment() {
    if (this.selectedText && this.commentText) {
      this.comments.push({
        text: this.selectedText,
        comment: this.commentText,
      });
      this.selectedText = '';
      this.commentText = '';
      // Close popup
    }
  }

  isVisible = false;

  actionModal: ActionModal = {
    share: false,
    approve: false,
    decline: false,
    pause: false,
    signature: false,
  };

  resetActionModal() {
    this.actionDocumentForm.signature = '';
    this.actionDocumentForm.reason = '';
    Object.keys(this.actionModal).forEach((key) => {
      // Type assertion to ensure key is a valid ActionModal key
      this.actionModal[key as keyof ActionModal] = false;
    });
  }

  commentDocumentForm = {
    message: '',
  };

  fileList: NzUploadFile[] = [];
  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

  commentDocument() {
    var formData: any = new FormData();

    formData.append('documentId', parseInt(this.documentId));
    formData.append('message', this.commentDocumentForm.message);
    for (const file of this.fileList) {
      formData.append('attachments', file);
    }

    this.documentsService.comment(formData);
  }

  shareDocumentModal: boolean = false;

  showModal(type: any): void {
    this.resetActionModal();
    switch (type) {
      case 'share':
        this.actionModal.share = true;
        break;
      case 'approve':
        this.actionModal.approve = true;
        this.actionModal.signature = true;
        break;
      case 'decline':
        this.actionModal.decline = true;
        this.actionModal.signature = true;
        break;
      case 'pause':
        this.actionModal.pause = true;
        break;
      default:
        break;
    }
    this.isVisible = true;
  }

  handleCancel(): void {
    this.resetActionModal();
    this.actionDocumentForm.signature = '';
    this.actionDocumentForm.reason = '';
    this.isVisible = false;
  }

  generatePDF() {
    var data = document.getElementById('authorise-document')!;
    html2canvas(data).then((canvas) => {
      var popName =
        'Authorise - ' +
        this.document.id +
        '-' +
        this.document.template.title +
        '-' +
        new Date();
      var contentWidth = canvas.width;
      var contentHeight = canvas.height;
      //One page pdf shows the height of canvas generated by html page;
      var pageHeight = (contentWidth / 592.28) * 841.89;
      //html page height without pdf generation
      var leftHeight = contentHeight;
      //Page offset
      var position = 0;
      //a4 paper size [595.28841.89], width and height of image in pdf of canvas generated by html page
      var imgWidth = 595.28;
      var imgHeight = (592.28 / contentWidth) * contentHeight;

      //Return picture dataURL, parameters: picture format and sharpness (0-1)
      var pageData = canvas.toDataURL('image/jpeg', 1.0);

      let pdf = new jsPDF('p', 'pt', 'a4');

      //There are two heights to distinguish, one is the actual height of the html page, and the height of the generated pdf page (841.89)
      //When the content does not exceed the display range of one page of pdf, paging is not required
      if (leftHeight < pageHeight) {
        pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
      } else {
        while (leftHeight > 0) {
          pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
          leftHeight -= pageHeight;
          position -= 841.89;
          //Avoid adding blank pages
          if (leftHeight > 0) {
            pdf.addPage();
          }
        }
      }
      pdf.save(popName + '.pdf');
    });
  }

  commentIndex!: any;

  logSelectedText(event: any) {
    console.log(event);
    this.commentIndex = event.index;
    this.addDocumentCommentForm.value = event.block.value;
    this.addDocumentCommentForm.elementType = event.block.type;
    this.openAddDocumentComment();
  }

  highlightedText?: any;

  openAddDocumentComment() {
    this.isCommentDocumentVisible = true;
  }

  isCommentDocumentVisible = false;

  handleCommentDocumentModalCancel(): void {
    this.commentIndex = null;
    this.highlightedText = '';
    this.isCommentDocumentVisible = false;
  }

  addDocumentCommentForm = {
    user: this.user.email,
    value: {} as any,
    message: '',
    type: 'COMMENT',
    elementType: '',
    time: '',
    resolved: false,
    to: '',
  };

  updateDocument() {
    let updatedFormBlock = this.document.form.blocks[this.commentIndex];
    console.log('Before comment update: ', updatedFormBlock);
    this.addDocumentCommentForm.time = new Date().toString();
    updatedFormBlock.comments.push(this.addDocumentCommentForm);
    console.log('After comment update: ', updatedFormBlock);
    let updatedDocument = {
      documentId: this.document.id,
      form: this.document.form,
    };
    console.log('Updated document: ', updatedDocument);
    this.documentsService.updateDocument(updatedDocument);
  }

  formatDateTime(date: Date): string {
    // Format date and time using DatePipe
    return this.datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss') || '';
  }

  ngOnDestroy(): void {
    this.subs.dispose();
  }
}
