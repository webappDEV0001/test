
export interface CounterState {
  number: number;
  inProgress: boolean;
  errorMsg: string;
}

export interface AppState {
  counter: CounterState;
}