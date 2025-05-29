import { Component } from '@angular/core';
import {DocumentsService} from "../../../services/documents.service";
import {RoutingService} from "../../../../../core/services/routing.service";
import {NzTabPosition} from "ng-zorro-antd/tabs";

@Component({
  selector: 'app-templates-admin',
  templateUrl: './templates-admin.component.html',
  styleUrl: './templates-admin.component.scss'
})
export class TemplatesAdminComponent {

  constructor(
    private documentsService: DocumentsService,
    private routingService: RoutingService,
  ) {
  }

  onBack(): void {
    this.routingService.navigateByUrl('authorise/admin/all');
  }



  tabs: Array<{ name: string }> = [
    {name: 'Categories' },
    {name: 'SLAs' },
    {name: 'Forms' },

  ];
  nzTabPosition: NzTabPosition = 'left';

  ngOnInit(): void {}

}
