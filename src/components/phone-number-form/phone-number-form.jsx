import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import translate from 'counterpart';
import BlockUi from 'react-block-ui';
import {bindActionCreators} from 'redux';
import InputElement from 'react-input-mask';
import {saveLastActiveRequest} from '../../actions/borrower.actions';
import {verifyPhone} from '../../actions/phone.actions';
import {browserHistory} from 'react-router';

class PhoneNumberFromComponent extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    saveLastActiveRequest: PropTypes.func,
    getPhone: PropTypes.func,
    verifyPhone: PropTypes.func,
    initialize: PropTypes.func,
    user: PropTypes.object,
    borrower: PropTypes.object,
    profile: PropTypes.object,
    valid: PropTypes.bool
  };

  static validate(values) {
    const locale = translate('wizards').wizard4;
    const errors = {};
    if (!values.phone) {
      errors.phone = locale.requiredValidate;
    } else if (values.phone.replace(/ /g, '').length < 12) {
      errors.phone = locale.lengthValidate;
    }
    return errors;
  }

  locale = translate('wizards').wizard4;

  state = {
    blocking: true
  };

  componentWillReceiveProps() {
    this.locale = translate('wizards').wizard4;
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.verifyPhone(values.phone)
      .then(({payload}) => this.props.saveLastActiveRequest({phoneId: payload.id}))
      .then(({payload}) => {
        if (payload.phone.verify) {
          browserHistory.push('/wizard/step-6');
        } else {
          browserHistory.push('/wizard/step-5');
        }
      });
  }

  renderPhoneField(field) {
    const {meta: {touched, error}} = field;
    const className = `form-group nombs wizard4_input ${touched && error ? 'has-danger' : ''} `;
    return (
      <div className={className}>
        <InputElement
          {...field.input}
          mask={'+62 999 99999999'}
          alwaysShowMask={true}
          className='form-control'
          maskChar={null}/>
        <div className='clearfix eleven'/>
        <div className='help-block help-block-error'>
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  render() {
    const profile = this.props.profile.current;
    const borrower = this.props.borrower.current;
    return (
      <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
        <BlockUi tag='div' blocking={isNaN(profile.id) || isNaN(borrower.rp)}>
          <div className='process  active_field'>
            <div className='active_lable'><h3>{this.locale.label}</h3></div>
            <div className='fields clearfix'>
              <Field
                name='phone'
                component={this.renderPhoneField}
              />
            </div>
          </div>
          <div className='next_previous clearfix'>
            <button
              disabled={!this.props.valid}
              type='submit'
              className='btn btn-primary pull-right next_btn'>
              {this.locale.next}
            </button>
          </div>
        </BlockUi>
      </form>);
  }
}

const $PhoneNumberFrom = reduxForm({
  form: 'phone-number-form',
  enableReinitialize: true,
  validate: PhoneNumberFromComponent.validate
})(PhoneNumberFromComponent);

export const PhoneNumberFrom = connect(({language, user, borrower, profile}) => {
  const phone = borrower.current.phone ? borrower.current.phone.phone : '';
  return {language, user, borrower, profile, initialValues: {phone}};
}, (dispatch) => {
  return {
    saveLastActiveRequest: bindActionCreators(saveLastActiveRequest, dispatch),
    verifyPhone: bindActionCreators(verifyPhone, dispatch)
  };
})($PhoneNumberFrom);
