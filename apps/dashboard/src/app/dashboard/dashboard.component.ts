import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'mfe-dashboard-entry',
  template: `<div class="remote-entry">
    <h2>dashboard's Remote Entry Component (:4203)</h2>
    <ng-container #widgetsHolder></ng-container>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 1em;
        border: 2px dotted blue;
      }
    `,
  ],
})
export class DashboardComponent implements OnInit {

  @ViewChild('widgetsHolder', { read: ViewContainerRef, static: true })
  widgetsHolder: ViewContainerRef | undefined;

  constructor(private vcr: ViewContainerRef) { }

  async ngOnInit() {
    await this.loadHeaderMfe();
  }

  private async loadHeaderMfe() {
    const { RemoteEntryComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:4206/remoteEntry.js',
      type: 'module',
      exposedModule: './WidgetComponent'
    });
    if (this.widgetsHolder) {
      this.widgetsHolder.createComponent(RemoteEntryComponent);
    }
  }
}
