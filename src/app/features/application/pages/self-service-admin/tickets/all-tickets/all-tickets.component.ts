import { Component, OnDestroy, OnInit } from '@angular/core';
import { SelfServiceService } from '../../../../services/self-service.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { RoutingService } from '../../../../../../core/services/routing.service';
import { SubscriptionsManager } from '../../../../../../core/helpers/SubscriptionsManager';
import { CookiesService } from '../../../../../shared/storage/cookies.service';

@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrl: './all-tickets.component.scss'
})
export class AllTicketsComponent implements OnInit, OnDestroy {
  tickets: any[] = [];
  user = this.cookiesService.getCookie('user');

  constructor(
    private selfService: SelfServiceService, 
    private notificationService: NzNotificationService, 
    private routingService: RoutingService,
    private cookiesService: CookiesService,) {}

  ngOnInit(): void {
    this.loadTickets();
    console.log(this.user)
    this.subs.add = this.selfService.getTickets$.subscribe((res: any) => {
      this.onGetTickets(res);
    })
  }

  subs = new SubscriptionsManager();

  onGetTickets(res: any) {
    console.log("🔔 FETCH TICKETS RESPONSE: \n", res)
    if (res.success) {
      this.tickets = res.data;
    } else {
        this.notificationService.create('error', 'Error', 'Failed to load tickets')
    }
  }

  viewTicket(ticket: any) {
    this.routingService.navigateByUrl("authorise/self-service-admin/tickets/view/" + ticket.ticketId + "?service=" + ticket.service);
  }

  ngOnDestroy(): void {
    this.subs.dispose();
  }

  loadTickets() {
      // this.selfService.getTickets('1055');
      this.selfService.getTickets();
  }

}
