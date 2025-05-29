import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CookiesService } from '../../shared/storage/cookies.service';
import { Router } from '@angular/router';
import { db } from '../../shared/storage/db/db';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  loginResponse$ = new Subject();

  constructor(
    private http: HttpClient,
    private cookiesService: CookiesService,
    private router: Router,
  ) {}

  login(request: any) {
    this.http
      .post(AUTHORISE_SERVICE_URL + 'auth/login', request)
      .subscribe((response: any) => {
        this.loginResponse$.next(response);
      });

    /** this.http
      .get(AUTHORISE_SERVICE_URL + 'auth/me')
      .subscribe((response: any) => {
        this.loginResponse$.next(response);
      }); */
  }

  logout() {
    this.cookiesService.deleteCookies();
    localStorage.clear();
    db.clearAllDatabases().then();
    this.router.navigateByUrl('auth').then();
  }

  saveLoginResponse(loginResponse: any) {
    let signature = loginResponse.user.signature;
    delete loginResponse.user.signature;
    console.log('The user');
    console.log(loginResponse.user);
    this.cookiesService.addCookie('token', loginResponse.token);
    this.cookiesService.addCookie('tokenType', loginResponse.tokenType);
    this.cookiesService.addCookie('user', loginResponse.user);
    localStorage.setItem('signature', signature);
    this.cookiesService.addCookie('configs', loginResponse.configs);

    console.log('');
    console.log('From Cookie Storage:');

    console.log('token: ', this.cookiesService.getCookie('token'));
    console.log('tokenType: ', this.cookiesService.getCookie('tokenType'));
    console.log('user: ', this.cookiesService.getCookie('user'));
    console.log('signature: ', localStorage.getItem('signature'));
    console.log('configs: ', this.cookiesService.getCookie('configs'));
  }
}
