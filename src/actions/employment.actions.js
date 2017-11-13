import {touch, formValueSelector} from 'redux-form';
import {
  API_HOST,
  API_LOADING,
  API_REQUEST,
  API_REQUEST_FAIL
} from '../commons/const';
import {EMPLOYMENT_LOADED} from '../reducers/employment.reducer';

export function submitEmploymentDetails() {
  const noSyncError = (form) => Object.keys(form.syncErrors || {}).length === 0;

  return (dispatch, getState) => {
    const {companyBasicDetailsForm, companyAddressDetailsForm, companyOtherDetailsForm} = getState().form;
    dispatch(touch('companyBasicDetailsForm'));
    dispatch(touch('companyAddressDetailsForm'));
    dispatch(touch('companyOtherDetailsForm'));

    if (noSyncError(companyAddressDetailsForm) &&
      noSyncError(companyBasicDetailsForm) &&
      noSyncError(companyOtherDetailsForm)) {
      const state = getState();
      const {user} = getState();

      const basic = formValueSelector('companyBasicDetailsForm')(state,
        'occupation',
        'companyName',
        'companySector',
        'companyPhone'
      );

      const address = formValueSelector('companyAddressDetailsForm')(state,
        'country',
        'province',
        'regency',
        'district',
        'zip',
        'companyAddress'
      );

      const other = formValueSelector('companyOtherDetailsForm')(state,
        'monthlyBaseIncome',
        'monthlyOtherIncome',
        'managerName',
        'employeeSince',
        'jobTitle'
      );

      const body = {
        ...basic,
        ...address,
        ...other
      };

      return dispatch({
        endpoint: `${API_HOST}/api/users/${user.id}/employment`,
        method: 'put',
        body,
        type: API_REQUEST,
        types: [[API_LOADING], EMPLOYMENT_LOADED, API_REQUEST_FAIL]
      });
    }
  };
}

export function initializeProfilePage() {

}
