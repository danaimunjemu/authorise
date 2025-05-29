  import { Injectable } from '@angular/core';
  import {Subject} from "rxjs";
  import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  constructor(
    private http: HttpClient,
  ) { }

  createTemplateResponse$ = new Subject();
  getTemplateResponse$ = new Subject();
  getSlaAgreementResponse$ = new Subject();

  createTemplate(req: any) {
    this.http.post(AUTHORISE_SERVICE_URL + 'master/templates', req).subscribe((response: any) => {
      this.createTemplateResponse$.next(response);
    })
  }

  getTemplate(req: any) {
    this.http.get(AUTHORISE_SERVICE_URL + 'master/templates?id=' + req).subscribe((response: any) => {
      this.getTemplateResponse$.next(response);
    })
  }

  getSlaAgreement(req: any) {
    this.http.get(AUTHORISE_SERVICE_URL + 'master/sla/' + req).subscribe((response: any) => {
      this.getSlaAgreementResponse$.next(response);
    })
  }

}
