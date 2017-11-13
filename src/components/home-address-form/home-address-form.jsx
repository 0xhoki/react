import React from 'react';
import PropTypes from 'prop-types';
import translate from 'counterpart';
import renderFields from '../redux-FormFields/renderCommonField';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {isMobile} from '../../helpers';
import classNames from 'classnames';

class HomeAddressFormComponent extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func
  };

  static validate(values) {
    const errors = {};
    const locale = translate('layout').errors;

    if (values.zip && !/^[0-9]{6}$/.test(values.zip)) {
      errors.zip = locale.invalidZip;
    }

    return errors;
  }

  locale = translate('layout').profile.homeAddress;
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
          name='country'
          label={locale.label1}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder1}
        />
        <Field
          name='region1'
          label={locale.label2}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder2}
        />
        <Field
          name='region2'
          label={locale.label3}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder3}
        />
        <Field
          name='region3'
          label={locale.label4}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder4}
        />
        <Field
          name='region4'
          label={locale.label5}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder5}
        />
        <Field
          name='zip'
          label={locale.label6}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder6}
        />
        <Field
          name='street'
          label={locale.label7}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder7}
        />
        <Field
          name='residenceOwnership'
          label={locale.label8}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder8}
        />
        <Field
          name='residenceSince'
          label={locale.label9}
          component={renderFields.renderCommonTextBox}
          placeholder={locale.placeholder9}
        />
      </form>
    );
  }
}
// region1: province,
// region2: city,
// region3: district,
// region4: subDistrict,
export const HomeAddressForm = reduxForm({
  validate: HomeAddressFormComponent.validate,
  form: 'homeAddressForm',
  fields: [
    'country',
    'region1',
    'region2',
    'region3',
    'region4',
    'zip',
    'street',
    'residenceOwnership',
    'residenceSince'
  ],
  onSubmit: () => { }
})(connect(() => ({}), () => {
  return {};
})(HomeAddressFormComponent));
