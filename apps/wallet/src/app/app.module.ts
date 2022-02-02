/*
 * This WalletModule is imported here to allow TS to find the Module during
 * compilation, allowing it to be included in the built bundle. This is required
 * for the Module Federation Plugin to expose the Module correctly.
 * */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      },
      { 
        path: 'wallet', 
        loadChildren: () => import('./wallet/wallet.module')
            .then(m => m.WalletModule)
    }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
