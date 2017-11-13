import React from 'react';
import PropTypes from 'prop-types';
import translate from 'counterpart';
import renderFields from '../redux-FormFields/renderCommonField';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {isMobile} from '../../helpers';
import classNames from 'classnames';

class ContactInformationFormComponent extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func
  };

  static validate(values) {
    const errors = {};
    const locale = translate('layout').errors;

    if (values.email && !/.+@.+\..+/i.test(values.email)) {
      errors.email = locale.invalidEmail;
    }

    return errors;
  }

  locale = translate('layout').profile.contact;
  isMobile = isMobile();

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {locale} = this;
    const {handleSubmit} = this.props;
    const commonFormClass = classNames('common-form', {'common-form--mobile': this.isMobile});

    return (
      <form className={commonFormClass} onSubmit={handleSubmit}>
        <Field
          name='email'
          label={locale.label1}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder1}
        />
        <Field
          name='handPhoneNumber'
          label={locale.label2}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder2}
        />
        <Field
          name='homePhoneNumber'
          label={locale.label3}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder3}
        />
      </form>
    );
  }
}

export const ContactInformationForm = reduxForm({
  validate: ContactInformationFormComponent.validate,
  form: 'contactInformationForm',
  fields: ['email', 'handPhoneNumber', 'homePhoneNumber'],
  onSubmit: () => { }
})(connect(() => ({}), () => {
  return {};
})(ContactInformationFormComponent));
