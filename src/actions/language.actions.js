import {LANGUAGE_SET, INIT_STATE} from '../reducers/language.reducer';
import counterpart from 'counterpart';

counterpart.setLocale(INIT_STATE.current);

export function setLanguage(language) {
  return (dispatch) => {
    counterpart.setLocale(language);
    return dispatch({
      type: LANGUAGE_SET,
      payload: {
        language
      }
    });
  };
}
