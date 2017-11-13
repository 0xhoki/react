import {API_HOST, API_LOADING, API_REQUEST} from '../commons/const';
import {USER_LOGIN, USER_LOGIN_FAIL} from '../reducers/user.reducer';

export function googleAuthResponse(response) {
  return (dispatch) => {
    return socialAuth('google', response.tokenId)(dispatch);
  };
}

export function facebookAuthResponse(response) {
  return (dispatch) => {
    return socialAuth('facebook', response.accessToken)(dispatch);
  };
}

export function socialAuth(provider, token) {
  return dispatch => {
    return dispatch({
      body: {
        provider,
        token
      },
      endpoint: `${API_HOST}/api/Users/social-auth`,
      method: 'post',
      type: API_REQUEST,
      types: [[API_LOADING], USER_LOGIN, USER_LOGIN_FAIL]
    });
  };
}
