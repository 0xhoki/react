import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import translate from 'counterpart';
import renderFields from '../redux-FormFields/renderCommonField';
import renderSelectFields from '../redux-FormFields/renderSelectField';
import renderDatepickerField from '../redux-FormFields/renderDatepickerField';
import {Field, reduxForm} from 'redux-form';
import moment from 'moment';
import {
  saveProfile,
  refreshKtpInVoterApi
} from '../../actions/profile.actions';
import {saveLastActiveRequest} from '../../actions/borrower.actions';
import {bindActionCreators} from 'redux';

import {
  getGenderSelectOptions,
  getMaritalStatusOptions,
  getPurposeOptions
} from './user-info-form.enum';
import {
  getAllCities,
  getAllDistricts,
  getFullRegionByPostcode,
  getAllSubDivisions
} from '../../actions/region.actions';
import {
  assignProfileRegion
} from '../../actions/profile.actions';

class UserInfoFormComponent extends React.Component {

  static propTypes = {
    handleSubmit: PropTypes.func,
    initialize: PropTypes.func,
    saveProfile: PropTypes.func,
    saveLastActiveRequest: PropTypes.func,
    getAllSubDivisions: PropTypes.func,
    getAllDistricts: PropTypes.func,
    getAllCities: PropTypes.func,
    getAllProvinces: PropTypes.func,
    getFullRegionByPostcode: PropTypes.func,
    clearPostcode: PropTypes.func,
    assignProfileRegion: PropTypes.func,
    refreshKtpInVoterApi: PropTypes.func,
    provinceOptions: PropTypes.array,
    cityOptions: PropTypes.array,
    districtOptions: PropTypes.array,
    subDistrictOptions: PropTypes.array
  };

  static validate(values) {
    const errors = {};
    const locale = translate('wizards');
    if (!values.fullName) {
      errors.fullName = locale.wizard7.requirednameMessage;
    } else if (!/^[ A-Za-z0-9./']*$/i.test(values.fullName)) {
      errors.fullName = locale.wizard7.invalidCharacters;
    }
    if (!values.dateOfBirth) {
      errors.dateOfBirth = locale.wizard7.requireddobMessage;
    }
    if (!values.reasonLoan) {
      errors.reasonLoan = locale.loaninfo.validatereasonrequired;
    }
    if (!values.email) {
      errors.email = locale.contactinfo.requiredValidateEmail;
    }
    if (!values.province) {
      errors.province = locale.contactinfo.requiredValidateProvince;
    }
    if (!values.city) {
      errors.city = locale.contactinfo.requiredValidateCity;
    }
    if (!values.district) {
      errors.district = locale.contactinfo.requiredValidateDistrict;
    }
    if (!values.subDistrict) {
      errors.subDistrict = locale.contactinfo.requiredValidateSubdivision;
    }
    if (!values.street) {
      errors.street = locale.contactinfo.requiredValidateAddress;
    }
    if (!values.zip) {
      errors.zip = locale.contactinfo.postalRequired;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = locale.contactinfo.emailValidation;
    }
    if (values.zip) {
      if (values.zip.length < 5) {
        errors.zip = locale.contactinfo.postalLengthvalidation;
      }
    }
    if (!/^[a-zA-Z0-9\s,'-/]*$/i.test(values.street)) {
      errors.street = locale.contactinfo.streetValidation;
    }
    return errors;
  }

  locale = translate('wizards');

  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
    this.onBirthdayChange = this.onBirthdayChange.bind(this);
    this.onProvinceChange = this.onProvinceChange.bind(this);
    this.onSubChange = this.onSubChange.bind(this);
    this.onCityChange = this.onCityChange.bind(this);
    this.onDistrictChange = this.onDistrictChange.bind(this);
    this.onPostcodeChange = this.onPostcodeChange.bind(this);
  }

  submitHandler(
    {
      ktp,
      fullName,
      dateOfBirth,
      gender,
      maritalStatus,
      purpose,
      reason,
      email,
      street,
      province,
      city,
      district,
      subDistrict
    }) {
    const profileBody = {
      fullName,
      dateOfBirth,
      gender,
      maritalStatus,
      address: {
        province: {...province.value},
        district: {...district.value},
        subDistrict: {...subDistrict.value},
        city: {...city.value},
        street: street
      },
      contact: {
        email
      }
    };

    const loanBody = {
      purpose,
      reason
    };

    this.props.saveProfile(profileBody).then(()=>{
      this.props.refreshKtpInVoterApi(ktp);
    });
    this.props.saveLastActiveRequest(loanBody);
  }

  onBirthdayChange() {

  }

  onProvinceChange(province) {
    this.props.assignProfileRegion({province, city: {}, district: {}, subDistrict: {}});
    this.props.getAllCities(province.regionId);
  }

  onCityChange(city) {
    this.props.assignProfileRegion({city, district: {}, subDistrict: {}});
    this.props.getAllDistricts(city.regionId);
  }

  onDistrictChange(district) {
    this.props.assignProfileRegion({district, subDistrict: {}});
    this.props.getAllSubDivisions(district.regionId);
  }

  onSubChange(subDistrict) {
    this.props.assignProfileRegion({subDistrict});
  }

  onPostcodeChange(e) {
    const postcode = e.target.value;
    if (postcode) {
      this.props.getFullRegionByPostcode(postcode);
    } else {
      this.props.assignProfileRegion({district: {}, city: {}, province: {}, subDistrict: {}});
    }
  }

  render() {
    const {
      handleSubmit,
      provinceOptions,
      cityOptions,
      districtOptions,
      subDistrictOptions
    } = this.props;

    const {
      locale,
      submitHandler,
      onBirthdayChange,
      onProvinceChange,
      onSubChange,
      onCityChange,
      onDistrictChange,
      onPostcodeChange
    } = this;

    return (
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className='col-sm-6 col-xs-12'>
          <div className='sideform rightInfo appLoanFrm'>
            <div className='personal_details clearfix'>
              <h5>
                <b>
                  {locale.wizard7.label}
                </b>
              </h5>
            </div>
            <div className='personal_form userinfo_mod'>
              <div className='row'>
                <div className='col-sm-12 col-xs-12'>
                  <div className='form-group row'>
                    <label
                      className='label-control  col-md-4 col-xs-12'>
                      {locale.wizard7.fullname}
                    </label>
                    <div className='col-md-8 col-xs-12 userInfoInput'>
                      <Field
                        name='fullName'
                        component={renderFields.renderTextbox}
                        placeholder={locale.wizard7.placeholder1}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-sm-12 col-xs-12'>
                  <div className='form-group row'>
                    <label className='label-control  col-md-4 col-xs-12'>
                      {locale.wizard7.dob}
                    </label>
                    <div className='col-md-8 col-xs-12 userInfoInput react-datepickercustom'>
                      <Field
                        name='dateOfBirth'
                        component={renderDatepickerField.renderdatePicker}
                        dateFormat='DD-MM-YYYY'
                        maxDate={moment().subtract(18, 'years')}
                        placeholder={locale.wizard7.placeholder2}
                        selected={null}
                        onChange={onBirthdayChange}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-sm-12 col-xs-12'>
                  <div className='form-group row'>
                    <label className='label-control  col-md-4 col-xs-12'>
                      {locale.wizard7.gender}
                    </label>
                    <div className='drop_down userInfoSelect col-md-8 col-xs-12'>
                      <Field
                        name='gender'
                        component={renderSelectFields.selectBox}
                        onChange={onProvinceChange}
                        options={getGenderSelectOptions(locale.wizard7)}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-sm-12 col-xs-12'>
                  <div className='form-group row'>
                    <label className='label-control  col-md-4 col-xs-12'>
                      {locale.wizard7.maritalStatus}
                    </label>
                    <div className='drop_down userInfoSelect col-md-8 col-xs-12'>
                      <Field
                        name='maritalStatus'
                        component={renderSelectFields.selectBox}
                        options={getMaritalStatusOptions(locale.wizard7)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-xs-12'>
          <div className='sideform appLoanFrm leftInfo'>
            <div className='personal_details clearfix'>
              <h5>
                <b>
                  {locale.loaninfo.heading3}
                </b>
              </h5>
            </div>
            <div className='personal_form appLoanFrm'>
              <div className='row'>
                <div className='col-sm-12 col-xs-12'>
                  <div className='form-group row'>
                    <label className='label-control col-md-4 col-xs-12'>
                      {locale.loaninfo.purpose}
                    </label>
                    <div className='drop_down userInfoSelect col-md-8 col-xs-12'>
                      <Field
                        name='purpose'
                        component={renderSelectFields.selectBox}
                        options={getPurposeOptions(locale.loaninfo)}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-sm-12 col-xs-12'>
                  <div className='form-group row'>
                    <label className='label-control col-md-4 col-xs-12'>
                      {locale.loaninfo.need_loan}
                    </label>
                    <div className='text_form col-md-8 col-xs-12 userInfoInput'>
                      <Field
                        name='reason'
                        component={renderFields.renderTextArea}
                        placeholder={locale.loaninfo.placeholder1}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='clearfix'/>
        <div className='col-sm-6 col-xs-12'>
          <div className='sideform rightInfo appLoanFrm'>
            <div className='personal_details clearfix'>
              <h5>
                <b>
                  {locale.contactinfo.heading}
                </b>
              </h5>
            </div>
            <div className='personal_form'>
              <div className='row'>
                <div className='col-sm-12 col-xs-12'>
                  <div className='form-group row'>
                    <label
                      className='label-control col-md-4 col-xs-12'>
                      {locale.contactinfo.email}
                    </label>
                    <div className='col-md-8 col-xs-12 userInfoInput'>
                      <Field
                        name='email'
                        component={renderFields.renderTextbox}
                        placeholder={locale.contactinfo.placeholder1}
                        maxLength='255'
                      />
                    </div>
                  </div>
                </div>
                <div className='col-sm-12 col-xs-12'>
                  <div className='form-group row'>
                    <label
                      className='label-control col-md-4 col-xs-12'>
                      {locale.contactinfo.address}
                    </label>
                    <div className='col-md-8 col-xs-12 userInfoInput'>
                      <Field
                        name='street'
                        maxLength='200'
                        component={renderFields.renderTextbox}
                        placeholder={locale.contactinfo.placeholder6}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-sm-12 col-xs-12'>
                  <div className='form-group row'>
                    <label
                      className='label-control col-md-4 col-xs-12'>
                      {locale.contactinfo.province}
                    </label>
                    <div className='drop_down userInfoSelect col-md-8 col-xs-12'>
                      <Field
                        name='province'
                        component={renderSelectFields.selectBox}
                        onChange={onProvinceChange}
                        options={provinceOptions}
                        placeholder={locale.contactinfo.placeholder2}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-sm-12 col-xs-12'>
                  <div className='form-group row'>
                    <label
                      className='label-control col-md-4 col-xs-12'>
                      {locale.contactinfo.regency}
                    </label>
                    <div className='drop_down userInfoSelect col-md-8 col-xs-12'>
                      <Field
                        name='city'
                        component={renderSelectFields.selectBox}
                        onChange={onCityChange}
                        options={cityOptions}
                        placeholder={locale.contactinfo.placeholder3}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-sm-12 col-xs-12'>
                  <div className='form-group row'>
                    <label
                      className='label-control col-md-4 col-xs-12'>
                      {locale.contactinfo.district}
                    </label>
                    <div className='drop_down userInfoSelect col-md-8 col-xs-12'>
                      <Field
                        name='district'
                        component={renderSelectFields.selectBox}
                        onChange={onDistrictChange}
                        options={districtOptions}
                        placeholder={locale.contactinfo.placeholder4}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-sm-12 col-xs-12'>
                  <div className='form-group row'>
                    <label className='label-control col-md-4 col-xs-12'>
                      {locale.contactinfo.subdivision}
                    </label>
                    <div className='drop_down userInfoSelect col-md-8 col-xs-12'>
                      <Field
                        name='subDistrict'
                        component={renderSelectFields.selectBox}
                        onChange={onSubChange}
                        options={subDistrictOptions}
                        placeholder={locale.contactinfo.placeholder5}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-sm-12 col-xs-12'>
                  <div className='form-group row'>
                    <label
                      className='label-control col-md-4 col-xs-12'>
                      {locale.contactinfo.postal}
                    </label>
                    <div className='col-md-8 col-xs-12 userInfoInput'>
                      <Field
                        name='zip'
                        placeholder={locale.contactinfo.placeholder7}
                        component={renderFields.renderZipField}
                        onChange={onPostcodeChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='clearfix'/>
        <hr className='hrBtnB'/>
        <div className='col-sm-12 col-xs-12'>
          <div className='continue next_previous clearfix text-center'>
            <button type='submit' className='btn btn-primary prev_btn'>
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const $UserInfoForm = reduxForm({
  validate: UserInfoFormComponent.validate,
  enableReinitialize: true,
  form: 'wizardSubmit',
  fields: [
    'fullName',
    'dateOfBirth',
    'gender',
    'maritalStatus',
    'purpose',
    'reason',
    'email',
    'street',
    'province',
    'city',
    'district',
    'subDistrict',
    'zip'
  ]
})(UserInfoFormComponent);

const regionToOptions = (region) => ({value: region, label: region.name});
export const UserInfoForm = connect((
  {
    profile: {
      current: {
        fullName,
        dateOfBirth,
        gender,
        maritalStatus,
        ktp
      }
    },
    profile: {
      current: {
        address,
        contact: {email}
      }
    },
    borrower: {
      current: {purpose, reason}
    },
    region
  }) => ({
  initialValues: {
    ktp,
    fullName,
    dateOfBirth,
    gender,
    maritalStatus,
    purpose,
    reason,
    street: address.street,
    province: {value: address.province, label: address.province.name},
    city: {value: address.city, label: address.city.name},
    district: {value: address.district, label: address.district.name},
    subDistrict: {value: address.subDistrict, label: address.subDistrict.name},
    zip: address.subDistrict.postcode,
    email: email
  },
  provinceOptions: region.provinces.map(regionToOptions),
  districtOptions: region.districts.map(regionToOptions),
  subDistrictOptions: region.subDivisions.map(regionToOptions),
  cityOptions: region.cities.map(regionToOptions)
}), (dispatch) => {
  return {
    saveProfile: bindActionCreators(saveProfile, dispatch),
    saveLastActiveRequest: bindActionCreators(saveLastActiveRequest, dispatch),
    getAllCities: bindActionCreators(getAllCities, dispatch),
    getAllDistricts: bindActionCreators(getAllDistricts, dispatch),
    getAllSubDivisions: bindActionCreators(getAllSubDivisions, dispatch),
    getFullRegionByPostcode: bindActionCreators(getFullRegionByPostcode, dispatch),
    assignProfileRegion: bindActionCreators(assignProfileRegion, dispatch),
    refreshKtpInVoterApi: bindActionCreators(refreshKtpInVoterApi, dispatch)
  };
})($UserInfoForm);
