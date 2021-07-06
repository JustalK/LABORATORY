import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myAppDirective]'
})
export default class CustomDirective {
  @Input() myAppDirective = '';

  constructor(private el: ElementRef) { }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.myAppDirective);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

}
