import {browserHistory} from "react-router";
import {API_HOST, API_LOADING, API_REQUEST} from '../commons/const';
import {
  USER_LOGOUT,
  RESTORE_PASSWORD,
  RESTORE_PASSWORD_FAIL
} from '../reducers/user.reducer';

export function forgotPassword(body) {
  return (dispatch) => {
    return dispatch({
      body,
      endpoint: `${API_HOST}/api/v1/user/forgotPassword`,
      method: 'post',
      type: API_REQUEST,
      types: [[API_LOADING], RESTORE_PASSWORD, RESTORE_PASSWORD_FAIL]
    });
  };
}

export function logout() {
  return dispatch => dispatch({type: USER_LOGOUT});
}

export function logoutWithRedirect() {
  return dispatch => {
    logout(dispatch);
    browserHistory.push('/');
  };
}
