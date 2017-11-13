import React from 'react';
import PropTypes from 'prop-types';
import translate from 'counterpart';
import renderFields from '../redux-FormFields/renderCommonField';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {isMobile} from '../../helpers';
import classNames from 'classnames';

class CompanyBasicDetailsFormComponent extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func
  };

  static validate() {
    const errors = {};

    return errors;
  }

  locale = translate('layout').employment.companyBasicDetails;
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
          name='occupation'
          label={locale.label1}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder1}
        />
        <Field
          name='companyName'
          label={locale.label2}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder2}
        />
        <Field
          name='companySector'
          label={locale.label3}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder3}
        />
        <Field
          name='companyPhone'
          label={locale.label4}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder4}
        />
      </form>
    );
  }
}

export const CompanyBasicDetailsForm = reduxForm({
  validate: CompanyBasicDetailsFormComponent.validate,
  fields: ['occupation', 'companyName', 'companySector', 'companyPhone'],
  form: 'companyBasicDetailsForm'
})(connect(() => ({}), () => {
  return {};
})(CompanyBasicDetailsFormComponent));
