import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { DndDropEvent, DropEffect, EffectAllowed } from 'ngx-drag-drop';
import { RoutingService } from '../../../../../../core/services/routing.service';
import { BehaviorSubject } from 'rxjs';
import { SubscriptionsManager } from '../../../../../../core/helpers/SubscriptionsManager';
import { Editor } from 'ngx-editor';
import { UsersService } from '../../../../services/users.service';
import { TemplatesService } from '../../../../services/templates.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { db } from '../../../../../shared/storage/db/db';
import { FormItem } from '../../../../interfaces/form-item.interface';
import { draggableFormItem } from '../../../../constants/draggableFormItem';
import { NzUploadFile } from 'ng-zorro-antd/upload';

interface Approver {
  assignedUser: string;
  escalationUser: string | null;
  role: string;
  index: number;
  time: number;
}

// Define the type for the newTemplate object
interface Template {
  title: string;
  description: string;
  subCategoryId: number;
  requiresManager: boolean;
  managersTime: number;
  generic: boolean;
  actioners: Approver[];
  form: {
    includeRichTextEditor: boolean;
    time: number;
    blocks: any[];
  };
}

interface DropzoneLayout {
  container: string;
  list: string;
  dndHorizontal: boolean;
}

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrl: './create-template.component.scss',
})
export class CreateTemplateComponent implements OnInit, OnChanges, OnDestroy {
  @Input() subcategoryId!: number;
  @Output() onCreateTemplateSuccess: EventEmitter<void> =
    new EventEmitter<void>();

  constructor(
    private routingService: RoutingService,
    private usersService: UsersService,
    private templatesService: TemplatesService,
    private notificationService: NzNotificationService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.newTemplate.subCategoryId = this.subcategoryId;
  }

  ngOnDestroy(): void {
    this.editor.destroy();
    this.subs.dispose();
  }

  draggableListLeft: FormItem[] = [];

  draggableListRight: FormItem[] = [];
  horizontalLayoutActive: boolean = false;
  private currentDraggableEvent?: DragEvent;
  private currentDragEffectMsg?: string;
  private readonly verticalLayout: DropzoneLayout = {
    container: 'row',
    list: 'column',
    dndHorizontal: false,
  };
  layout: DropzoneLayout = this.verticalLayout;
  private readonly horizontalLayout: DropzoneLayout = {
    container: 'row',
    list: 'row wrap',
    dndHorizontal: true,
  };

  setHorizontalLayout(horizontalLayoutActive: boolean) {
    this.layout = horizontalLayoutActive
      ? this.horizontalLayout
      : this.verticalLayout;
  }

  onDragStart(event: DragEvent) {
    this.currentDragEffectMsg = '';
    this.currentDraggableEvent = event;
  }

  onDragged(item: any, list: any[], effect: DropEffect) {
    this.currentDragEffectMsg = `Drag ended with effect "${effect}"!`;

    if (effect === 'move') {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }

  initialiseDraggables() {
    this.draggableListLeft = [
      {
        content: 'short-text',
        effectAllowed: 'move',
        disable: false,
        handle: false,
        fieldName: '',
        helpText: '',
        options: [],
        comment: '',
        validation: {
          required: false,
          minLength: '',
          maxLength: '',
          min: '',
          max: '',
          pattern: '',
          fileTypes: '',
        },
      },
      {
        content: 'long-text',
        effectAllowed: 'move',
        disable: false,
        handle: false,
        fieldName: '',
        helpText: '',
        options: [],
        comment: '',
        validation: {
          required: false,
          minLength: '',
          maxLength: '',
          min: '',
          max: '',
          pattern: '',
          fileTypes: '',
        },
      },
      {
        content: 'number',
        effectAllowed: 'move',
        disable: false,
        handle: false,
        fieldName: '',
        helpText: '',
        options: [],
        comment: '',
        validation: {
          required: false,
          minLength: '',
          maxLength: '',
          min: '',
          max: '',
          pattern: '',
          fileTypes: '',
        },
      },
      /* {
        content: 'date',
        effectAllowed: 'move',
        disable: false,
        handle: false,
        fieldName: "",
        helpText: "",
        options: [],
        comment: "",
        validation: {
          required: false,
          minLength: "",
          maxLength: "",
          min: "",
          max: "",
          pattern: "",
          fileTypes:''

        }
      },
      {
        content: 'time',
        effectAllowed: 'move',
        disable: false,
        handle: false,
        fieldName: "",
        helpText: "",
        options: [],
        comment: "",
        validation: {
          required: false,
          minLength: "",
          maxLength: "",
          min: "",
          max: "",
          pattern: "",
          fileTypes:''

        }
      },
      {
        content: 'date-time',
        effectAllowed: 'move',
        disable: false,
        handle: false,
        fieldName: "",
        helpText: "",
        options: [],
        comment: "",
        validation: {
          required: false,
          minLength: "",
          maxLength: "",
          min: "",
          max: "",
          pattern: "",
          fileTypes:''

        }
      }, */
      {
        content: 'checkbox',
        effectAllowed: 'move',
        disable: false,
        handle: false,
        fieldName: '',
        helpText: '',
        options: [],
        comment: '',
        validation: {
          required: false,
          minLength: '',
          maxLength: '',
          min: '',
          max: '',
          pattern: '',
          fileTypes: '',
        },
      },
      /* {
        content: 'radio',
        effectAllowed: 'move',
        disable: false,
        handle: false,
        fieldName: "",
        helpText: "",
        options: [],
        comment: "",
        validation: {
          required: false,
          minLength: "",
          maxLength: "",
          min: "",
          max: "",
          pattern: "",
          fileTypes:''

        }
      }, */
      {
        content: 'email',
        effectAllowed: 'move',
        disable: false,
        handle: false,
        fieldName: '',
        helpText: '',
        options: [],
        comment: '',
        validation: {
          required: false,
          minLength: '',
          maxLength: '',
          min: '',
          max: '',
          pattern: '',
          fileTypes: '',
        },
      },
      {
        content: 'select',
        effectAllowed: 'move',
        disable: false,
        handle: false,
        fieldName: '',
        helpText: '',
        options: [],
        comment: '',
        validation: {
          required: false,
          minLength: '',
          maxLength: '',
          min: '',
          max: '',
          pattern: '',
          fileTypes: '',
        },
      },
      {
        content: 'upload',
        effectAllowed: 'move',
        disable: false,
        handle: false,
        fieldName: '',
        helpText: '',
        options: [],
        comment: '',
        validation: {
          required: false,
          minLength: '',
          maxLength: '',
          min: '',
          max: '',
          pattern: '',
          fileTypes: [
            { label: 'images', value: 'images', checked: false },
            { label: 'document', value: 'document', checked: false },
            { label: 'spreadsheet', value: 'spreadsheet', checked: false },
            { label: 'audio', value: 'audio', checked: false },
            { label: 'video', value: 'video', checked: false },
            { label: 'zip', value: 'zip', checked: false },
          ],
        },
      },
    ];
  }

  log(value: object[]): void {
    console.log(value);
  }

  onDragEnd(event: DragEvent) {
    this.currentDraggableEvent = event;
    console.log('The drag event has ended');
    this.initialiseDraggables();
  }

  onDrop(event: DndDropEvent, list?: any[]) {
    if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
      let index = event.index;

      if (typeof index === 'undefined') {
        index = list.length;
      }

      list.splice(index, 0, event.data);
    }
  }

  formatText(text: string): string {
    return text
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  removeDropzone(index: number): void {
    this.draggableListRight.splice(index, 1);
  }

  documentEditOptions = [
    { name: 'fields' },
    { name: 'actioners' },
    // {name: "additional"},
  ];

  // @ViewChild('slaTemplate', { static: true }) slaTemplate!: TemplateRef<any>;
  @ViewChild('fieldsTemplate', { static: true })
  fieldsTemplate!: TemplateRef<any>;
  @ViewChild('actionersTemplate', { static: true })
  actionersTemplate!: TemplateRef<any>;
  // @ViewChild('additionalTemplate', { static: true }) additionalTemplate!: TemplateRef<any>;

  getEditOption(type: string) {
    switch (type) {
      // case 'sla':
      //   return this.slaTemplate;
      case 'fields':
        return this.fieldsTemplate;
      case 'actioners':
        return this.actionersTemplate;
      // case 'additional':
      //   return this.additionalTemplate;
      default:
        return null;
    }
  }

  currentEditOption: number = 0;

  selectEditOption(i: number) {
    this.currentEditOption = i;
  }

  pre(): void {
    this.currentEditOption -= 1;
  }

  next(): void {
    this.currentEditOption += 1;
  }

  done(): void {
    this.formatForm();
    this.newTemplate.form.blocks = this.formPreview!;
    this.handleActioners();
    console.log(this.newTemplate);
    this.submitCreateTemplate();
  }

  createTemplateLoader: boolean = false;

  submitCreateTemplate() {
    this.createTemplateLoader = true;
    this.templatesService.createTemplate(this.newTemplate);
  }

  handleActioners() {
    this.newTemplate.actioners = [];
    this.groupOfApprovers.forEach((user, index) => {
      user.approvers.forEach((approvalUser) => {
        let approver: Approver = {
          assignedUser: approvalUser.email,
          escalationUser: approvalUser.manager,
          role: user.role,
          index: index,
          time: user.time,
        };
        this.newTemplate.actioners.push(approver);
      });
    });
  }

  users?: any;
  getUsersLoader: boolean = false;

  onGetUsersResponse(response: any) {
    console.log(response);
    if (response.success) {
      this.users = response.data;
    }
  }

  subs = new SubscriptionsManager();

  editor!: Editor;
  html = '';

  getUsers() {
    this.getUsersLoader = true;
    this.usersService.getUsers();
  }

  ngOnInit(): void {
    this.editor = new Editor();
    this.initialiseDraggables();
    this.getUsers();

    this.subs.add = this.usersService.getUsersResponse$.subscribe(
      (response: any) => {
        this.onGetUsersResponse(response);
        this.getUsersLoader = false;
      },
    );

    this.subs.add = this.templatesService.createTemplateResponse$.subscribe(
      (res: any) => {
        this.onCreateTemplate(res);
      },
    );
  }

  selectedNode: FlatNode | null = null;
  parent: any = '';

  onCreateTemplate(res: any) {
    if (res.success) {
      this.notificationService.create('success', 'Success', res.message);
      this.createTemplateLoader = false;
      this.onCreateTemplateSuccess.emit(res);
    } else {
      this.notificationService.create('error', 'Failed', res.message);
    }
  }

  groupOfApprovers: { approvers: any[]; role: string; time: number }[] = [
    { approvers: [], role: '', time: 0 },
  ];

  addNewList() {
    this.groupOfApprovers.push({ approvers: [], role: '', time: 0 });
  }

  updateApprovers(index: number, selectedUsers: any[]) {
    this.groupOfApprovers[index].approvers = selectedUsers;
  }

  updateRole(index: number, selectedRole: string) {
    this.groupOfApprovers[index].role = selectedRole;
  }

  updateTime(index: number, selectedTime: number) {
    this.groupOfApprovers[index].time = selectedTime;
  }

  logList() {
    console.log(this.groupOfApprovers);
  }

  fullTemplate = {
    title: '',
    description: '',
    form: {},
  };

  onBack(): void {
    this.routingService.navigateByUrl('authorise/templates/all');
  }

  isVisible = false;
  isConfirmLoading = false;

  formPreview?: any[] = [];

  formatFieldName(input: string): string {
    return input.toLowerCase().replace(/\s+/g, '-');
  }

  formatForm() {
    this.formPreview = [];
    console.log('Draggable list: ', this.draggableListRight);
    for (let item of this.draggableListRight) {
      let options: any[] = [];
      if (item.content == 'checkbox') {
        for (let option of item.options) {
          let formattedOption = {
            label: option,
            value: option,
            checked: false,
          };
          options.push(formattedOption);
        }
      } else {
        options.push(item);
      }
      let field = [
        {
          type: item.content,
          label: item.fieldName,
          name: this.formatFieldName(item.fieldName),
          id: this.formatFieldName(item.fieldName),
          value: null,
          options: options,
          validations: item.validation,
          help: item.helpText,
          comment: item.comment,
        },
      ];

      this.formPreview?.push(field);
    }
  }

  previewForm() {
    this.formPreview = [];
    this.formatForm();
    console.log('Form Preview: ', this.formPreview);
    this.showModal();
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  newTemplate: Template = {
    title: '',
    description: '',
    subCategoryId: this.subcategoryId,
    generic: false,
    requiresManager: false,
    managersTime: 10,
    actioners: [],
    form: {
      time: 0,
      includeRichTextEditor: false,
      blocks: [],
    },
  };
}
