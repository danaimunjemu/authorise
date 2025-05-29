import { Component } from '@angular/core';
import {DocumentsService} from "../../../services/documents.service";
import {RoutingService} from "../../../../../core/services/routing.service";

@Component({
  selector: 'app-permissions-admin',
  templateUrl: './permissions-admin.component.html',
  styleUrl: './permissions-admin.component.scss'
})
export class PermissionsAdminComponent {

  constructor(
    private documentsService: DocumentsService,
    private routingService: RoutingService,
  ) {
  }

  onBack(): void {
    this.routingService.navigateByUrl('authorise/admin/all');
  }

}
