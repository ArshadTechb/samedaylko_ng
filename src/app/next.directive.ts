import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement)
   }

   @HostListener('click')
   nextFunc(){
    // console.log(this.el.nativeElement)
    var elm = this.el.nativeElement.parentElement;
    console.log(elm)
   }

}
