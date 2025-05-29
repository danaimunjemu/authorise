import { Component, OnDestroy, OnInit } from '@angular/core';
import { RoutingService } from '../../../../core/services/routing.service';
import { SubscriptionsManager } from '../../../../core/helpers/SubscriptionsManager';
import { AuthenticationService } from '../../services/authentication.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss', '../auth.scss'],
})
export class SignInComponent implements OnInit, OnDestroy {
  constructor(
    private routingService: RoutingService,
    private authenticationService: AuthenticationService,
    private notification: NzNotificationService,
  ) {}

  passwordVisible = false;
  loginLoader: boolean = false;
  loginResponse?: any;

  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  subs = new SubscriptionsManager();

  ngOnInit(): void {
    this.subs.add = this.authenticationService.loginResponse$.subscribe(
      (response: any) => {
        this.loginResponse = response;
        this.onLoginResponse(this.loginResponse);
      },
    );
  }

  login() {
    this.loginResponse = null;
    this.loginLoader = true;
    if (MOCK_LOGIN) {
      console.log('We are mocking login');
      console.log('To sign up page');
      // TODO Implement a Resolver -> https://angular.dev/api/router/ResolveFn?tab=api
      this.onSuccessfulLogin({});
    } else {
      console.log('We are not mocking login');
      this.authenticationService.login(this.signInForm.value);
    }
  }

  onLoginResponse(response: any) {
    console.log(response);
    if (response.success) {
      console.log(response);
      this.onSuccessfulLogin(response);
    } else {
      this.notification.create('error', 'Login Failed', response.message, {
        nzDuration: 30000,
      });
      this.loginLoader = false;
    }
  }

  onSuccessfulLogin(response: any) {
    if (!MOCK_LOGIN) {
      this.authenticationService.saveLoginResponse(response.data);
    }
    this.loginLoader = false;
    this.routingService.navigateByUrl('preloader');
  }

  ngOnDestroy(): void {
    this.subs.dispose();
  }
}
