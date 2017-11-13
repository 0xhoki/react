/* eslint-disable no-process-env */
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import {api} from '../middlewares/api';

export default function configureStore(initialState) {
  let composeEnhancers = compose;
  if (global.IS_BROWSER && process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }

  const middlewares = [
    api,
    thunk,
    reduxImmutableStateInvariant()
  ];
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
}
