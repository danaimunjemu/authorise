import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelfServiceService } from '../../../../services/self-service.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { SubscriptionsManager } from '../../../../../../core/helpers/SubscriptionsManager';
import { RoutingService } from '../../../../../../core/services/routing.service';
import { CdnService } from '../../../../services/cdn.service';
import { CookiesService } from '../../../../../shared/storage/cookies.service';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrl: './view-ticket.component.scss'
})
export class ViewTicketComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private selfService: SelfServiceService, private notificationService: NzNotificationService, private routingService: RoutingService, private cdnService: CdnService, private cookiesService: CookiesService){}

  ticket?: any;
  record?: any;
  user = this.cookiesService.getCookie('user');

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.route.queryParams.subscribe((queryParams: any) => {
        const service = queryParams['service'];
        console.log(service); // Output the value of the 'service' query parameter
        this.getTicket(params['id'], service);
      });
    });

    this.subs.add = this.selfService.getTicket$.subscribe((res: any) => {
      this.onGetTicket(res);
    });

    this.subs.add = this.cdnService.downloadResponse$.subscribe((res: any) => {
      this.onDownloadFile(res);
    });

    this.subs.add = this.cdnService.openResponse$.subscribe((res: any) => {
      this.onOpenFile(res);
    });

    this.subs.add = this.selfService.submitForApproval$.subscribe((res: any) => {
      this.onSubmitForApproval(res);
    });
  }

  submitForApprovalLoader: boolean = false;

  onGetTicket(res: any) {
    console.log("🔔 FETCH TICKET RESPONSE: \n", res)
    if (res.success) {
      this.ticket = res.data.ticket;
      this.record = res.data.record;
    } else {
      this.notificationService.create('error', 'Error', 'Failed to load ticket')
    }
      
  }

  onSubmitForApproval(res: any) {
    console.log("🔔 SUBMIT FOR APPROVAL RESPONSE: \n", res)
    if (res.success) {
      this.notificationService.create('success', 'Success', res.message)
      this.getTicket(this.ticket.ticketId, this.ticket.service);
    } else {
      this.notificationService.create('error', 'Error', res.message)
    }
    this.submitForApprovalLoader = false;
  }

  onBack(): void {
    this.routingService.navigateByUrl('authorise/self-service-admin');
  }

  submitForApproval() {
    this.submitForApprovalLoader = true;
    this.selfService.submitForApproval({"id": this.ticket.ticketId, "actioner": this.user.email}, this.ticket.service);
  }

  downloadFile(req: any) {
    this.downloadFileLoader = true;
    this.fileName = req;
    this.cdnService.downloadFile(req);
  }

  openFile(req: any) {
    this.downloadFileLoader = true;
    this.fileName = req;
    this.cdnService.openFile(req);
  }

  onOpenFile(res: any) {
    console.log(res);
    // Convert response body to a Blob
    const fileBlob = new Blob([res.body], { type: res.body.type });
  
    // Create a URL for the Blob
    const fileUrl = URL.createObjectURL(fileBlob);
  
    // Open the file in a new tab
    window.open(fileUrl, '_blank');
  
    // Clean up the URL after some time
    setTimeout(() => {
      URL.revokeObjectURL(fileUrl);
    }, 5000); // Delay cleanup to ensure the file opens properly
  
    this.downloadFileLoader = false;
  }

  downloadFileLoader: boolean = false;
  fileName?: any;

  onDownloadFile(res: any) {
    console.log(res);
    // Assuming the response body contains the file as a Blob
    // // Assuming 'res' is the complete HTTP response object
    const fileBlob = new Blob([res.body], { type: res.body.type });

    // Extract Content-Disposition header if available
    const contentDisposition = res.headers.get('Content-Disposition');
    let fileName = this.fileName; // Default filename

    if (contentDisposition && contentDisposition.indexOf('attachment') !== -1) {
      const matches = /filename="([^"]*)"/.exec(contentDisposition);
      if (matches && matches[1]) {
        fileName = matches[1];
      }
    }

    // Create a URL for the Blob
    const fileUrl = URL.createObjectURL(fileBlob);

    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.target = '_blank';

    // Use the filename extracted from Content-Disposition or fallback to default filename
    link.download = fileName;

    // Trigger the file download
    link.click();

    // Clean up the URL after the file is downloaded
    setTimeout(() => {
      URL.revokeObjectURL(fileUrl);
    }, 1000);
    this.downloadFileLoader = false;
  }

  ngOnDestroy(): void {
    this.subs.dispose()
  }

  getTicket(req: any, service: any): void {
    this.selfService.getTicket(req, service);
  }

  openAuthoriseDocument(req: any){
    this.routingService.navigateByUrl('authorise/documents/view/' + req);
  }

  editToggler: boolean = false;

  toggleEdit() {
    this.editToggler = !this.editToggler;
  }

  subs = new SubscriptionsManager();

}
