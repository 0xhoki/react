import {API_HOST, API_LOADING, API_REQUEST, API_REQUEST_FAIL} from '../commons/const';
import {BORROWER_SET_CURRENT_REQUEST} from '../reducers/borrower.reducer';
import {clearPayload} from '../helpers';

export function getLastActiveRequest() {
  return dispatch => {
    return dispatch({
      endpoint: `${API_HOST}/api/request/last-active`,
      method: 'GET',
      type: API_REQUEST,
      types: [[API_LOADING], BORROWER_SET_CURRENT_REQUEST, API_REQUEST_FAIL]
    });
  };
}

export function saveLastActiveRequest(body) {
  return dispatch => {
    return dispatch({
      endpoint: `${API_HOST}/api/request/last-active`,
      method: 'POST',
      body: clearPayload(body),
      type: API_REQUEST,
      types: [[API_LOADING], BORROWER_SET_CURRENT_REQUEST, API_REQUEST_FAIL]
    });
  };
}
