import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FooterDirective } from './directives/footer.directive';
import { HeaderDirective } from './directives/header.directive';
import { DashboardDirective } from './directives/dashboard.directive';

@NgModule({
  declarations: [AppComponent, FooterDirective, HeaderDirective, DashboardDirective],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'header',
          loadChildren: () =>
            import('header/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'footer',
          loadChildren: () =>
            import('footer/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'dashboard',
          loadChildren: () =>
            import('dashboard/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'wallet',
          loadChildren: () =>
            import('wallet/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'takeaways',
          loadChildren: () =>
            import('takeaways/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'widget',
          loadChildren: () =>
            import('widget/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
