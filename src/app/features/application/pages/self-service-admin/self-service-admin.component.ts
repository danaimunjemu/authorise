import { Component } from '@angular/core';
import { RoutingService } from '../../../../core/services/routing.service';

@Component({
  selector: 'app-self-service-admin',
  templateUrl: './self-service-admin.component.html',
  styleUrl: './self-service-admin.component.scss'
})
export class SelfServiceAdminComponent {

  constructor (
    private routingService: RoutingService,
  ) {}

  onBack(): void {
    this.routingService.navigateByUrl('authorise/workspace');
  }

  newIssue(){}

}
