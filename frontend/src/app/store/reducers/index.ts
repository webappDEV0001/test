import { ActionReducerMap } from '@ngrx/store';

import { AppState } from '../datatypes';
import * as counter from './counter.reducers';

export const reducers: ActionReducerMap<AppState> = {
  counter: counter.reducer
}
