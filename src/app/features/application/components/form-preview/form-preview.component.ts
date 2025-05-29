import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrl: './form-preview.component.scss',
})
export class FormPreviewComponent implements OnInit {
  @Input() fields!: any;

  ngOnInit() {
    console.log('Fields: ', this.fields);
    this.fields = this.fields.flat();
  }
}
