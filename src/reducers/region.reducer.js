export const PROVINCES_LOADED = 'PROVINCES_LOADED';
export const CITIES_LOADED = 'CITIES_LOADED';
export const DISTRICTS_LOADED = 'DISTRICTS_LOADED';
export const SUBDIVISIONS_LOADED = 'SUBDIVISIONS_LOADED';
export const ASSIGN_REGION = 'ASSIGN_REGION';

export const INIT_STATE = {
  provinces: [],
  cities: [],
  districts: [],
  subDivisions: []
};

export default function (state = INIT_STATE, {type, payload}) {
  const $state = {...state};
  switch (type) {
    case PROVINCES_LOADED: {
      $state.provinces = payload.items;
      return $state;
    }
    case CITIES_LOADED: {
      $state.cities = payload.items;
      return $state;
    }
    case DISTRICTS_LOADED: {
      $state.districts = payload.items;
      return $state;
    }
    case SUBDIVISIONS_LOADED: {
      $state.subDivisions = payload.items;
      return $state;
    }
    case ASSIGN_REGION: {
      return {...$state, ...payload};
    }
    default:
      return $state;
  }
}
