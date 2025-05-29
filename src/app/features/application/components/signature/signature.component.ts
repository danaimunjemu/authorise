import {AfterViewInit, Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {NgSignaturePadOptions, SignaturePadComponent} from '@almothafar/angular-signature-pad';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrl: './signature.component.scss'
})
export class SignatureComponent implements AfterViewInit{
  @Output() signatureChanged = new EventEmitter<string>();


  @ViewChild('signature')
  public signaturePad!: SignaturePadComponent;

  signaturePadOptions: NgSignaturePadOptions = { // passed through to szimek/signature_pad constructor
    minWidth: 2,
    canvasWidth: 500,
    canvasHeight: 300
  };

  constructor() {
    // no-op
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 2); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete(event: MouseEvent | Touch) {
    // will be notified of szimek/signature_pad's onEnd event
    this.signatureChanged.emit(this.signaturePad.toDataURL());
  }

  drawStart(event: MouseEvent | Touch) {
    // will be notified of szimek/signature_pad's onBegin event
  }

}
