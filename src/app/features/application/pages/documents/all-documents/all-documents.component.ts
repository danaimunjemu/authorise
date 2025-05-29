import {Component, OnDestroy, OnInit, ChangeDetectorRef} from '@angular/core';
import {DocumentsService} from "../../../services/documents.service";
import {SubscriptionsManager} from "../../../../../core/helpers/SubscriptionsManager";
import {RoutingService} from "../../../../../core/services/routing.service";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {ActivatedRoute} from "@angular/router";

interface FetchDocumentsInterface {
  "page": number;
  "size": number;
  "request": string;
  "status": string | null;
  "sortField": string | null;
  "sortDirection": string | null;
}

@Component({
  selector: 'app-all-documents',
  templateUrl: './all-documents.component.html',
  styleUrl: './all-documents.component.scss'
})
export class AllDocumentsComponent implements OnInit, OnDestroy{

  constructor(
    private documentsService: DocumentsService,
    private routingService: RoutingService,
    private notificationService: NzNotificationService,
    private cdr: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute
  ) {
  }

  subs = new SubscriptionsManager();




  createDocument(){
    this.routingService.navigateByUrl('authorise/documents/create');
  }

  onBack(): void {
    this.routingService.navigateByUrl('authorise/workspace');
  }

  tabs = [
    {
      name: 'My Docs',
      value: 'OWN',
      disabled: false
    },
    // {
    //   name: 'Drafts',
    //   value: 'DRAFT',
    //   disabled: false
    // },
    {
      name: 'My Shares',
      value: 'SHARE',
      disabled: false
    },
    {
      name: 'Shared With Me',
      value: 'SHARED_WITH_ME',
      disabled: false
    },
    {
      name: 'Waiting Approval',
      value: 'WAITING_APPROVAL',
      disabled: false
    },
    {
      name: 'Actioner',
      value: 'ACTIONER',
      disabled: false
    },
    {
      name: 'Assignable',
      value: 'ASSIGNABLE',
      disabled: false
    },
  ];

  ngOnInit(): void {
    let request;
    this.activatedRoute.queryParams.subscribe(params => {
      request = params['tab'];
    });

    if (request) {
      this.filterByRequest(request)
    } else {
      this.fetchDocuments();
    }

    this.subs.add = this.documentsService.fetchDocumentsResponse$.subscribe((res: any) => {
      this.onFetchDocumentsResponse(res);
    });
  }

  getSelectedIndex(): number {
    const selectedIndex = this.tabs.findIndex(tab => tab.value === this.selectedTab);
    return selectedIndex >= 0 ? selectedIndex : 0; // Default to the first tab if none match
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

  viewDocument(id: any) {
    this.routingService.navigateByUrl('authorise/documents/view/' + id);
  }

  documents?: any;
  fetchDocumentsLoader: boolean = false;
  fetchDocumentsFilter: FetchDocumentsInterface = {
    page: 0,
    size: 10,
    request: "OWN",
    status: null,
    sortField: null,
    sortDirection: null
  };

  fetchDocuments() {
    console.log("Documents filter: ", this.fetchDocumentsFilter)
    this.fetchDocumentsLoader = true;
    this.documentsService.fetchDocuments(this.fetchDocumentsFilter);
  }

  selectedTab: string | null = null; // To track the selected tab

  filterByRequest(request: any) {
    this.selectedTab = request;
    console.log("Filtering requests now")
    this.fetchDocumentsFilter.request = request;
    this.fetchDocuments();
  }

  ngOnDestroy(): void {
    this.subs.dispose();
  }


}
