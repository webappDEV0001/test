import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import {
  FetchCounter,
  UpdateCounter
} from './store/actions';

import { AppState, CounterState } from './store/datatypes';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Magoosh Test'

  number: number = 0;
  errorMsg: string = '';
  inProgress: boolean = false;
  newValue: number = 2;

  constructor(
    private store: Store<AppState>,
  ) {
    this.store.dispatch(new FetchCounter());
  }

  ngOnInit() {
    this.store
      .select((state: AppState) => state.counter)
      .pipe(untilDestroyed(this))
      .subscribe((counterState: CounterState) => {
        this.number = counterState.number;
        this.errorMsg = counterState.errorMsg;
        this.inProgress = counterState.inProgress;
      });
  }

  decrease() {
    this.store.dispatch(new UpdateCounter({}));
  }

  updateValue() {
    this.store.dispatch(new UpdateCounter({ number: this.newValue }));
  }

  ngOnDestroy(): void {}
}
