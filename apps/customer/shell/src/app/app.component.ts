import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'avo3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  @ViewChild('headerHost', { read: ViewContainerRef, static: true })
  headerHost: ViewContainerRef | undefined;

  title = 'customer-shell';

  ngOnInit(): void {
    this.loadLoginMfe();
  }

  private async loadLoginMfe() {
    const { RemoteEntryComponent } = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './HeaderComponent',
    });
    if (this.headerHost) {
      this.headerHost.createComponent(RemoteEntryComponent);
    }
  }
}

