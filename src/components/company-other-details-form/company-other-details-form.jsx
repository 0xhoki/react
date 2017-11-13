import React from 'react';
import PropTypes from 'prop-types';
import translate from 'counterpart';
import renderFields from '../redux-FormFields/renderCommonField';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import DatePicker from '../date-picker/date-picker';
import {isMobile} from '../../helpers';
import classNames from 'classnames';

class CompanyOtherDetailsFormComponent extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func
  };

  static validate() {
    const errors = {};

    return errors;
  }

  locale = translate('layout').employment.companyOtherDetails;
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
          name='monthlyBaseIncome'
          label={locale.label1}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder1}
        />
        <Field
          name='monthlyOtherIncome'
          label={locale.label2}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder2}
        />
        <Field
          name='managerName'
          label={locale.label3}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder3}
        />
        <Field
          name='employeeSince'
          label={locale.label4}
          component={DatePicker}
          placeholders={[locale.placeholder4, locale.placeholder5, locale.placeholder6]}
        />
        <Field
          name='jobTitle'
          label={locale.label5}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder5}
        />
      </form>
    );
  }
}

export const CompanyOtherDetailsForm = reduxForm({
  validate: CompanyOtherDetailsFormComponent.validate,
  fields: ['monthlyBaseIncome', 'monthlyOtherIncome', 'managerName', 'employeeSince', 'jobTitle'],
  form: 'companyOtherDetailsForm'
})(connect(() => ({}), () => {
  return {};
})(CompanyOtherDetailsFormComponent));
