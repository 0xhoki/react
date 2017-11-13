export const LANGUAGE_SET = 'LANGUAGE_SET';

export const INIT_STATE = {
  current: localStorage.getItem('$app.language') || 'en'
};

export default function (state = INIT_STATE, action) {
  const $state = {...state};
  switch (action.type) {
    case LANGUAGE_SET:
      localStorage.setItem('$app.language', action.payload.language);
      $state.current = action.payload.language;
      return $state;
    default:
      return $state;
  }
}
