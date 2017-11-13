export const PROFILE_LOADED = 'PROFILE_LOADED';
export const PROFILE_UPDATE = 'PROFILE_UPDATE';
export const FULLREGION_LOADED = 'FULLREGION_LOADED';
export const ASSIGN_PROFILE_REGION = 'ASSIGN_PROFILE_REGION';

export const INIT_STATE = {
  current: {
    address: {
      province: {},
      city: {},
      district: {},
      subDistrict: {},
      street: null
    },
    education: {},
    contact: {}
  },
  progress: {
    total: 13,
    count: 0
  },
  list: []
};

export default function (state = INIT_STATE, {type, payload}) {
  const $state = {...state};
  switch (type) {
    case PROFILE_LOADED: {
      if (!payload.address || Object.keys(payload.address).length === 0) {
        payload.address = {...INIT_STATE.current.address};
      }
      if (!payload.education) {
        payload.education = {};
      }
      if (!payload.contact) {
        payload.contact = {};
      }
      if (!payload.bpjs) {
        payload.bpjs = {};
      }
      $state.current = payload;

      return $state;
    }
    case PROFILE_UPDATE: {
      return {...state, ...payload};
    }
    case FULLREGION_LOADED: {
      $state.current = {...$state.current};
      $state.current.address = payload;
      return $state;
    }
    case ASSIGN_PROFILE_REGION: {
      $state.current = {...$state.current};
      $state.current.address = {...$state.current.address, ...payload};
      return $state;
    }
    default:
      return $state;
  }
}
