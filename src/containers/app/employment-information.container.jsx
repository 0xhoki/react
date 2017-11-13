import React from 'react';
import translate from 'counterpart';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ProfileProgress} from '../../components/profile-progress/profile-progress.jsx';
import {CompanyBasicDetailsForm} from '../../components/company-basic-details-form/company-basic-details-form.jsx';
// eslint-disable-next-line max-len
import {CompanyAddressDetailsForm} from '../../components/company-address-details-form/company-address-details-form.jsx';
import {CompanyOtherDetailsForm} from '../../components/company-other-details-form/company-other-details-form.jsx';
import {initializeProfilePage, submitEmploymentDetails} from '../../actions/employment.actions';

class EmploymentInformationContainerComponent extends React.Component {
  locale = translate('layout').employment;

  static propTypes = {
    submitEmploymentDetails: PropTypes.func,
    initializeProfilePage: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.saveEmployment = this.saveEmployment.bind(this);
  }

  saveEmployment() {
    const request = this.props.submitEmploymentDetails();
    if (request) {
      request.then((response) => {
        if (response) {
          toastr.success(this.locale.successUpdate);
        } else {
          toastr.error(this.locale.failUpdate);
        }
      });
    }
  }

  render() {
    const {locale} = this;

    return (
      <div>
        <div className='middle middle--800'>
          <div className='paragraph'>
            <div className='paragraph__title'>
              {locale.title}
            </div>
            <div className='paragraph__text'>
              {locale.text}
            </div>
          </div>
        </div>
        <div className='middle middle--630'>
          <div className='profile-progress-wrapper'>
            <ProfileProgress total={7} count={3}/>
          </div>
          <div className='form-caption'>
            {locale.companyBasicDetails.index}
          </div>
          <CompanyBasicDetailsForm />
          <div className='form-caption'>
            {locale.companyAddressDetails.index}
          </div>
          <CompanyAddressDetailsForm />
          <div className='form-caption'>
            {locale.companyOtherDetails.index}
          </div>
          <CompanyOtherDetailsForm />
          <div
            className='common-form__submit'
            onClick={() => this.saveEmployment()}
          >
            {locale.save}
          </div>
        </div>
      </div>
    );
  }
}

export const EmploymentInformationContainer = connect(() => ({
}), (dispatch) => ({
  initializeProfilePage: bindActionCreators(initializeProfilePage, dispatch),
  submitEmploymentDetails: bindActionCreators(submitEmploymentDetails, dispatch)
}))(EmploymentInformationContainerComponent);
