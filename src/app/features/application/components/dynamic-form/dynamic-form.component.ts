import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Subscription, filter, of } from 'rxjs';
import { NzUploadFile, NzUploadXHRArgs } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Editor, Toolbar } from 'ngx-editor';
import { SubscriptionsManager } from '../../../../core/helpers/SubscriptionsManager';
import { CdnService } from '../../services/cdn.service';
import { delay } from 'lodash';

export interface DynamicFormModelField {
  label: string;
  name: string;
  type: string;
  options: Array<string>;
}

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent implements OnInit {
  @Input() fields!: any;

  @Input() template: any;
  @Input() ticketCategory: any;
  @Input() selectedUser: any;
  @Input() systems: any;
  @Input() createTicketLoader: boolean = false;
  @Output() formDataEmitter = new EventEmitter<any>();

  htmlContentControl: FormControl = new FormControl();
  dynamicForm!: FormGroup;
  uploading = false;
  // fileList: NzUploadFile[][] = [];
  fileList: NzUploadFile[] = [];

  editor: Editor = new Editor();
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline'],
    // ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    // ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  finalForm?: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.editor = new Editor();
    console.log('Fields: ', this.fields);
  }

  subject = '';

  subs = new SubscriptionsManager();

  beforeUpload = (file: NzUploadFile): boolean => {
    /** this.fileList = this.fileList.concat(file); */
    console.log(this.fields);
    return false;
  };

  onUploadChange(event: any, index: number): void {
    console.log(event);
    console.log(index);
    this.fields[index].value = event.fileList;
    console.log(this.fields[index]);
  }

  customRequestHandler = (item: NzUploadXHRArgs): Subscription => {
    console.log('Custom upload suppressed:', item);
    // Return a dummy subscription to satisfy the type requirement
    return of().subscribe();
  };

  ngOnDestroy(): void {
    this.subs.dispose();
    this.editor.destroy();
  }

  emitFormData() {
    this.formDataEmitter.emit(this.fields);
  }

  submitDocument(formData: FormData) {
    // this.documentsService.newDocument(formData);
  }
}
