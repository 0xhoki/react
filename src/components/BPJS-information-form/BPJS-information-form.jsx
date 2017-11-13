import React from 'react';
import PropTypes from 'prop-types';
import translate from 'counterpart';
import renderFields from '../redux-FormFields/renderCommonField';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {isMobile} from '../../helpers';
import classNames from 'classnames';

class BPJSInformationFormComponent extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func
  };

  static validate() {
    const errors = {};

    return errors;
  }

  locale = translate('layout').profile.BPJS;
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
          name='pensionNumber'
          label={locale.label1}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder1}
        />
        <Field
          name='healthNumber'
          label={locale.label2}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder2}
        />
      </form>
    );
  }
}

export const BPJSInformationForm = reduxForm({
  validate: BPJSInformationFormComponent.validate,
  form: 'BPJSInformationForm',
  fields: ['pensionNumber', 'healthNumber'],
  onSubmit: () => {}
})(connect(() => ({}), () => {
  return {};
})(BPJSInformationFormComponent));
