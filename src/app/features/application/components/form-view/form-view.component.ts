import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CdnService } from '../../services/cdn.service';
import { SubscriptionsManager } from '../../../../core/helpers/SubscriptionsManager';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrl: './form-view.component.scss',
})
export class FormViewComponent implements OnInit, OnDestroy, OnChanges {
  @Input() blocks!: any;
  @Output() selectInputValue: EventEmitter<any> = new EventEmitter<void>();


  loadedForm: boolean = false;

  constructor(
    private sanitizer: DomSanitizer,
    private cdnService: CdnService,
  ) {
    this.splitText(this.originalText, 'Angular');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['blocks']?.currentValue) {
      console.log("Original Blocks: ", this.blocks);
      this.blocks = this.blocks.flat();
      console.log("Updated blocks: ", this.blocks);
      this.loadedForm = true;
      this.splitText(this.originalText, 'Angular');
    }
  }

  isString(value: any): boolean {
    return typeof value === 'string';
  }

  subs = new SubscriptionsManager();

  originalText: string = 'Hello, welcome to Angular!';
  parts: Array<{ text: string; isHighlighted: boolean }> = [];

  splitText(text: string, keyword: string) {
    const regex = new RegExp(`(${keyword})`, 'gi');
    const splitParts = text.split(regex);
    this.parts = splitParts.map((part) => ({
      text: part,
      isHighlighted: part.toLowerCase() === keyword.toLowerCase(),
    }));
  }

  addComment(block: any, i: any) {
    let obj = {
      block: block,
      index: i,
    };
    this.selectInputValue.emit(obj);
  }

  ngOnInit(): void {
    this.subs.add = this.cdnService.downloadResponse$.subscribe((res: any) => {
      this.onDownloadFile(res);
    });
    this.subs.add = this.cdnService.openResponse$.subscribe((res: any) => {
      this.onOpenFile(res);
    });
  }

  openFile(req: any) {
    this.downloadFileLoader = true;
    this.fileName = req;
    this.cdnService.openFile(req);
  }

  onOpenFile(res: any) {
    console.log(res);
    // Convert response body to a Blob
    const fileBlob = new Blob([res.body], { type: res.body.type });
  
    // Create a URL for the Blob
    const fileUrl = URL.createObjectURL(fileBlob);
  
    // Open the file in a new tab
    window.open(fileUrl, '_blank');
  
    // Clean up the URL after some time
    setTimeout(() => {
      URL.revokeObjectURL(fileUrl);
    }, 5000); // Delay cleanup to ensure the file opens properly
  
    this.downloadFileLoader = false;
  }

  fileName?: any;

  
  

  onDownloadFile(res: any) {
    console.log(res);
    // Assuming the response body contains the file as a Blob
    // // Assuming 'res' is the complete HTTP response object
    const fileBlob = new Blob([res.body], { type: res.body.type });

    // Extract Content-Disposition header if available
    const contentDisposition = res.headers.get('Content-Disposition');
    let fileName = this.fileName; // Default filename

    if (contentDisposition && contentDisposition.indexOf('attachment') !== -1) {
      const matches = /filename="([^"]*)"/.exec(contentDisposition);
      if (matches && matches[1]) {
        fileName = matches[1];
      }
    }

    // Create a URL for the Blob
    const fileUrl = URL.createObjectURL(fileBlob);

    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.target = '_blank';

    // Use the filename extracted from Content-Disposition or fallback to default filename
    link.download = fileName;

    // Trigger the file download
    link.click();

    // Clean up the URL after the file is downloaded
    setTimeout(() => {
      URL.revokeObjectURL(fileUrl);
    }, 1000);
    this.downloadFileLoader = false;
  }

  downloadFileLoader: boolean = false;

  downloadFile(req: any) {
    this.downloadFileLoader = true;
    this.fileName = req;
    this.cdnService.downloadFile(req);
  }

  ngOnDestroy(): void {}
}
