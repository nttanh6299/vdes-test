import {
  createStore,
  applyMiddleware,
  combineReducers,
  AnyAction,
  Reducer
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createWrapper, MakeStore, HYDRATE } from 'next-redux-wrapper';

import { counterReducer, CounterState } from './counter/CounterReducer';

export interface AppState {
  counter: CounterState;
}

const combinedReducers = combineReducers({ counter: counterReducer });

const reducer: Reducer<AppState, AnyAction> = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload
    };
    return nextState;
  }

  return combinedReducers(state, action);
};

const initStore: MakeStore<AppState> = () => {
  return createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
};

export const storeWrapper = createWrapper(initStore);
