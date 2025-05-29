import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightText]'
})
export class HighlightTextDirective {

  @HostListener('mouseup')
  onMouseUp() {
    const selectedText = window.getSelection()?.toString();
    if (selectedText) {
      console.log('Selected text:', selectedText);
    }
  }

}
