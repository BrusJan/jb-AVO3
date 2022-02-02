import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as AppActions from './app.actions';
import { AppEntity } from './app.models';

export const APP_FEATURE_KEY = 'app';

export interface State extends EntityState<AppEntity> {
  selectedId?: string | number; // which App record has been selected
  loaded: boolean; // has the App list been loaded
  error?: string | null; // last known error (if any)
  counter: number;
}

export interface AppPartialState {
  readonly [APP_FEATURE_KEY]: State;
}

export const appAdapter: EntityAdapter<AppEntity> =
  createEntityAdapter<AppEntity>();

export const initialState: State = appAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  counter: 0,
});

const appReducer = createReducer(
  initialState,
  on(AppActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(AppActions.loadAppSuccess, (state, { app }) =>
    appAdapter.setAll(app, { ...state, loaded: true })
  ),
  on(AppActions.loadAppFailure, (state, { error }) => ({ ...state, error })),
  on(AppActions.increment, (state) => ({
    ...state,
    counter: state.counter + 1,
  })),
  on(AppActions.decrement, (state) => ({
    ...state,
    counter: state.counter - 1,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return appReducer(state, action);
}
