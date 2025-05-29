import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DocumentsService} from "../../services/documents.service";
import {SubscriptionsManager} from "../../../../core/helpers/SubscriptionsManager";
import {RoutingService} from "../../../../core/services/routing.service";
import {CookiesService} from "../../../shared/storage/cookies.service";
import { Chart } from '@antv/g2';
import {NzNotificationService} from "ng-zorro-antd/notification";

interface FetchDocumentsInterface {
  "page": number;
  "size": number;
  "request": string;
  "status": string | null;
  "sortField": string | null;
  "sortDirection": string | null;
}

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
})
export class WorkspaceComponent implements OnInit, OnDestroy {

  constructor(
    private http: HttpClient,
    private documentsService: DocumentsService,
    private routingService: RoutingService,
    private cookiesService: CookiesService,
    private notificationService: NzNotificationService,
    private cdr: ChangeDetectorRef
  ) {
  }

  subs = new SubscriptionsManager();

  user = this.cookiesService.getCookie('user');

  recentDocuments?: any;
  recentDocumentsLoader: boolean = false;

  dashboardStats?: any;
  dashboardStatsLoader: boolean = false;

  onBack() {

  }

  fetchDocuments() {
    console.log("Documents filter: ", this.fetchDocumentsFilter)
    this.fetchDocumentsLoader = true;
    this.documentsService.fetchDocuments(this.fetchDocumentsFilter);
  }

  documents?: any;
  fetchDocumentsLoader: boolean = false;
  fetchDocumentsFilter: FetchDocumentsInterface = {
    "page": 0,
    "size": 10,
    "request": "OWN",
    "status": null,
    "sortField": null,
    "sortDirection": null
  };

  ngOnInit(): void {
    this.fetchDocuments();

    this.subs.add = this.documentsService.fetchDocumentsResponse$.subscribe((res: any) => {
      this.onFetchDocumentsResponse(res);
    });

    this.getDashboardStats()
    this.subs.add = this.documentsService.dashboardStatsResponse$.subscribe((response: any) => {
      this.onDashboardStatsResponse(response);
      this.dashboardStatsLoader = false;
    })

  }

  onFetchDocumentsResponse(res: any) {
    console.log(res);
    if (res.success) {
      this.documents = res.data.content;
    } else {
      this.notificationService.create(
        'error', 'Error', res.message
      )
    }
    this.fetchDocumentsLoader = false;

    this.cdr.markForCheck();
  }

  onRecentDocumentsResponse(response: any) {
    console.log(response)
    if (response.success) {
      this.recentDocuments= response.data;
    } else {

    }
  }

  openFilteredDocs(filter: any) {
    this.routingService.navigateByUrl('authorise/documents/all?tab=' + filter);
  }

  onDashboardStatsResponse(response: any) {
    console.log(response)
    if (response.success) {
      this.dashboardStats= response.data;

      const chart = new Chart({
        container: 'container',
        autoFit: true,
      });

      chart.coordinate({ type: 'theta', innerRadius: 0.6 });

      chart
        .interval()
        .transform({ type: 'stackY' })
        .data([
          { name: 'My Docs', value: this.dashboardStats.documents },
          { name: 'Shares', value: this.dashboardStats.shares },
          { name: 'Shared with Me', value: this.dashboardStats.sharedWithMe },
          { name: 'Waiting Approval', value: this.dashboardStats.pending },
          { name: 'Actioned', value: this.dashboardStats.actioned },
        ])
        .encode('y', 'value')
        .encode('color', 'name')
        .style('stroke', 'white')
        .style('inset', 1)
        .style('radius', 10)
        .scale ( 'color' , {
          type : 'ordinal' ,
          range : [ '#8a97a3' , '#f75c38' , '#fdb239' , '#2784f3' , '#34b74e' ] ,
        })
        .animate('enter', { type: 'waveIn' })
        .animate('enter', { type: 'waveIn', duration: 1000 });

      chart.render();


      // const chart = new Chart({
      //   container: 'container',
      //   autoFit: true,
      // });
      //
      // chart.coordinate({ type: 'theta' });
      //
      // chart
      //   .interval()
      //   .data([
      //     { type: 'My Docs', count: this.dashboardStats.documents },
      //     { type: 'Shares', count: this.dashboardStats.shares },
      //     { type: 'Shared with Me', count: this.dashboardStats.sharedWithMe },
      //     { type: 'Waiting Approval', count: this.dashboardStats.pending },
      //     { type: 'Actioned', count: this.dashboardStats.actioned },
      //   ])
      //   .transform({ type: 'stackY' })
      //   .encode('color', 'type')
      //   .scale ( 'color' , {
      //     type : 'ordinal' ,
      //     range : [ '#8a97a3' , '#f75c38' , '#fdb239' , '#2784f3' , '#34b74e' ] ,
      //   })
      //   .style('radius', 10)
      //   .encode('y', 'count')
      //   .animate('enter', { type: 'waveIn', duration: 1000 });
      //
      // chart.render();
    } else {

    }
  }

  getRecentDocuments() {
    this.recentDocumentsLoader = true;
    this.documentsService.getRecentDocuments();
  }

  getDashboardStats() {
    this.dashboardStatsLoader = true;
    this.documentsService.getDashboardStats()
  }

  createNewDocument(){
    this.routingService.navigateByUrl('authorise/documents/create');
  }

  viewDocument(id: any) {
    this.routingService.navigateByUrl('authorise/documents/view/' + id);
  }

  ngOnDestroy(): void {
    this.subs.dispose();
  }





}
