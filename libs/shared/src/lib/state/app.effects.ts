import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as AppActions from './app.actions';
import * as AppFeature from './app.reducer';

@Injectable()
export class AppEffects {
  constructor(private readonly actions$: Actions) {}
}
