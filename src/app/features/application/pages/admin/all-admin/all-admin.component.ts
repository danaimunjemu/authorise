import { Component } from '@angular/core';
import {DocumentsService} from "../../../services/documents.service";
import {RoutingService} from "../../../../../core/services/routing.service";

@Component({
  selector: 'app-all-admin',
  templateUrl: './all-admin.component.html',
  styleUrl: './all-admin.component.scss'
})
export class AllAdminComponent {

  constructor(
    private documentsService: DocumentsService,
    private routingService: RoutingService,
  ) {
  }

  navigateTo(page: string) {
    this.routingService.navigateByUrl('authorise/admin/' + page)
  }

  onBack(): void {
    this.routingService.navigateByUrl('authorise/workspace');
  }

}
