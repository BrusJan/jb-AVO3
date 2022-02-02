import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@mfe/shared';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(
      [
        {
          path: 'header',
          loadChildren: () =>
            import('header/Module').then((m) => m.AppModule),
        },
        {
          path: 'footer',
          loadChildren: () =>
            import('footer/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: '',
          loadChildren: () =>
            import('dashboard/Module').then((m) => m.DashboardModule),
        },
        {
          path: 'wallet',
          loadChildren: () =>
            import('wallet/Module').then((m) => m.WalletModule),
        },
        {
          path: 'takeaways',
          loadChildren: () =>
            import('takeaways/Module').then((m) => m.TakeawaysModule),
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
export class AppModule { }
