import React from 'react';
import PropTypes from 'prop-types';
import translate from 'counterpart';
import renderFields from '../redux-FormFields/renderCommonField';
import DatePicker from '../date-picker/date-picker';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {isMobile} from '../../helpers';
import classNames from 'classnames';

const getMaritalStatusOptions = (wizard7) => ([
  {value: 1, text: wizard7.single},
  {value: 2, text: wizard7.married},
  {value: 3, text: wizard7.divorced},
  {value: 4, text: wizard7.widowed}
]);

class PersonalFormComponent extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    profile: PropTypes.object
  };

  static validate(values) {
    const errors = {};
    const locale = translate('layout').errors;

    if (values.fullName && !/^[ A-Za-z0-9./']*$/i.test(values.fullName)) {
      errors.fullName = locale.invalidCharacters;
    }
    if (values.ktp && !/^[0-9]{16}$/.test(values.ktp)) {
      errors.ktp = locale.invalidKtp;
    }

    return errors;
  }

  isMobile = isMobile();
  locale = translate('layout').profile.personal;
  localeWizard7 = translate('wizards').wizard7;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {locale, localeWizard7} = this;
    const {handleSubmit} = this.props;
    const commonFormClass = classNames('common-form', {'common-form--mobile': this.isMobile});

    return (
      <form className={commonFormClass} onSubmit={handleSubmit}>
        <Field
          name='fullName'
          label={locale.label1}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder1}
        />
        <Field
          name='dateOfBirth'
          label={locale.label2}
          component={DatePicker}
          placeholders={[locale.placeholder2, locale.placeholder3, locale.placeholder4]}
        />
        <Field
          name='gender'
          label={locale.label3}
          component={renderFields.renderCommonRadio}
          data={[{text: 'Male', value: 'M'}, {text: 'Female', value: 'F'}]}
        />
        <Field
          name='ktp'
          label={locale.label4}
          placeholder={locale.placeholder5}
          component={renderFields.renderCommonTextBox}
        />
        <Field
          name='maritalStatus'
          label={locale.label5}
          placeholder={locale.placeholder6}
          component={renderFields.renderCommonSelect}
          data={getMaritalStatusOptions(localeWizard7)}
        />
      </form>
    );
  }
}

export const PersonalForm = reduxForm({
  validate: PersonalFormComponent.validate,
  form: 'personalForm',
  fields: ['fullName', 'dateOfBirth', 'gender', 'ktp', 'maritalStatus'],
  onSubmit: () => { }
})(connect(state => ({
  profile: state.profile.current
}), () => ({
}))(PersonalFormComponent));
