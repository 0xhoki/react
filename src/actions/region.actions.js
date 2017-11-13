import {API_HOST, API_LOADING, API_REQUEST, API_REQUEST_FAIL} from '../commons/const';
import {
  PROVINCES_LOADED,
  CITIES_LOADED,
  DISTRICTS_LOADED,
  SUBDIVISIONS_LOADED,
  ASSIGN_REGION
} from '../reducers/region.reducer';

import {
  FULLREGION_LOADED
} from '../reducers/profile.reducer';

export function getFullRegionByPostcode(postcode) {
  return dispatch => {
    return dispatch({
      endpoint: `${API_HOST}/api/region/full?postcode=${postcode}`,
      method: 'get',
      type: API_REQUEST,
      types: [[API_LOADING], FULLREGION_LOADED, API_REQUEST_FAIL]
    });
  };
}

export function getAllProvinces() {
  return dispatch => {
    return dispatch({
      endpoint: `${API_HOST}/api/region?filter[where][tier]=1`,
      method: 'get',
      type: API_REQUEST,
      types: [[API_LOADING], PROVINCES_LOADED, API_REQUEST_FAIL]
    });
  };
}

export function getAllCities(provinceId) {
  return dispatch => {
    return dispatch({
      endpoint: `${API_HOST}/api/region?filter[where][tier]=${2}&filter[where][parent]=${provinceId}`,
      method: 'get',
      type: API_REQUEST,
      types: [[API_LOADING], CITIES_LOADED, API_REQUEST_FAIL]
    });
  };
}

export function getAllDistricts(cityId) {
  return dispatch => {
    return dispatch({
      endpoint: `${API_HOST}/api/region?filter[where][tier]=${3}&filter[where][parent]=${cityId}`,
      method: 'get',
      type: API_REQUEST,
      types: [[API_LOADING], DISTRICTS_LOADED, API_REQUEST_FAIL]
    });
  };
}

export function getAllSubDivisions(districtId) {
  return dispatch => {
    return dispatch({
      endpoint: `${API_HOST}/api/region?filter[where][tier]=${4}&filter[where][parent]=${districtId}`,
      method: 'get',
      type: API_REQUEST,
      types: [[API_LOADING], SUBDIVISIONS_LOADED, API_REQUEST_FAIL]
    });
  };
}

export function assignRegion(payload) {
  return {
    type: ASSIGN_REGION,
    payload
  };
}
