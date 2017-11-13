import {API_REQUEST, API_REQUEST_FAIL} from '../commons/const';
import fetch from 'isomorphic-fetch';
import translate from 'counterpart';
import {toastr} from 'react-redux-toastr';
import {showLoading, hideLoading} from 'react-redux-loading-bar';
import {browserHistory} from 'react-router';

const locale = translate('layout');

export function api(store) {
  return (next) => async (action) => {
    if (action.type !== API_REQUEST) {
      return next(action);
    }
    const {dispatch} = store;

    const {method, body, headers} = Object.assign({
      body: {},
      headers: {
        'Content-type': 'application/json'
      },
      method: 'GET'
    }, action);

    action.types[0].forEach((type) => {
      dispatch({type});
    });

    dispatch(showLoading());
    try {
      const params = {
        headers,
        method: method.toUpperCase()
      };

      const state = store.getState();

      if (state.user.token.accessToken &&
        state.user.token.accessTokenExpire > Math.ceil((new Date()).getTime() / 1000)) {
        headers.authorization = state.user.token.accessToken;
      }

      // todo: if method GET

      if (params.method === 'POST' || params.method === 'PUT') {
        params.body = JSON.stringify(body);
      }

      const result = await fetch(action.endpoint, params);

      const data = await result.json();

      if (result.status < 300) {
        return next({
          type: action.types[1],
          payload: data.data,
          meta: {message: data.message, status: result.status}
        });
      }

      if (data.status === 'UNAUTHORIZED') {
        // TODO rewrite after rewrite api, request to get refresh token
        browserHistory.push('/login');
        throw new Error('Token expired');
      }

      return Promise.reject(next({
        type: action.types[2],
        payload: data.data,
        meta: {message: data.message, status: data.status}
      }));
    } catch (e) {
      console.log(e);
      toastr.error(locale.serverError);
      return Promise.reject(next({type: API_REQUEST_FAIL, payload: {message: locale.serverError}}));
    } finally {
      dispatch(hideLoading());
    }
  };
}
