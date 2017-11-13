import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import translate from 'counterpart';
import BlockUi from 'react-block-ui';
import {bindActionCreators} from 'redux';
import {toastr} from 'react-redux-toastr';
import InputElement from 'react-input-mask';
import {saveLastActiveRequest} from '../../actions/borrower.actions';
import {sendSmsPhoneCode, verifyPhoneCode} from '../../actions/phone.actions';

class PinCodeFormComponent extends React.Component {
  static propTypes = {
    sendSmsPhoneCode: PropTypes.func,
    handleSubmit: PropTypes.func,
    saveLastActiveRequest: PropTypes.func,
    verifyPhoneCode: PropTypes.func,
    onSuccess: PropTypes.func,
    initialize: PropTypes.func,
    user: PropTypes.object,
    borrower: PropTypes.object,
    profile: PropTypes.object,
    valid: PropTypes.bool
  };

  static validate(values) {
    const locale = translate('wizards').wizard5;
    const errors = {};
    if (!values.pin) {
      errors.pin = locale.requiredValidate;
    } else if (values.pin.length < 6) {
      errors.pin = locale.lengthValidate;
    }
    return errors;
  }

  locale = translate('wizards').wizard5;

  state = {
    blocking: false
  };

  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetPin = this.resetPin.bind(this);
  }

  componentWillReceiveProps() {
    this.locale = translate('wizards').wizard5;
  }

  resetPin() {
    this.setState({blocking: true});
    this.props.sendSmsPhoneCode(this.props.borrower.current.phone.phone)
      .then(() => this.setState({blocking: false}));
  }

  handleSubmit() {
    this.setState({blocking: true});
  }

  submitHandler(values) {
    this.setState({blocking: true});
    this.props.verifyPhoneCode(this.props.borrower.current.phone.phone, values.pin)
      .then(() => {
        this.props.onSuccess();
      })
      .catch(() => toastr.error(this.locale.incorrectPin))
      .then(() => this.setState({blocking: false}));
  }

  renderPinField(field) {
    const {meta: {touched, error}} = field;
    const className = `form-group nombs wizard5_input ${touched && error ? 'has-danger' : ''} `;
    return (
      <div className={className}>
        <InputElement
          {...field.input}
          mask='999999'
          className='form-control'
          maskChar={null}
        />
        <div className='clearfix six'/>
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
      <form onSubmit={this.props.handleSubmit(this.submitHandler)}>
        <BlockUi tag='div' blocking={isNaN(profile.id) || isNaN(borrower.rp) || this.state.blocking}>
          <div className='process  active_field'>
            <div className='active_lable'>
              <h3>{this.locale.label}</h3>
            </div>
            <div className='fields clearfix'>
              <Field name='pin' component={this.renderPinField}/>
              <div className='wrapperr'>
                <span className='notes resend'>
                  <a
                    href='javascript:void(0)'
                    onClick={this.resetPin}>{this.locale.resend_pin}</a>
                </span>
              </div>
            </div>
          </div>
          <div className='next_previous clearfix'>
            <button
              type='submit'
              className='btn btn-primary pull-right next_btn'>{this.locale.next}</button>
          </div>
        </BlockUi>
      </form>);
  }
}

const $PinCodeForm = reduxForm({
  form: 'pin-code-form',
  validate: PinCodeFormComponent.validate
})(PinCodeFormComponent);

export const PinCodeForm = connect(({language, user, borrower, profile}) => {
  return {language, user, borrower, profile};
}, (dispatch) => {
  return {
    saveLastActiveRequest: bindActionCreators(saveLastActiveRequest, dispatch),
    verifyPhoneCode: bindActionCreators(verifyPhoneCode, dispatch),
    sendSmsPhoneCode: bindActionCreators(sendSmsPhoneCode, dispatch)
  };
})($PinCodeForm);
