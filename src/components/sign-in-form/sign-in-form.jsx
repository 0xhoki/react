import React from 'react';
import {Link} from 'react-router';
import {Field, reduxForm} from 'redux-form';
import PropTypes from 'prop-types';
import translate from 'counterpart';
import renderFields from '../redux-FormFields/renderCommonField';

class SignInComponent extends React.Component {
  static propTypes = {
    initialize: PropTypes.func,
    handleSubmit: PropTypes.func
  };

  static validate(values) {
    const errors = {};
    const locale = translate('layout');
    if (locale.signin) {
      if (!values.email) {
        errors.email = locale.signin.requiredValidateEmail;
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = locale.signin.emailValidation;
      }
      if (!values.password) {
        errors.password = locale.signin.requiredValidatePassword;
      }
    }
    return errors;
  }

  locale = translate('layout');

  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler() {

  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.submitHandler)}>
        <div className='form-group'>
          <Field
            name='email'
            component={renderFields.renderTextbox}
            placeholder={this.locale.signin.placeholder1}
          />
        </div>
        <div className='form-group'>
          <Field
            name='password'
            type='password'
            component={renderFields.renderTextbox}
            placeholder={this.locale.signin.placeholder2}
          />
        </div>
        <div className='clearfix forgot_remember'>
          <div className='pull-right'><Link
            to='/forgot-password'>{this.locale.signin.forgetpassword}</Link>
          </div>
          <div className='checkbox pull-left'>
            <label><input type='checkbox' defaultChecked={true}/> {this.locale.signin.remember}
            </label>
          </div>
        </div>
        <div className='next_previous clearfix continue'>
          <button type='submit'
            className='btn btn-primary next_btn '>{this.locale.signin.login1}</button>
        </div>
        <div className='terms'>
          <div>
            {this.locale.signin.acceptance}<br/><Link
              to='/terms'>{this.locale.signin.terms}</Link>{this.locale.signin.acceptance1}<Link
              to='/privacy'>{this.locale.signin.privacy}</Link>{this.locale.signin.acceptance2}
          </div>
        </div>
      </form>
    );
  }
}

export const SignInForm = reduxForm({
  form: 'LoginForm',
  validate: SignInComponent.validate
})(SignInComponent);
