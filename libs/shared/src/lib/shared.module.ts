import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LookupService } from './microfrontends/lookup.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromApp from './state/app.reducer';
import { AppEffects } from './state/app.effects';
import { AppFacade } from './state/app.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(fromApp.APP_FEATURE_KEY, fromApp.reducer),
    EffectsModule.forFeature([AppEffects]),
  ],
  providers: [LookupService, AppFacade],
})
export class SharedModule {}
