import { Component } from '@angular/core';
import {RoutingService} from "../../../../../../core/services/routing.service";

@Component({
  selector: 'app-all-templates',
  templateUrl: './all-templates.component.html',
  styleUrl: './all-templates.component.scss'
})
export class AllTemplatesComponent {

  constructor(
    private routingService: RoutingService,
  ) {
  }

  createTemplate(){
    this.routingService.navigateByUrl('authorise/admin/templates/create');
  }

  onBack(): void {
    this.routingService.navigateByUrl('authorise/workspace');
  }

}
