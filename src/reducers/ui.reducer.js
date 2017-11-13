export const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION';

export const INIT_STATE = {
  nav: {
    isOpen: false
  }
};

export default function (state = INIT_STATE, {type}) {
  switch (type) {
    case TOGGLE_NAVIGATION: {
      const nav = {
        isOpen: !state.nav.isOpen
      };
      return {...state, nav};
    }
    default:
      return {...state};
  }
}
