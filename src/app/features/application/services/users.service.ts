import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  getUsersResponse$ = new Subject();
  uploadSignatureResponse$ = new Subject();

  constructor(private http: HttpClient) {}

  getUsers() {
    this.http
      .get(AUTHORISE_SERVICE_URL + 'master/users')
      .subscribe((response: any) => {
        this.getUsersResponse$.next(response);
      });
  }

  uploadSignature(req: any) {
    this.http
      .post(AUTHORISE_SERVICE_URL + 'master/signature/upload', req)
      .subscribe((res: any) => {
        this.uploadSignatureResponse$.next(res);
      });
  }
}
