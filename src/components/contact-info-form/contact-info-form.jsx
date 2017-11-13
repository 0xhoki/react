import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import translate from 'counterpart';
import {bindActionCreators} from 'redux';
import {Link, browserHistory} from 'react-router';
import renderFields from '../redux-FormFields/renderCommonField';
import renderSelectFields from '../redux-FormFields/renderSelectField';
import {Field, reduxForm} from 'redux-form';
import {
  saveProfile,
  assignProfileRegion
} from '../../actions/profile.actions';
import {
  getAllCities,
  getAllDistricts,
  getFullRegionByPostcode,
  getAllSubDivisions
} from '../../actions/region.actions';

class ContactInfoFormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
    this.onProvinceChange = this.onProvinceChange.bind(this);
    this.onCityChange = this.onCityChange.bind(this);
    this.onDistrictChange = this.onDistrictChange.bind(this);
    this.onSubChange = this.onSubChange.bind(this);
    this.onPostcodeChange = this.onPostcodeChange.bind(this);
  }

  static propTypes = {
    handleSubmit: PropTypes.func,
    initialize: PropTypes.func,
    saveProfile: PropTypes.func,
    profile: PropTypes.object,
    getAllSubDivisions: PropTypes.func,
    getAllDistricts: PropTypes.func,
    getAllCities: PropTypes.func,
    getAllProvinces: PropTypes.func,
    getFullRegionByPostcode: PropTypes.func,
    clearPostcode: PropTypes.func,
    assignProfileRegion: PropTypes.func,
    provinceOptions: PropTypes.array,
    cityOptions: PropTypes.array,
    districtOptions: PropTypes.array,
    subDistrictOptions: PropTypes.array
  };

  static validate(values) {
    const errors = {};
    const locale = translate('wizards').contactinfo;
    const dropBoxIsEmpty = (formValue) => !formValue.value || Object.keys(formValue.value).length === 0;
    if (!values.email) {
      errors.email = locale.requiredValidateEmail;
    }
    if (dropBoxIsEmpty(values.province)) {
      errors.province = locale.requiredValidateProvince;
    }
    if (dropBoxIsEmpty(values.city)) {
      errors.city = locale.requiredValidateCity;
    }
    if (dropBoxIsEmpty(values.district)) {
      errors.district = locale.requiredValidateDistrict;
    }
    if (dropBoxIsEmpty(values.subDistrict)) {
      errors.subDistrict = locale.requiredValidateSubdivision;
    }
    if (!values.street) {
      errors.street = locale.requiredValidateAddress;
    }
    if (!values.zip) {
      errors.zip = locale.postalRequired;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = locale.emailValidation;
    }
    if (values.zip && values.zip.length < 5) {
      errors.zip = locale.postalLengthvalidation;
    }
    // if (!/^[a-zA-Z0-9\s,'-/]*$/i.test(values.address)) {
    //   errors.address = locale.addressValidation;
    // }
    return errors;
  }

  locale = translate('wizards').contactinfo;

  submitHandler(values) {
    const payload = {
      address: {
        province: {...values.province.value},
        district: {...values.district.value},
        subDistrict: {...values.subDistrict.value},
        city: {...values.city.value},
        street: values.street
      },
      contact: {
        email: values.email
      }
    };
    this.props.saveProfile(payload).then(() => {
      browserHistory.push('/wizard/step-7/loan');
    });
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
      locale,
      submitHandler,
      onPostcodeChange,
      onProvinceChange,
      onCityChange,
      onDistrictChange,
      onSubChange
    } = this;
    const {
      provinceOptions,
      cityOptions,
      districtOptions,
      subDistrictOptions
    } = this.props;

    return (
      <form onSubmit={this.props.handleSubmit(submitHandler)}>
        <div className='row'>
          <div className='col-sm-12 col-xs-12'>
            <div className='form-group'>
              <label className='label-control'>
                {locale.address}
              </label>
              <Field
                name='street'
                maxLength='200'
                component={renderFields.renderTextbox}
                placeholder={locale.placeholder6}
              />
            </div>
          </div>
          <div className='col-sm-6 col-xs-12'>
            <div className='form-group'>
              <label className='label-control'>
                {locale.province}
              </label>
              <Field
                name='province'
                component={renderSelectFields.selectBox}
                onChange={onProvinceChange}
                options={provinceOptions}
                placeholder={locale.placeholder2}
              />
            </div>
          </div>
          <div className='col-sm-6 col-xs-12'>
            <div className='form-group'>
              <label className='label-control'>{locale.regency}</label>
              <Field
                name='city'
                component={renderSelectFields.selectBox}
                onChange={onCityChange}
                options={cityOptions}
                placeholder={locale.placeholder3}
              />
            </div>
          </div>
          <div className='col-sm-6 col-xs-12'>
            <div className='form-group'>
              <label className='label-control'>{locale.district}</label>
              <Field
                name='district'
                component={renderSelectFields.selectBox}
                onChange={onDistrictChange}
                options={districtOptions}
                placeholder={locale.placeholder4}
              />
            </div>
          </div>
          <div className='col-sm-6 col-xs-12'>
            <div className='form-group'>
              <label className='label-control'>{locale.subdivision}</label>
              <Field
                name='subDistrict'
                component={renderSelectFields.selectBox}
                onChange={onSubChange}
                options={subDistrictOptions}
                placeholder={locale.placeholder5}
              />
            </div>
          </div>
          <div className='col-sm-6 col-xs-12'>
            <div className='form-group'>
              <label className='label-control'>{locale.postal}</label>
              <Field
                name='zip'
                placeholder={locale.placeholder7}
                component={renderFields.renderZipField}
                onChange={onPostcodeChange}
              />
            </div>
          </div>
          <div className='col-sm-6 col-xs-12'>
            <div className='form-group'>
              <label className='label-control'>
                {locale.email}
              </label>
              <br/>
              <Field
                name='email'
                component={renderFields.renderTextbox}
                placeholder={locale.placeholder1}
                maxLength='255'
                type='email'
              />
            </div>
          </div>
          <div className='col-sm-12 col-xs-12'>
            <div className='continue next_previous clearfix'>
              <Link to='/wizard/step-7'>
                <button type='button' className='btn btn-primary pull-left prev_btn'>
                  {locale.previous}
                </button>
              </Link>
              <button type='submit' className='btn btn-primary pull-right next_btn'>
                {locale.next}
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const $ContactInfoForm = reduxForm({
  form: 'ContactInfoForm',
  enableReinitialize: true,
  validate: ContactInfoFormComponent.validate
})(ContactInfoFormComponent);

const regionToOptions = (region) => ({value: region, label: region.name});
export const ContactInfoForm = connect(
  ({
    profile: {
      current
    },
    profile: {
      current: {
        address
      }
    },
    user: {
      userInfo: {
        email
      }
    },
    region
  }) => ({
    profile: current,
    provinceOptions: region.provinces.map(regionToOptions),
    districtOptions: region.districts.map(regionToOptions),
    subDistrictOptions: region.subDivisions.map(regionToOptions),
    cityOptions: region.cities.map(regionToOptions),
    initialValues: {
      street: address.street,
      province: {value: address.province, label: address.province.name},
      city: {value: address.city, label: address.city.name},
      district: {value: address.district, label: address.district.name},
      subDistrict: {value: address.subDistrict, label: address.subDistrict.name},
      zip: address.subDistrict.postcode,
      email: email
    }
  }), (dispatch) => {
    return {
      saveProfile: bindActionCreators(saveProfile, dispatch),
      getAllCities: bindActionCreators(getAllCities, dispatch),
      getAllDistricts: bindActionCreators(getAllDistricts, dispatch),
      getAllSubDivisions: bindActionCreators(getAllSubDivisions, dispatch),
      getFullRegionByPostcode: bindActionCreators(getFullRegionByPostcode, dispatch),
      assignProfileRegion: bindActionCreators(assignProfileRegion, dispatch)
    };
  }
)($ContactInfoForm);
