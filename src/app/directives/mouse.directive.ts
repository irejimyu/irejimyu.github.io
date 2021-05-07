import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouse]'
})
export class MouseDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  @HostListener("document:mousemove", ["$event"])
  onMousemove(e) {
    const deviceType = navigator.userAgent;
    if (!/Mobile|mobile/i.test(deviceType)) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'top', `${e.clientY}px`);
      this.renderer.setStyle(this.elementRef.nativeElement, 'left', `${e.clientX}px`);
      this.renderer.removeClass(this.elementRef.nativeElement, 'hidden')
    }
  }
  @HostListener("document:mouseleave", ["$event"])
  onMouseLeave(e) {
    this.renderer.addClass(this.elementRef.nativeElement, 'hidden');
  }
}
