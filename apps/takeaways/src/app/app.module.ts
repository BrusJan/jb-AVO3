/*
 * This RemoteEntryModule is imported here to allow TS to find the Module during
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
        path: 'takeaways', 
        loadChildren: () => import('./takeaways/takeaways.module')
            .then(m => m.TakeawaysModule)
    }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
