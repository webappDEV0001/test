import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import { CounterService } from '../services';
import {
  FetchCounter,
  FetchCounterFailure,
  FetchCounterSuccess,
  UpdateCounter,
  UpdateCounterFailure,
  UpdateCounterSuccess,
  CounterActionTypes
} from '../actions';


@Injectable()
export class CounterEffects {
  constructor(
    private actions: Actions,
    private counterService: CounterService,
  ) {}

  @Effect()
  FetchCounter: Observable<any> = this.actions.pipe(
    ofType(CounterActionTypes.FETCH_COUNTER),
    map((action: FetchCounter) => action),
    switchMap(() => {
      return this.counterService.fetchCounter().pipe(
        map(response => new FetchCounterSuccess(response)),
        catchError((errorResponse: any) => of(new FetchCounterFailure(errorResponse.error))),
      );
    }),
  );

  @Effect()
  UpdateCounter: Observable<any> = this.actions.pipe(
    ofType(CounterActionTypes.UPDATE_COUNTER),
    map((action: UpdateCounter) => action.payload),
    switchMap((payload) => {
      return this.counterService.updateCounter(payload).pipe(
        map(response => new UpdateCounterSuccess(response)),
        catchError((errorResponse: any) => of(new UpdateCounterFailure(errorResponse.error))),
      );
    }),
  );
}