import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appMult]'
})
export class MultDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

    @Input() set appMult(numero: number) {
      for (let i = 0; i < numero; i++) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    }
  
}
