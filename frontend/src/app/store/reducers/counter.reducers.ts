import { CounterActionAll, CounterActionTypes } from '../actions';
import { CounterState } from '../datatypes';

export const initialState: CounterState = {
  number: 0,
  inProgress: false,
  errorMsg: ''
};

export function reducer(state = initialState, action: CounterActionAll): CounterState {
  switch (action.type) {
    case CounterActionTypes.FETCH_COUNTER: {
      return {
        ...state,
        inProgress: true,
        errorMsg: ''
      };
    }

    case CounterActionTypes.FETCH_COUNTER_SUCCESS: {
      return {
        ...state,
        number: action.payload.number,
        inProgress: false,
        errorMsg: ''
      };
    }

    case CounterActionTypes.FETCH_COUNTER_FAILURE: {
      return {
        ...state,
        errorMsg: action.payload || 'Action failed',
        inProgress: false,
      };
    }

    case CounterActionTypes.UPDATE_COUNTER: {
      return {
        ...state,
        inProgress: true,
        errorMsg: ''
      };
    }

    case CounterActionTypes.UPDATE_COUNTER_SUCCESS: {
      return {
        ...state,
        number: action.payload.number,
        inProgress: false,
        errorMsg: ''
      };
    }

    case CounterActionTypes.UPDATE_COUNTER_FAILURE: {
      return {
        ...state,
        errorMsg: action.payload.message || 'Action failed',
        inProgress: false,
      };
    }

    default: {
      return state;
    }
  }
}
