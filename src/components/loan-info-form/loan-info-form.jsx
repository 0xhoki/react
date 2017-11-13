import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import translate from 'counterpart';
import renderFields from '../redux-FormFields/renderCommonField';
import renderSelectFields from '../redux-FormFields/renderSelectField';
import {Field, reduxForm} from 'redux-form';
import {bindActionCreators} from 'redux';
import {Link, browserHistory} from 'react-router';
import {saveLastActiveRequest} from '../../actions/borrower.actions';

const getPurposeOptions = (loaninfo) => ([
  {value: '1', label: loaninfo.education_fees},
  {value: '2', label: loaninfo.wedding_expenses},
  {value: '3', label: loaninfo.medical_expenses},
  {value: '4', label: loaninfo.item_purchases},
  {value: '5', label: loaninfo.holiday_expenses},
  {value: '6', label: loaninfo.home_renovation},
  {value: '7', label: loaninfo.repaying_other_loans},
  {value: '8', label: loaninfo.other}
]);

class LoanInfoFormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
    this.onPurposeChange = this.onPurposeChange.bind(this);
  }

  static validate(values) {
    const locale = translate('wizards').loaninfo;
    const errors = {};
    if (!values.reasonLoan) {
      errors.reasonLoan = locale.validatereasonrequired;
    }
    return errors;
  }

  static propTypes = {
    handleSubmit: PropTypes.func,
    saveLastActiveRequest: PropTypes.func
  };

  locale = translate('wizards').loaninfo;

  submitHandler(values) {
    const payload = {
      reason: values.reason,
      purpose: values.purpose
    };
    this.props.saveLastActiveRequest(payload).then(() => {
      browserHistory.push('/wizard/submit');
    });
  }

  onPurposeChange() {

  }

  render() {
    const {locale, submitHandler, onPurposeChange} = this;
    const {handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className='row'>
          <div className='col-sm-6 col-xs-12'>
            <div className='form-group'>
              <label className='label-control'>
                {locale.purpose}
              </label>
              <Field
                name='purpose'
                component={renderSelectFields.selectBox}
                onChange={onPurposeChange}
                options={getPurposeOptions(locale)}
              />
            </div>
          </div>
          <div className='col-sm-12 col-xs-12'>
            <div className='form-group'>
              <label className='label-control'>
                {locale.need_loan}
              </label>
              <Field
                name='reason'
                component={renderFields.renderTextArea}
                placeholder={locale.placeholder1}
              />
            </div>
          </div>
          <div className='col-sm-12 col-xs-12'>
            <div className='continue next_previous clearfix'>
              <Link to='/wizard/step-7/contact'>
                <button
                  type='button'
                  className='btn btn-primary pull-left prev_btn'>
                  {locale.previous}
                </button>
              </Link>
              <button
                type='submit'
                className='btn btn-primary pull-right next_btn'>
                {locale.next}
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const $LoanInfoForm = reduxForm({
  validate: LoanInfoFormComponent.validate,
  enableReinitialize: true,
  form: 'LoanInfoForm'
})(LoanInfoFormComponent);

export const LoanInfoForm = connect(({borrower: {current}}) => ({
  initialValues: {
    reason: current.reason,
    purpose: current.purpose
  }
}), (dispatch) => {
  return {
    saveLastActiveRequest: bindActionCreators(saveLastActiveRequest, dispatch)
  };
})($LoanInfoForm);
