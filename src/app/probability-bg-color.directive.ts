import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appProbabilityBgColorDirective]'
})
export class ProbabilityBgColorDirective implements OnInit{

  @Input('appProbabilityBgColorDirective') number: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    setInterval(() => {
      if (this.number < 50) {
        this.renderer.addClass(this.el.nativeElement, 'low-probs');
      } else if (this.number >= 50 && this.number <= 70) {
        this.renderer.addClass(this.el.nativeElement, 'medium-probs');
      } else {
        this.renderer.addClass(this.el.nativeElement, 'high-probs');
      }
    }, 500)
    
  }
}