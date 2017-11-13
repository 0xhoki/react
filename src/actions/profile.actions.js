import {touch, formValueSelector, initialize} from 'redux-form';
import {
  API_HOST,
  API_LOADING,
  API_REQUEST,
  API_REQUEST_FAIL,
  API_LOADED
} from '../commons/const';
import {
  PROFILE_LOADED,
  PROFILE_UPDATE,
  ASSIGN_PROFILE_REGION
} from '../reducers/profile.reducer';
import {clearPayload} from '../helpers';

export function loadProfile(userId) {
  return dispatch => {
    return dispatch({
      endpoint: `${API_HOST}/api/Users/${userId}/profile`,
      method: 'get',
      type: API_REQUEST,
      types: [[API_LOADING], PROFILE_LOADED, API_REQUEST_FAIL]
    });
  };
}

export function getProfile(userId) {
  return (dispatch, getState) => {
    const {profile} = getState();
    const data = profile.list.filter(item => item.user_id === userId);

    if (!data.length) {
      return loadProfile(userId)(dispatch).then(({payload}) => payload);
    }
    return data[0];
  };
}

export function getCurrentProfile() {
  return (dispatch, getState) => {
    const {user} = getState();
    return getProfile(user.id)(dispatch, getState);
  };
}

export function saveKtp(ktp) {
  return dispatch => {
    return dispatch({
      endpoint: `${API_HOST}/api/profile/ktp`,
      method: 'post',
      body: {
        ktp: ktp.replace(/ /g, '')
      },
      type: API_REQUEST,
      types: [[API_LOADING], PROFILE_LOADED, API_REQUEST_FAIL]
    });
  };
}

export function refreshKtpInVoterApi(ktp) {
  return dispatch => {
    return dispatch({
      endpoint: `${API_HOST}/api/profile/ktp`,
      method: 'put',
      body: {
        ktp: ktp.replace(/ /g, '')
      },
      type: API_REQUEST,
      types: [[API_LOADING], API_LOADED, API_REQUEST_FAIL]
    });
  };
}

export function saveProfile(body) {
  const payload = clearPayload(body);
  return (dispatch, getState) => {
    const {user} = getState();
    return dispatch({
      endpoint: `${API_HOST}/api/Users/${user.id}/profile`,
      method: 'put',
      body: payload,
      type: API_REQUEST,
      types: [[API_LOADING], PROFILE_LOADED, API_REQUEST_FAIL]
    });
  };
}

export function submitProfileDetails() {
  const noSyncError = (form) => Object.keys(form.syncErrors || {}).length === 0;

  return (dispatch, getState) => {
    const {personalForm, contactInformationForm, homeAddressForm, educationForm, BPJSInformationForm} = getState().form;
    dispatch(touch('personalForm'));
    dispatch(touch('contactInformationForm'));
    dispatch(touch('homeAddressForm'));
    dispatch(touch('educationForm'));
    dispatch(touch('BPJSInformationForm'));

    if (noSyncError(personalForm) &&
      noSyncError(contactInformationForm) &&
      noSyncError(homeAddressForm) &&
      noSyncError(educationForm) &&
      noSyncError(BPJSInformationForm)) {
      const state = getState();
      const {user} = getState();

      const personal = formValueSelector('personalForm')(state,
        'fullName',
        'dateOfBirth',
        'gender',
        'ktp',
        'maritalStatus'
      );

      const contactInformation = formValueSelector('contactInformationForm')(state,
        'email',
        'handPhoneNumber',
        'homePhoneNumber'
      );

      const homeAddress = formValueSelector('homeAddressForm')(state,
        'country',
        'region1',
        'region2',
        'region3',
        'region4',
        'zip',
        'street',
        'residenceOwnership',
        'residenceSince'
      );

      const education = formValueSelector('educationForm')(state,
        'university',
        'department',
        'degree'
      );

      const BPJSInformation = formValueSelector('BPJSInformationForm')(state,
        'pensionNumber',
        'healthNumber'
      );

      const body = {
        ...personal,
        address: {
          ...homeAddress
        },
        education: {
          ...education
        },
        contact: {
          ...contactInformation
        },
        bpjs: {
          ...BPJSInformation
        }
      };

      return dispatch({
        endpoint: `${API_HOST}/api/users/${user.id}/profile`,
        method: 'put',
        body,
        type: API_REQUEST,
        types: [[API_LOADING], PROFILE_LOADED, API_REQUEST_FAIL]
      }).then(() => {
        initializeProfilePage()(dispatch, getState);
      });
    }
  };
}

export function update(payload) {
  return {
    type: PROFILE_UPDATE,
    payload
  };
}

export function initializeProfilePage() {
  return (dispatch, getState) => {
    getCurrentProfile()(dispatch, getState).then(() => {
      const {
        fullName,
        dateOfBirth,
        gender,
        ktp,
        maritalStatus,
        education: {
          university,
          department,
          degree
        },
        contact: {
          email,
          handPhoneNumber,
          homePhoneNumber
        },
        address: {
          region1, // : province,
          region2, // : city,
          region3, // : district,
          region4, // : subDistrict,
          zip,
          country,
          street,
          residenceOwnership,
          residenceSince
        },
        bpjs: {
          pensionNumber,
          healthNumber
        }
      } = getState().profile.current;

      const required = [
        ktp,
        fullName,
        dateOfBirth,
        gender,
        maritalStatus,
        street,
        region1,
        region2,
        region3,
        region4,
        zip,
        university,
        department,
        degree
      ];

      const total = required.length;
      const count = required.reduce((sum, current) => current ? sum + 1 : sum, 0);

      dispatch(update({
        progress: {
          total,
          count
        }
      }));

      dispatch(initialize('personalForm', {
        fullName,
        dateOfBirth,
        gender,
        ktp,
        maritalStatus
      }));
      dispatch(initialize('contactInformationForm', {
        email,
        handPhoneNumber,
        homePhoneNumber
      }));
      dispatch(initialize('homeAddressForm', {
        country,
        region1,
        region2,
        region3,
        region4,
        zip,
        street,
        residenceOwnership,
        residenceSince
      }));
      dispatch(initialize('educationForm', {
        university,
        department,
        degree
      }));
      dispatch(initialize('BPJSInformationForm', {
        pensionNumber,
        healthNumber
      }));
    });
  };
}

export function assignProfileRegion(payload) {
  return {
    type: ASSIGN_PROFILE_REGION,
    payload
  };
}
