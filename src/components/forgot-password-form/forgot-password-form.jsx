import React from 'react';
import {connect} from 'react-redux';
import {Link, browserHistory} from 'react-router';
import {Field, reduxForm} from 'redux-form';
import PropTypes from 'prop-types';
import translate from 'counterpart';
import renderFields from '../redux-FormFields/renderCommonField';
import {bindActionCreators} from 'redux';
import {forgotPassword} from '../../actions/user.actions';

class ForgotPasswordComponent extends React.Component {
  static propTypes = {
    initialize: PropTypes.func,
    handleSubmit: PropTypes.func,
    valid: PropTypes.bool,
    forgotPassword: PropTypes.func
  };

  static validate(values) {
    const errors = {};
    const locale = translate('layout');
    if (locale.forgetpassword) {
      if (!values.email) {
        errors.email = locale.signin.requiredValidateEmail;
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = locale.signin.emailValidation;
      }
    }
    return errors;
  }

  locale = translate('layout');

  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(data) {
    this.props.forgotPassword(data).then(() => {
      browserHistory.push('/login');
    }).catch(() => {
      browserHistory.push('/account-activation');
    });
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.submitHandler)} role='form'>
        <div className='form-group'>
          <Field
            name='email'
            component={renderFields.renderTextbox}
            placeholder={this.locale.forgetpassword.placeholder}
          />
        </div>
        <div className='next_previous clearfix continue'>
          <button type='submit'
            className='btn btn-primary next_btn '>{this.locale.forgetpassword.button}</button>
        </div>
        <div className='signup_link'>
          <span>{this.locale.forgetpassword.back} <Link to='/Login'>Login</Link></span>
        </div>
      </form>
    );
  }
}

const $ForgotPasswordForm = reduxForm({
  form: 'ForgotPasswordForm',
  validate: ForgotPasswordComponent.validate
})(ForgotPasswordComponent);

export const ForgotPasswordForm = connect(({data}) => {
  return {data};
}, (dispatch) => {
  return {
    forgotPassword: bindActionCreators(forgotPassword, dispatch)
  };
})($ForgotPasswordForm);
