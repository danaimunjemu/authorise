import {inject} from '@angular/core';
import {
  HttpRequest,
  HttpEvent,
  HttpHeaders, HttpHandlerFn
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CookiesService } from "../../features/shared/storage/cookies.service";


export function httpInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {


  const token = inject(CookiesService).getCookie('token');

  console.log("🌐HTTP Request Intercepted")
  console.log(`Request before formatting: ${req}`)

  // let token = cookiesService.getCookie('token');

  let headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + token)
    .set('x-gateway-origin', 'client')
    .set('x-authorise-admin', 'admin@authorise.net')
    .set('Access-Control-Allow-Origin', '*')

  req = req.clone({ headers });

  console.log(`Request after formatting: ${req}`)

  return next(req);


}

