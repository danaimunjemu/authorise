import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionsManager } from '../../../../../../core/helpers/SubscriptionsManager';
import { CategoriesService } from '../../../../services/categories.service';
import { db } from '../../../../../shared/storage/db/db';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TemplatesService } from '../../../../services/templates.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss', '../categories.scss'],
})
export class ViewCategoryComponent implements OnInit, OnDestroy {
  categoryId: any = null;
  category: any = null;
  getCategoryLoader: boolean = false;
  template: any = null;
  getTemplateLoader: boolean = false;

  createSubcategoryFormToggle: boolean = false;
  createSubcategoryLoader: boolean = false;
  createSubcategoryForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    category: new FormControl({}, []),
  });

  createSubcategory() {
    this.createSubcategoryFormToggle = true;
  }

  cancelCreateSubcategory() {
    this.createSubcategoryFormToggle = false;
  }

  submitCreateSubcategory() {
    this.createSubcategoryLoader = true;
    console.log('Submit');
    this.categoriesService.createSubcategory(this.createSubcategoryForm.value);
  }

  subs = new SubscriptionsManager();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private templatesService: TemplatesService,
    private notificationService: NzNotificationService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.categoryId = params.get('id');
      this.getCategory(this.categoryId);
    });

    this.subs.add = this.categoriesService.createSubcategoryResponse$.subscribe(
      (res: any) => {
        this.onCreateSubcategory(res);
      },
    );

    this.subs.add = this.categoriesService.getCategoryResponse$.subscribe(
      (res: any) => {
        this.onGetCategory(res);
      },
    );

    this.subs.add = this.templatesService.getTemplateResponse$.subscribe(
      (res: any) => {
        this.onGetTemplate(res);
      },
    );
  }

  onGetTemplate(res: any) {
    if (res.success) {
      console.log(res);
      this.template = res.data;
    } else {
      this.notificationService.create('error', 'Error', res.message);
    }
    this.getTemplateLoader = false;
  }

  onGetCategory(res: any) {
    if (res.success) {
      this.category = res.data;
      this.createSubcategoryForm.controls.category.setValue({
        id: this.category.id,
        name: this.category.name,
      });
    } else {
      this.notificationService.create('error', 'Error', res.message);
    }
    this.getCategoryLoader = false;
  }

  onCreateSubcategory(res: any) {
    if (res.success) {
      this.notificationService.create(
        'success',
        'Success',
        'Subcategory created successfully',
      );
      this.updateSubcategory();
      this.createSubcategoryLoader = false;
      this.createSubcategoryFormToggle = false;
    } else {
      this.notificationService.create(
        'error',
        'Error',
        'Failed to create subcategory',
      );
    }
  }

  updateSubcategory() {
    this.getCategory(this.categoryId);
  }

  onCreateTemplateSuccess(res: any) {
    this.updateSubcategory();
    this.handleCancel();
  }

  addTemplateModal(subcategoryId: number) {
    this.selectedSubcategoryId = subcategoryId;
    this.showModal();
  }

  getCategory(id: any) {
    this.getCategoryLoader = true;
    this.categoriesService.getCategory(id);
  }

  selectedSubcategoryId!: number;

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  isViewTemplateModalVisible = false;

  openViewTemplateModal(id: any): void {
    this.getTemplate(id);
    this.isViewTemplateModalVisible = true;
  }

  handleViewTemplateModalCancel(): void {
    this.isViewTemplateModalVisible = false;
  }

  getTemplate(id: any) {
    this.getTemplateLoader = true;
    this.templatesService.getTemplate(id);
  }

  ngOnDestroy(): void {
    this.subs.dispose();
  }
}
