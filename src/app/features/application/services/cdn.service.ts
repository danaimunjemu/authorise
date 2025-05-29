import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CdnService {
  constructor(private http: HttpClient) {}

  uploadFile(req: any): Observable<any> {
    return this.http.post(CDN_SERVICE_URL, req);
  }

  downloadFile(req: any) {
    this.http
      .get(CDN_SERVICE_URL + '/download/' + req, {
        observe: 'response',
        responseType: 'blob',
      })
      .subscribe({
        next: (res: any) => {
          this.downloadResponse$.next(res);
        },
        error: (error) => {
          console.error('Error downloading file:', error);
        },
      });
  }

  openFile(req: any) {
    this.http
      .get(CDN_SERVICE_URL + '/download/' + req, {
        observe: 'response',
        responseType: 'blob',
      })
      .subscribe({
        next: (res: any) => {
          this.openResponse$.next(res);
        },
        error: (error) => {
          console.error('Error opening file:', error);
        },
      });
  }

  downloadResponse$ = new Subject<Blob>(); // Specify the type as Blob
  openResponse$ = new Subject<Blob>(); // Specify the type as Blob

  /** uploadResponse$ = new Subject();


  uploadFile(req: any) {
    this.http.post(CDN_SERVICE_URL, req).subscribe((res: any) => {
      this.uploadResponse$.next(res);
    });
  } */
}
