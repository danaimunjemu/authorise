import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  getCategoriesResponse$ = new Subject();
  createCategoryResponse$ = new Subject();
  createSubcategoryResponse$ = new Subject();
  getCategoryResponse$ = new Subject();

  constructor(private http: HttpClient) {}

  getCategory(id: any) {
    this.http
      .get(AUTHORISE_SERVICE_URL + 'master/categories?id=' + id)
      .subscribe((res: any) => {
        this.getCategoryResponse$.next(res);
      });
  }

  getCategories() {
    this.http
      .get(AUTHORISE_SERVICE_URL + 'master/categories')
      .subscribe((response: any) => {
        this.getCategoriesResponse$.next(response);
      });
  }

  createCategory(req: any) {
    this.http
      .post(AUTHORISE_SERVICE_URL + 'master/categories', req)
      .subscribe((res: any) => {
        this.createCategoryResponse$.next(res);
      });
  }

  createSubcategory(req: any) {
    this.http
      .post(AUTHORISE_SERVICE_URL + 'master/categories/subcategory', req)
      .subscribe((res: any) => {
        this.createSubcategoryResponse$.next(res);
      });
  }
}
