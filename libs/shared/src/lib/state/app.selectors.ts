import { createFeatureSelector, createSelector } from '@ngrx/store';
import { APP_FEATURE_KEY, State, appAdapter } from './app.reducer';

// Lookup the 'App' feature state managed by NgRx
export const getAppState = createFeatureSelector<State>(APP_FEATURE_KEY);

const { selectAll, selectEntities } = appAdapter.getSelectors();

export const getAppLoaded = createSelector(
  getAppState,
  (state: State) => state.loaded
);

export const getAppError = createSelector(
  getAppState,
  (state: State) => state.error
);

export const getAllApp = createSelector(getAppState, (state: State) =>
  selectAll(state)
);

export const getAppEntities = createSelector(getAppState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getAppState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getAppEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);

export const getAppCounter = createSelector(
  getAppState,
  (state: State) => state.counter
);
