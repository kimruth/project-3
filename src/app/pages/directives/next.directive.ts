import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {
  nativeElement: any;

  constructor(private element: ElementRef) { }

  @HostListener('click')
  nextFunc(){
    let elements = this.element.nativeElement.parentElement.parentElement.childrenElement;
    let item = elements.getElementByClassName('.info');
    elements.append(item[0]);
  }
}
