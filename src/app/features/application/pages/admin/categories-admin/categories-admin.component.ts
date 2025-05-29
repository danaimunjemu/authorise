import { Component } from '@angular/core';
import {RoutingService} from "../../../../../core/services/routing.service";

@Component({
  selector: 'app-categories-admin',
  templateUrl: './categories-admin.component.html',
  styleUrls: ['./categories-admin.component.scss', './categories.scss']
})
export class CategoriesAdminComponent {

  constructor(
      private routingService: RoutingService
  ) {
  }

  onBack(): void {
    this.routingService.navigateByUrl('authorise/admin');
  }

}
