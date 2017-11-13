export const EMPLOYMENT_LOADED = 'EMPLOYMENT_LOADED';

export const INIT_STATE = {
  current: {}
};

export default function (state = INIT_STATE, {type, payload}) {
  const $state = {...state};
  switch (type) {
    case EMPLOYMENT_LOADED:
      $state.current = payload;
      return $state;
    default:
      return $state;
  }
}
