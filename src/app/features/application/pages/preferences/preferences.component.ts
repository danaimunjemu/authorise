import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../../../../core/services/routing.service';
import { CookiesService } from '../../../shared/storage/cookies.service';
import { UsersService } from '../../services/users.service';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { SubscriptionsManager } from '../../../../core/helpers/SubscriptionsManager';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrl: './preferences.component.scss',
})
export class PreferencesComponent implements OnInit {
  constructor(
    private routingService: RoutingService,
    private cookiesService: CookiesService,
    private userService: UsersService,
    private notificationService: NzNotificationService,
    private cookieService: CookieService,
  ) {}

  ngOnInit(): void {
    this.user = this.cookiesService.getCookie('user');
    console.log(this.user);
    this.signature =
      'data:image/png;base64,' + localStorage.getItem('signature');
    this.subs.add = this.userService.uploadSignatureResponse$.subscribe(
      (res: any) => {
        this.onUploadSignature(res);
      },
    );
  }

  onUploadSignature(res: any) {
    console.log(res);
    if (res.success) {
      this.notificationService.create('success', 'Success', res.message);
      localStorage.removeItem('signature');
      localStorage.setItem('signature', res.data);
      this.isVisible = false;
      this.fileList = [];
      this.signature =
        'data:image/png;base64,' + localStorage.getItem('signature');
    } else {
      this.notificationService.create('error', 'Error', res.message);
    }
    this.uploadSignatureLoader = false;
  }

  subs = new SubscriptionsManager();

  user?: any;
  signature?: any;

  onBack(): void {
    this.routingService.navigateByUrl('authorise/workspace');
  }

  isVisible = false;
  isConfirmLoading = false;

  addSignature() {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  fileList: NzUploadFile[] = [];
  uploadSignatureLoader: boolean = false;

  uploadSignature() {
    this.uploadSignatureLoader = true;
    var formData: any = new FormData();
    for (const file of this.fileList) {
      formData.append('file', file);
    }
    this.userService.uploadSignature(formData);
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };
}
