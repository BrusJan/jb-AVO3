import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[headerHost]',
})
export class HeaderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}