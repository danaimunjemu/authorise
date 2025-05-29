import { Component } from '@angular/core';
import {DocumentsService} from "../../../services/documents.service";
import {RoutingService} from "../../../../../core/services/routing.service";

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrl: './users-admin.component.scss'
})
export class UsersAdminComponent {

  constructor(
    private documentsService: DocumentsService,
    private routingService: RoutingService,
  ) {
  }

  checkOptionsOne = [
    { label: 'Apple', value: 'Apple', checked: true },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ];

  log(value: object[]): void {
    console.log(value);
  }

  onBack(): void {
    this.routingService.navigateByUrl('authorise/admin/all');
  }

}
