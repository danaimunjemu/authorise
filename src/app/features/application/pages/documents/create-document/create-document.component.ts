import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DocumentsService } from '../../../services/documents.service';
import { RoutingService } from '../../../../../core/services/routing.service';
import { SubscriptionsManager } from '../../../../../core/helpers/SubscriptionsManager';
import { CategoriesService } from '../../../services/categories.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { TemplatesService } from '../../../services/templates.service';
import { DynamicFormComponent } from '../../../components/dynamic-form/dynamic-form.component';
import { CdnService } from '../../../services/cdn.service';
import { tap } from 'lodash';
import { forkJoin } from 'rxjs';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrl: './create-document.component.scss',
})
export class CreateDocumentComponent implements OnInit, OnDestroy {
  @ViewChild('childRef') child!: DynamicFormComponent;

  constructor(
    private documentsService: DocumentsService,
    private routingService: RoutingService,
    private categoriesService: CategoriesService,
    private notificationService: NzNotificationService,
    private templatesService: TemplatesService,
    private cdnService: CdnService,
  ) {}

  ngOnInit() {
    this.getCategories();

    this.subs.add = this.categoriesService.getCategoriesResponse$.subscribe(
      (response: any) => {
        this.onGetCategories(response);
      },
    );

    this.subs.add = this.templatesService.getTemplateResponse$.subscribe(
      (res: any) => {
        this.onGetTemplate(res);
      },
    );

    this.subs.add = this.templatesService.getSlaAgreementResponse$.subscribe(
      (res: any) => {
        this.onGetSlaAgreement(res);
      },
    );

    this.subs.add = this.documentsService.newDocumentResponse$.subscribe(
      (res: any) => {
        this.onCreateNewDocument(res);
      },
    );
  }

  subs = new SubscriptionsManager();

  categories?: any;
  category?: any;
  getCategoriesLoader?: boolean = false;
  categoriesList?: any;

  template?: any;
  agreement?: any;
  groupedActioners?: any;

  onBack(): void {
    this.routingService.navigateByUrl('authorise/documents/all');
  }

  createNewDocumentLoader: boolean = false;

  onCreateNewDocument(res: any) {
    console.log(res);
    if (res.success) {
      this.notificationService.create('success', 'Success', res.message);
      this.routingService.navigateByUrl('authorise/documents/all');
    } else {
      this.notificationService.create('error', 'Error', res.message);
    }
    this.createNewDocumentLoader = false;
  }

  onGetTemplate(res: any) {
    console.log(res);
    if (res.success) {
      this.template = res.data;
      this.getSlaAgreement(this.template.slaAgreementId);
      this.formatForm();
    } else {
      this.notificationService.create('error', 'Error', res.message);
    }
    this.getTemplateLoader = false;
  }

  onGetSlaAgreement(res: any) {
    console.log(res);
    if (res.success) {
      this.agreement = res.data;
      this.group();
    } else {
      this.notificationService.create('error', 'Error', res.message);
    }
    this.getSlaLoader = false;
    this.selectTemplateLoader = false;
  }

  form?: any[] = [];

  formatForm() {
    this.form = [];
    for (let item of this.template.form.blocks) {
      console.log('------------------');
      console.log(item);
      console.log('------------------');
      let field = [
        {
          type: item[0].type,
          label: item[0].label,
          name: item.name,
          id: item[0].id,
          value: item[0].value,
          options: item[0].options,
          validations: item[0].validations,
          comments: item[0].comments,
        },
      ];
      this.form?.push(field);
    }
    this.form = this.rawJsonFlatten(this.form);
    console.log('The form: ', this.form);
  }

  group() {
    const groupedByIndex = this.agreement.agreementDetails.reduce(
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
    const groupedArray = Object.entries(groupedByIndex).map(([key, value]) => ({
      index: Number(key),
      items: value,
    }));
    this.groupedActioners = Object.values(groupedByIndex);
    console.log('Grouped Actioners: ', this.groupedActioners);
  }

  current = 0;

  rawJsonFlatten(data: Array<any>) {
    return data.flat();
  }

  pre(): void {
    this.current -= 1;
  }

  next(): void {
    if (this.current == 1) {
      this.child.emitFormData();
    }
    this.current += 1;
  }

  done(): void {
    console.log('done');
    this.createNewDocument();
  }

  receiveFormData(data: any) {
    console.log('Received data from child:', data);
    this.form = data;
    console.log('The update form: ', this.form);
  }

  newDocument = {
    templateId: '',
    form: {} as any,
    mediaIds: [] as any[],
  };

  createNewDocument() {
    this.createNewDocumentLoader = true;

    console.log('Form: ', this.form);

    const uploadPromises: Promise<any>[] = [];

    // Process uploads
    this.form!.forEach((field, index) => {
      if (field.type === 'upload' && Array.isArray(field.value)) {
        const formData = new FormData();
        field.value.forEach((file: NzUploadFile) => {
          if (file.originFileObj) {
            formData.append('files', file.originFileObj); // Append each file to the 'files' field
          }
        });
        formData.append('owner', 'WEB');
        formData.append('operation', 'UPLOAD');
        formData.append('path', 'authorise');
        formData.append('data', '{}');

        // Add each upload as a promise
        const uploadPromise = new Promise<void>((resolve, reject) => {
          this.cdnService.uploadFile(formData).subscribe({
            next: (response) => {
              console.log(`Upload successful`, response);
              field.value = response.data; // Update the field with the response
              resolve(); // Mark this upload as complete
            },
            error: (error) => {
              console.error(`Error uploading files`, error);
              reject(error); // Mark this upload as failed
            },
          });
        });

        uploadPromises.push(uploadPromise);
      }
    });

    // Wait for all uploads to complete
    Promise.all(uploadPromises)
      .then(() => {
        console.log('All uploads complete.');

        // Proceed with the rest of the logic
        console.log('Form after uploading: ', this.form);

        this.newDocument.templateId = this.selectedTemplate;
        this.newDocument.form = {
          time: new Date().toLocaleTimeString(),
          blocks: this.form,
        };

        this.documentsService.newDocument(this.newDocument);
      })
      .catch((error) => {
        console.error('Error in one or more uploads:', error);
      });
  }

  getCategories() {
    this.getCategoriesLoader = true;
    this.categoriesService.getCategories();
  }

  onGetCategories(response: any) {
    if (response.success) {
      this.categories = response.data;
      console.log(this.categories);
      this.createCategoriesList(this.categories);
    } else {
      this.categories = null;
      this.notificationService.create(
        'error',
        'Error',
        'Failed to fetch categories',
      );
    }
    setTimeout(() => (this.getCategoriesLoader = false), 800);
  }

  createCategoriesList(categories: any) {
    // Ensure categoriesList is initialized
    this.categoriesList = [];

    for (let category of categories) {
      console.log(category);
      let option = {
        value: category.name,
        label: category.name,
        children: [] as any[],
      };

      for (let subcategory of category.subCategories) {
        console.log(subcategory);
        let sub = {
          value: subcategory.name,
          label: subcategory.name,
          children: [] as any[],
        };

        for (let template of subcategory.templates) {
          console.log(template);
          let temp = {
            value: template.id,
            label: template.title,
            isLeaf: true,
          };
          sub.children.push(temp); // Push to sub's children
        }

        option.children.push(sub); // Push to option's children
      }

      this.categoriesList.push(option); // Push to categoriesList
    }
  }

  selectedTemplate?: any;
  selectTemplateLoader: boolean = false;

  onSelectTemplate(value: any): void {
    this.template = null;
    this.agreement = null;
    this.selectTemplateLoader = true;
    console.log('The selected value: ', value);
    this.selectedTemplate = value[2];
    console.log(this.selectedTemplate);
    this.getSelectedTemplate(value[2]);
  }

  getSelectedTemplate(id: any) {
    this.getTemplateLoader = true;
    console.log('Getting template');
    this.templatesService.getTemplate(id);
  }

  getSlaAgreement(id: any) {
    this.getSlaLoader = true;
    this.templatesService.getSlaAgreement(id);
  }

  getTemplateLoader: boolean = false;
  getSlaLoader: boolean = false;

  genericFormSubcategoryId: number = 252;

  openGenericFormModal() {
    this.showModal();
  }

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  onCreateTemplateSuccess(res: any) {
    console.log(res);
    this.selectedTemplate = res.data.id;
    this.getSelectedTemplate(this.selectedTemplate);
    this.handleCancel();
  }

  ngOnDestroy(): void {
    this.subs.dispose();
  }
}
