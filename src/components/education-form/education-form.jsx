import React from 'react';
import PropTypes from 'prop-types';
import translate from 'counterpart';
import renderFields from '../redux-FormFields/renderCommonField';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {isMobile} from '../../helpers';
import classNames from 'classnames';

class EducationFormComponent extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func
  };

  static validate() {
    const errors = {};

    return errors;
  }

  locale = translate('layout').profile.education;
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
          name='university'
          label={locale.label1}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder1}
        />
        <Field
          name='department'
          label={locale.label2}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder2}
        />
        <Field
          name='degree'
          label={locale.label3}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder3}
        />
      </form>
    );
  }
}

export const EducationForm = reduxForm({
  validate: EducationFormComponent.validate,
  form: 'educationForm',
  fields: ['university', 'department', 'degree'],
  onSubmit: () => { }
})(connect(() => ({}), () => {
  return {};
})(EducationFormComponent));
