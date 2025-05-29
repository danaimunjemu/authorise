import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelfServiceService {

  getTickets$ = new Subject();
  getTicket$ = new Subject();
  submitForApproval$ = new Subject();

  constructor(private http: HttpClient) { }

  getTickets() {
    // this.http.post(SELF_SERVICE_URL + 'tickets?branch=' + req, {}).subscribe((res: any) => {
    //   this.getTickets$.next(res);
    // })
    this.http.post(SELF_SERVICE_URL + 'tickets', {}).subscribe((res: any) => {
      this.getTickets$.next(res);
    })
  }

  // getTicket(req: any, service: any) {
    getTicket(req: any, service: any) {
    this.http.post(SELF_SERVICE_URL + 'query/ticket/' + req + '?service=' + service, {}).subscribe((res: any) => {
      this.getTicket$.next(res);
    })
  }

  // submitForApproval(req: any, service: any){
    submitForApproval(req: any, service: any){
    this.http.post(SELF_SERVICE_URL + 'submit-for-approval?service=' + service, req).subscribe((res: any) => {
      this.submitForApproval$.next(res);
    })
  }
}
