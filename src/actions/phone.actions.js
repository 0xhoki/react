import {API_HOST, API_LOADING, API_REQUEST, API_REQUEST_FAIL, API_REQUEST_SAVE} from '../commons/const';

export function verifyPhone(phone) {
  return dispatch => dispatch({
    endpoint: `${API_HOST}/api/Phones`,
    method: 'POST',
    body: {
      phone: phone.replace(/ /g, '')
    },
    type: API_REQUEST,
    types: [[API_LOADING], API_REQUEST_SAVE, API_REQUEST_FAIL]
  });
}

export function sendSmsPhoneCode(phone) {
  return dispatch => dispatch({
    endpoint: `${API_HOST}/api/Phones/send-verify-code`,
    method: 'POST',
    body: {
      phone: phone.replace(/ /g, '')
    },
    type: API_REQUEST,
    types: [[API_LOADING], API_REQUEST_SAVE, API_REQUEST_FAIL]
  });
}

export function verifyPhoneCode(phone, code) {
  return dispatch => dispatch({
    endpoint: `${API_HOST}/api/Phones/verify-code`,
    method: 'POST',
    body: {
      phone: phone.replace(/ /g, ''),
      code: parseInt(code, 0)
    },
    type: API_REQUEST,
    types: [[API_LOADING], API_REQUEST_SAVE, API_REQUEST_FAIL]
  });
}
