export const BORROWER_SET_CURRENT_REQUEST = 'BORROWER_SET_CURRENT_REQUEST';

export const INIT_STATE = {
  current: {}
};

export default function (state = INIT_STATE, action) {
  const $state = {...state};
  switch (action.type) {
    case BORROWER_SET_CURRENT_REQUEST:
      $state.current = action.payload;
      return $state;
    default:
      return $state;
  }
}

