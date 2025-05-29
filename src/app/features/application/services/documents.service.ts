import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DocumentInterface} from "../interfaces/document.interface";

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {



  constructor(
    private http: HttpClient,
  ) { }




  newDocumentResponse$ = new Subject();
  /**
   * @param {any} req - Request body.
   */
  newDocument(req: any){
    this.http.post(AUTHORISE_SERVICE_URL + 'documents', req).subscribe((response: any) => {
      this.newDocumentResponse$.next(response);
    });
  }

  getDocumentResponse$ = new Subject();
  getDocument(id: any) {
    console.log("The requested ID: ", id)
    this.http.get(AUTHORISE_SERVICE_URL + 'documents/' + id).subscribe((response: any) => {
      this.getDocumentResponse$.next(response);
    });
  }


  actionDocumentResponse$ = new Subject();
  /**
   * Works for reassignment, share, link and unlink documents as well
   * @param {any} req - Request body.
   */
  actionDocument(req: any) {
    this.http.put(AUTHORISE_SERVICE_URL + 'documents/action', req).subscribe((response: any) => {
      this.actionDocumentResponse$.next(response);
    });
  }


  revokeShareResponse$ = new Subject();
  revokeShare(docId: any, shareId: any) {
    this.http.put(AUTHORISE_SERVICE_URL + 'documents/revoke/share/' + docId + '/' + shareId, {}).subscribe((response: any) => {
      this.revokeShareResponse$.next(response);
    });
  }


  commentResponse$ = new Subject();
  comment(req: any) {
    this.http.post(AUTHORISE_SERVICE_URL + 'documents/comment', req).subscribe((response: any) => {
      this.commentResponse$.next(response);
    });
  }


  fetchDocumentsResponse$ = new Subject();
  fetchDocuments(req: any) {
    this.http.post(AUTHORISE_SERVICE_URL + 'documents/fetch', req).subscribe((response: any) => {
      this.fetchDocumentsResponse$.next(response);
    });
  }


  recentDocumentsResponse$ = new Subject();
  getRecentDocuments() {
    this.http.get(AUTHORISE_SERVICE_URL + 'documents/recent').subscribe((response: any) => {
      this.recentDocumentsResponse$.next(response);
    });
  }


  // my stats
  dashboardStatsResponse$ = new Subject();
  getDashboardStats() {
    this.http.get(AUTHORISE_SERVICE_URL + 'documents/stats').subscribe((response: any) => {
      this.dashboardStatsResponse$.next(response);
    });
  }

  updateDocumentResponse$ = new Subject();
  updateDocument(req: any) {
    this.http.put(AUTHORISE_SERVICE_URL + 'documents', req).subscribe((response: any) => {
      this.updateDocumentResponse$.next(response);
    });
  }




}
