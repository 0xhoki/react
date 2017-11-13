import React from 'react';
import PropTypes from 'prop-types';
import translate from 'counterpart';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import LoanDocUpload from '../loan-doc-upload/loan-doc-upload.jsx';
import {isMobile} from '../../helpers';
import classNames from 'classnames';

const getLoanUploadConfig = (locale) => ([
  {name: 'copyKTP', exist: false, label: locale.copyKTP},
  {name: 'familyCard', exist: false, label: locale.familyCard},
  {name: 'addressProofLetter', exist: false, label: locale.addressProofLetter},
  {name: 'employmentProofLetter', exist: false, label: locale.employmentProofLetter},
  {name: 'salarySlip', exist: false, label: locale.SalarySlip},
  {name: 'bankRecords', exist: false, label: locale.bankRecords}
]);

class LoanAppDocFormComponent extends React.Component {
  static validate = () => {
    const errors = {};

    return errors;
  };

  static propTypes = {
    handleSubmit: PropTypes.func
  };

  isMobile = isMobile();
  locale = translate('layout').loanApp;

  render() {
    const {locale} = this;
    const {handleSubmit} = this.props;
    const loanDocUploadClass = classNames('loan-doc-upload', {'loan-doc-upload--mobile': this.isMobile});

    return (
      <form className={loanDocUploadClass} onSubmit={handleSubmit}>
        <div className='loan-doc-upload__container'>
          {
            getLoanUploadConfig(locale).map((config, key) =>
              <Field
                key={key}
                exist={config.exist}
                name={config.name}
                label={config.label}
                component={LoanDocUpload}
              />
            )
          }
        </div>
      </form>
    );
  }
}

const $LoanAppDocForm = reduxForm({
  form: 'loanDocAppForm',
  fields: ['copyKTP', 'familyCard', 'addressProofLetter', 'employmentProofLetter', 'salarySlip', 'bankRecords'],
  validate: LoanAppDocFormComponent.validate
})(LoanAppDocFormComponent);

export const LoanAppDocForm = connect(({}) => {
}, () => {
  return {
  };
})($LoanAppDocForm);
