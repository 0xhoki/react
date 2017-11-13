import React from 'react';
import PropTypes from 'prop-types';
import translate from 'counterpart';
import renderFields from '../redux-FormFields/renderCommonField';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {isMobile} from '../../helpers';
import classNames from 'classnames';

class CompanyAddressDetailsFormComponent extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func
  };

  static validate() {
    const errors = {};

    return errors;
  }

  isMobile = isMobile();
  locale = translate('layout').employment.companyAddressDetails;

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
          name='country'
          label={locale.label1}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder1}
        />
        <Field
          name='province'
          label={locale.label2}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder2}
        />
        <Field
          name='regency'
          label={locale.label3}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder3}
        />
        <Field
          name='district'
          label={locale.label4}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder4}
        />
        <Field
          name='zip'
          label={locale.label5}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder5}
        />
        <Field
          name='companyAddress'
          label={locale.label6}
          component={renderFields.renderCommonTextArea}
          placeholder={locale.placeholder6}
        />
      </form>
    );
  }
}

export const CompanyAddressDetailsForm = reduxForm({
  validate: CompanyAddressDetailsFormComponent.validate,
  fields: ['country', 'province', 'regency', 'district', 'zip', 'companyAddress'],
  form: 'companyAddressDetailsForm'
})(connect(() => ({}), () => {
  return {};
})(CompanyAddressDetailsFormComponent));
