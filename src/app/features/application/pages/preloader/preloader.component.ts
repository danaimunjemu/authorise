import {Component, OnDestroy, OnInit} from '@angular/core';
import {RoutingService} from "../../../../core/services/routing.service";
import { db, Category } from "../../../shared/storage/db/db";
import {CategoriesService} from "../../services/categories.service";
import {SubscriptionsManager} from "../../../../core/helpers/SubscriptionsManager";

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.scss'
})
export class PreloaderComponent implements OnInit, OnDestroy{
  constructor(
    private routingService: RoutingService,
    private categoriesService: CategoriesService
  ) {
  }

  loadingText: string = 'Loading your information';
  loadingInfo: string = "Please wait as we gather your information";
  loadingComplete: boolean = false;

  subs = new SubscriptionsManager();
  categories?: any;

  ngOnInit() {

    this.getCategories();

    this.subs.add = this.categoriesService.getCategoriesResponse$.subscribe((response: any) => {
      if (response.success) {
        this.categories = response.data;
        for (let category of response.data) {
          this.addCategory(category);
        }
      } else {
        console.log("Failed to get categories");
      }
    })

    // TODO remove this once the actual logic to preload data is available
    setTimeout(() => {

      this.loadingComplete = true;
      this.loadingText = "Success";
      this.loadingInfo = "Information loading successfully"
    }, 5000);
    setTimeout(() => {
      console.log("Done")
      this.routingService.navigateByUrl('/authorise');
    }, 1000)
  }

  getCategories() {
    this.categoriesService.getCategories();
  }

  async addCategory(category: any) {
    await db.categories.add({
      id: category.id,
      name: category.name,
      subCategories: category.subCategories
    });
  }

  ngOnDestroy(): void {
    this.subs.dispose()
  }

}
