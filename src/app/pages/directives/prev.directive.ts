import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

   nativeElement: string='';

  constructor(private element: ElementRef) { }

  @HostListener('click')
  prevtFunc(){
    let elements = this.element.nativeElement.parentElement.childrenElement;
    let item = elements.getElementByClassName('info');
    elements.append(item[item.length -1]);
  }

}
