import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { LookupService } from '@mfe/shared';

@Component({
  selector: 'mfe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  @ViewChild('headerHost', { read: ViewContainerRef, static: true })
  headerHost: ViewContainerRef | undefined;
  @ViewChild('dashboardHost', { read: ViewContainerRef, static: true })
  dashboardHost: ViewContainerRef | undefined;
  @ViewChild('footerHost', { read: ViewContainerRef, static: true })
  footerHost: ViewContainerRef | undefined;

  constructor() {}

  async ngOnInit() {
    await this.loadHeaderMfe();
    await this.loadFooterMfe();
  }

  private async loadHeaderMfe() {
    const { AppComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      type: 'module',
      exposedModule: './HeaderComponent'
    });
    if (this.headerHost) {
      this.headerHost.createComponent(AppComponent);
    }
  }

  private async loadDashboardMfe() {
    const { RemoteEntryComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      type: 'module',
      exposedModule: './DashboardComponent'
    });
    if (this.dashboardHost) {
      this.dashboardHost.createComponent(RemoteEntryComponent);
    }
  }

  private async loadFooterMfe() {
    const { RemoteEntryComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      type: 'module',
      exposedModule: './FooterComponent'
    });
    if (this.footerHost) {
      this.footerHost.createComponent(RemoteEntryComponent);
    }
  }

}
