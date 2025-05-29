import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService } from '../../../../services/categories.service';
import { SubscriptionsManager } from '../../../../../../core/helpers/SubscriptionsManager';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss', '../categories.scss'],
})
export class AllCategoriesComponent implements OnInit, OnDestroy {
  constructor(
    private categoriesService: CategoriesService,
    private notificationService: NzNotificationService,
    private router: Router,
  ) {}

  categories?: any;
  category?: any;
  getCategoriesLoader?: boolean = false;

  subs = new SubscriptionsManager();

  // Modal View Options

  getCategories() {
    this.getCategoriesLoader = true;
    this.categoriesService.getCategories();
  }

  onGetCategories(response: any) {
    if (response.success) {
      this.categories = response.data;
      console.log(this.categories);
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

  ngOnInit(): void {
    this.getCategories();

    this.subs.add = this.categoriesService.getCategoriesResponse$.subscribe(
      (response: any) => {
        this.onGetCategories(response);
      },
    );

    this.subs.add = this.categoriesService.createCategoryResponse$.subscribe(
      (response: any) => {
        this.onCreateCategory(response);
      },
    );
  }

  onCreateCategory(response: any) {
    if (response.success) {
      this.notificationService.create('success', 'Success', response.message);
      this.createCategoryLoader = false;
      this.getCategories();
      this.handleCancel();
    } else {
      this.notificationService.create(
        'error',
        'Error',
        'Failed to create category',
      );
    }
  }

  createCategoryLoader: boolean = false;
  createCategoryForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  createCategory() {
    this.createCategoryLoader = true;
    this.categoriesService.createCategory(this.createCategoryForm.value);
  }

  openCategory(category: any) {
    this.router.navigate(['/authorise/admin/categories/view/', category.id]);
  }

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.createCategoryForm.reset();
    this.isVisible = false;
  }

  ngOnDestroy(): void {
    this.subs.dispose();
  }
}
