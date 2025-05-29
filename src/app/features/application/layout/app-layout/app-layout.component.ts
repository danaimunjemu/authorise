import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../authentication/services/authentication.service';
import { CookiesService } from '../../../shared/storage/cookies.service';
import { RoutingService } from '../../../../core/services/routing.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss',
})
export class AppLayoutComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private cookiesService: CookiesService,
    private routingService: RoutingService,
    private cdr: ChangeDetectorRef,
  ) {
    console.log(this.user);
    this.checkIfAdmin();
  }

  ngOnInit(): void {
    this.cdr.detectChanges();
  }

  user = this.cookiesService.getCookie('user');
  isAdmin: boolean = false;
  // isBranchTeller: boolean = false;
  checkIfAdmin() {
    for (let authority of this.user.authorities) {
      if (authority.authority == 'ADMIN') {
        this.isAdmin = true;
      }
      // if (authority.authority == 'TELLER') {
      //   this.isBranchTeller = true;
      // }
    }
  }

  currentDate = new Date();
  isVisible = false;
  isConfirmLoading = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  openUserPreferences() {
    this.routingService.navigateByUrl('/authorise/preferences');
  }

  logout() {
    this.authService.logout();
  }
}
