import {Component, OnInit} from '@angular/core';
import {DocumentsService} from "../../services/documents.service";
import {RoutingService} from "../../../../core/services/routing.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {

  constructor(
    private documentsService: DocumentsService,
    private routingService: RoutingService,
  ) {
  }

  ngOnInit(): void {}

}
