import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import languageReducer from './language.reducer';
import userReducer from './user.reducer';
import borrowerReducer from './borrower.reducer';
import profileReducer from './profile.reducer';
import employmentReducer from './employment.reducer';
import uiReducer from './ui.reducer';
import regionReducer from './region.reducer';
import {reducer as toastrReducer} from 'react-redux-toastr';
import {loadingBarReducer} from 'react-redux-loading-bar';

const rootReducer = combineReducers({
  language: languageReducer,
  form: formReducer,
  toastr: toastrReducer,
  user: userReducer,
  loadingBar: loadingBarReducer,
  profile: profileReducer,
  borrower: borrowerReducer,
  employment: employmentReducer,
  ui: uiReducer,
  region: regionReducer
});

export default rootReducer;
