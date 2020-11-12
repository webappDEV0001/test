import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  FETCH_COUNTER = '[Counter] Fetch Counter',
  FETCH_COUNTER_SUCCESS = '[Counter] Fetch Counter Success',
  FETCH_COUNTER_FAILURE = '[Counter] Fetch Counter Failure',
  UPDATE_COUNTER = '[Counter] UPDATE Counter',
  UPDATE_COUNTER_SUCCESS = '[Counter] UPDATE Counter Success',
  UPDATE_COUNTER_FAILURE = '[Counter] UPDATE Counter Failure',
}

export class FetchCounter implements Action {
  readonly type = CounterActionTypes.FETCH_COUNTER;

  constructor() {}
}

export class FetchCounterSuccess implements Action {
  readonly type = CounterActionTypes.FETCH_COUNTER_SUCCESS;

  constructor(public payload: any) {}
}

export class FetchCounterFailure implements Action {
  readonly type = CounterActionTypes.FETCH_COUNTER_FAILURE;

  constructor(public payload: any) {}
}

export class UpdateCounter implements Action {
  readonly type = CounterActionTypes.UPDATE_COUNTER;

  constructor(public payload: any) {}
}

export class UpdateCounterSuccess implements Action {
  readonly type = CounterActionTypes.UPDATE_COUNTER_SUCCESS;

  constructor(public payload: any) {}
}

export class UpdateCounterFailure implements Action {
  readonly type = CounterActionTypes.UPDATE_COUNTER_FAILURE;

  constructor(public payload: any) {}
}


export type CounterActionAll =
  | FetchCounter
  | FetchCounterSuccess
  | FetchCounterFailure
  | UpdateCounter
  | UpdateCounterSuccess
  | UpdateCounterFailure;
