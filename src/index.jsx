import 'babel-polyfill';
import React from 'react';
// import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {routes} from './routes';
import configureStore from './store/configureStore';
// require('./images/danablue.gif');
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes(store)}/>
  </Provider>,
  document.getElementById('app')
);

