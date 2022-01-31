import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dashboardHost]',
})
export class DashboardDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}