import { CounterAction, CounterActionTypes } from './CounterActions';

export interface CounterState {
  readonly count: number;
}

const initialState = {
  count: 0
};

export const counterReducer = (
  state: CounterState = initialState,
  action: CounterAction
) => {
  const { count } = state;

  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return {
        ...state,
        count: count + 1
      };
    case CounterActionTypes.DECREMENT:
      return {
        ...state,
        count: count - 1
      };
    case CounterActionTypes.RESET:
      return initialState;
    default:
      return initialState;
  }
};
