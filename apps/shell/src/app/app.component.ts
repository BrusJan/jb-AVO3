import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DashboardDirective } from './directives/dashboard.directive';
import { FooterDirective } from './directives/footer.directive';
import { HeaderDirective } from './directives/header.directive';

@Component({
  selector: 'mfe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shell';

  @ViewChild(HeaderDirective, {static: true}) headerHost!: HeaderDirective;
  @ViewChild(DashboardDirective, {static: true}) dashboardHost!: DashboardDirective;
  @ViewChild(FooterDirective, {static: true}) footerHost!: HeaderDirective;

  constructor(
    private vcref: ViewContainerRef,
    ) {
  }

  async ngOnInit() {
    await this.loadHeaderMfe();
    await this.loadDashboardMfe();
    await this.loadFooterMfe();
  }

  private async loadHeaderMfe() {
    const { RemoteEntryComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      type: 'module',
      exposedModule: './HeaderComponent'
    });
    this.headerHost.viewContainerRef.createComponent(RemoteEntryComponent);
  }

  private async loadDashboardMfe() {
    const { RemoteEntryComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      type: 'module',
      exposedModule: './DashboardComponent'
    });
    this.dashboardHost.viewContainerRef.createComponent(RemoteEntryComponent);
  }

  private async loadFooterMfe() {
    const { RemoteEntryComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      type: 'module',
      exposedModule: './FooterComponent'
    });
    this.footerHost.viewContainerRef.createComponent(RemoteEntryComponent);
  }

}
