import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import * as api from '../../../tools/apiConfig';
import moment from 'moment';
import OfferedLoan from '../shared/offeredLoanSection.component.jsx';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import axios from 'axios';
import {Field, reduxForm, change} from 'redux-form';
import renderFields from '../redux-FormFields/renderCommonField';
import renderSelectFields from '../redux-FormFields/renderSelectField';
import renderDatepickerField from '../redux-FormFields/renderDatepickerField';
import SubmissionError from 'redux-form/lib/SubmissionError';
import PropTypes from 'prop-types';

let locale_wizard7 = {};
let locale_contactinfo = {};
let locale_loaninfo = {};
let locale_userinfo = {};
let hitCount = 0;

class UserInfo extends React.Component {
  static propTypes = {
    locale: PropTypes.object,
    start: PropTypes.func,
    handleSubmit: PropTypes.func,
    initialize: PropTypes.func,
    dispatch: PropTypes.func,
    setPercent: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      startDate: moment().date(15).month(5).year(1990),
      dob: '',
      amount: 0,
      months: 0,
      monthlyPayment: 0,
      totalPayment: 0,
      loaninfo: {},
      selectValue: '1',
      adminFee: 0,
      blocking: true,
      details: {
        fullname: '',
        birthdate: '',
        marital_status: '',
        gender: ''
      },
      email: '',
      zip: '',
      street: '',
      provinces: null,
      cities: null,
      citiesOptions: [],
      districts: null,
      districtOptions: [],
      subdivisions: null,
      subOptions: [],
      provinceOptions: [],
      initData: {
        personalData: {},
        loanData: {},
        contactData: {}
      }
    };
    this.getLoanInfo = this.getLoanInfo.bind(this);
    this.getPersonalDetails = this.getPersonalDetails.bind(this);
    this.formatKtpData = this.formatKtpData.bind(this);
  }

  componentDidMount() {
    this.getPersonalDetails();
    this.getLoanInfo();
    this.getProvinces();
    this.getContactInfo();
  }

  handleChange(date) {
    if (date._d) {
      this.setState({
        startDate: date
      });
    } else {
      this.setState({
        startDate: ''
      });
    }
  }

  initAllFields() {
    let initData = {
      fullname: this.state.initData.personalData.fullname,
      dob: this.state.initData.personalData.dob,
      email: this.state.initData.contactData.email,
      zip: this.state.initData.contactData.zip,
      address: this.state.initData.contactData.address,
      province: this.state.initData.contactData.province,
      city: this.state.initData.contactData.city,
      district: this.state.initData.contactData.district,
      subdivision: this.state.initData.contactData.subdivision,
      reason_loan: this.state.initData.loanData.reason_loan
    };
    this.props.initialize(initData);
    this.props.setPercent(100);
    this.setState({
      blocking: false
    });
  }

  getPersonalDetails() {
    let token = localStorage.getItem('token');
    let id = localStorage.getItem('id');
    let ktp = localStorage.getItem('KTP');
    if (ktp) {
      ktp = ktp.replace(/ /g, '');
    }
    $.ajax({
      type: 'GET',
      url: api.GET_KTP_DATA,
      dataType: 'json',
      contentType: 'application/json',
      data: {
        user_id: id,
        ktp: ktp
      },
      headers: {
        Authorization: 'Bearer ' + token
      },
      success: (response) => {
        if (response.status === 'UNAUTHORIZED') {
          toastr.error(locale_wizard7.sessionError);
          localStorage.clear();
          browserHistory.push('/Login');
        } else if (response.status === 'OK') {
          this.formatKtpData(response.data);
          hitCount += 1;
          if (hitCount === 3) {
            this.initAllFields();
          }
        } else if (response.status === 'INTERNAL_ERROR') {
          toastr.error(locale_wizard7.internalError);
        }
      }, error: () => {
        localStorage.clear();
        toastr.error(locale_wizard7.serverError);
        browserHistory.push('/Login');
      }
    });
  }

  formatKtpData(data) {
    if (data !== null) {
      this.setState({
        details: data
      });
      let temp = data.birthdate;
      if (temp) {
        let format = new Date(temp);
        format.toUTCString();
        temp = format;
        let date = moment(temp, 'DD-MM-YYYY');
        this.setState({
          startDate: date
        });
      }
      let currentState = this.state.initData;
      currentState.personalData = {
        fullname: data.fullname ? data.fullname : '',
        dob: this.state.startDate ? this.state.startDate : ''
      };
      this.setState({
        initData: currentState
      });
    } else {
      let currentState = this.state.initData;
      currentState.personalData = {
        fullname: data.fullname ? data.fullname : '',
        dob: this.state.startDate ? this.state.startDate : ''
      };
      this.setState({
        initData: currentState
      });
    }
  }

  getLoanInfo() {
    let token = localStorage.getItem('token');
    let id = localStorage.getItem('id');
    $.ajax({
      type: 'GET',
      url: api.GET_LOANINFO,
      dataType: 'json',
      contentType: 'application/json',
      data: {
        loan_id: id
      },
      headers: {
        Authorization: 'Bearer ' + token
      },
      success: (response) => {
        if (response.status === 'UNAUTHORIZED') {
          toastr.error(locale_loaninfo.sessionError);
          browserHistory.push('/Login');
        } else if (response.status === 'NOT_FOUND') {
          this.initloanData();
        } else if (response.status === 'OK') {
          let temp = response.data;
          if (temp) {
            this.handleloanData(temp);
          }
          hitCount += 1;
          if (hitCount === 3) {
            this.initAllFields();
          }
        } else {
          toastr.error(locale_loaninfo.internalError);
        }
      },
      error: () => {
        toastr.error(locale_loaninfo.serverError);
        browserHistory.push('/Login');
        this.props.setPercent(100);
      }
    });
  }

  handleloanData(data) {
    this.setState({
      loaninfo: data
    });
    let currentState = this.state.initData;
    currentState.loanData = {
      reason_loan: this.state.loaninfo.details_needs
    };
    this.setState({
      initData: currentState
    });
  }

  initloanData() {
    const initData = {
      reason_loan: ''
    };
    this.props.initialize(initData);
  }

  getContactInfo() {
    let token = localStorage.getItem('token');
    let id = localStorage.getItem('id');
    let ktp = localStorage.getItem('KTP');
    if (ktp) {
      ktp = ktp.replace(/ /g, '');
    }
    $.ajax({
      type: 'GET',
      url: api.GET_KTPADDRESS,
      dataType: 'json',
      contentType: 'application/json',
      data: {
        user_id: id,
        ktp: ktp
      },
      headers: {
        Authorization: 'Bearer ' + token
      },
      success: (response) => {
        if (response.status === 'UNAUTHORIZED') {
          localStorage.clear();
          toastr.error(locale_contactinfo.sessionError);
          browserHistory.push('/Login');
        } else if (response.status === 'OK') {
          if (response.data) {
            this.handlecontactData(response.data);
          }
          hitCount += 1;
          if (hitCount === 3) {
            this.initAllFields();
          }
        } else {
          toastr.error(locale_contactinfo.internalError);
        }
      },
      error: function () {
        localStorage.clear();
        toastr.error(locale_contactinfo.serverError);
        browserHistory.push('/Login');
      }
    });
  }

  handlecontactData(data) {
    if (data.street) {
      let region1 = data.street.region1;
      let region2 = data.street.region2;
      let region3 = data.street.region3;
      let region4 = data.street.region4;
      this.setState({
        provinces: region1,
        cities: region2,
        districts: region3,
        zip: data.street.zip,
        street: data.street.street,
        subdivisions: region4
      });
      this.getCities(region1 ? region1.value : '');
      this.getDistricts(region2 ? region2.value : '');
      this.getSubdivisions(region3 ? region3.value : '');
      let currentState = this.state.initData;
      currentState.contactData = {
        email: data.email ? data.email.address : '',
        zip: data.street.zip ? data.street.zip : '',
        address: data.street.street ? data.street.street : '',
        province: region1 ? region1.value : '',
        city: region2 ? region2.value : '',
        district: region3 ? region3.value : '',
        subdivision: region4 ? region4.value : ''
      };
      this.setState({
        initData: currentState
      });
    } else {
      let currentState = this.state.initData;
      currentState.contactData = {
        email: data.email ? data.email.address : '',
        zip: data.street ? data.street.zip : '',
        address: data.street ? data.street.street : '',
        province: '',
        city: '',
        district: '',
        subdivision: ''
      };
      this.setState({
        initData: currentState
      });
    }
  }

  getProvinces() {
    axios.get(api.GET_PROVINCES).then((response) => {
      this.setState({
        provinceOptions: response.data.data
      });
    });
  }

  getCities(value) {
    if (value) {
      axios.get(api.GET_CITIES, {params: {id: value}}).then((response) => {
        this.setState({
          citiesOptions: response.data.data
        });
      });
    } else {
      return {options: []};
    }
  }

  getDistricts(value) {
    let id = value ? value : null;
    if (id !== null) {
      axios.get(api.GET_DISTRICTS, {params: {id: id}}).then((response) => {
        this.setState({
          districtOptions: response.data.data
        });
      });
    } else {
      return {options: []};
    }
  }

  getSubdivisions(value) {
    let id = value ? value : null;
    if (id !== null) {
      axios.get(api.GET_SUBS, {params: {id: id}}).then((response) => {
        this.setState({
          subOptions: response.data.data
        });
      });
    } else {
      return {options: []};
    }
  }

  onProvinceChange(input) {
    if (input.value) {
      let data = {
        value: input.value,
        label: input.label
      };
      this.setState({
        provinces: data,
        cities: null,
        districts: null,
        subdivisions: null
      });
      this.props.dispatch(change('userinfoform', 'city', ''));
      this.props.dispatch(change('userinfoform', 'district', ''));
      this.props.dispatch(change('userinfoform', 'subdivision', ''));
      // let initData ={
      //   cities: null,
      //   districts: null,
      //   subdivisions: null
      // }
      // this.props.initialize(initData);
      this.getCities(input.value);
    }
  }

  onCityChange(input) {
    if (input.value) {
      let data = {
        value: input.value,
        label: input.label
      };
      this.setState({
        cities: data,
        districts: null,
        subdivisions: null
      });
      this.props.dispatch(change('userinfoform', 'district', ''));
      this.props.dispatch(change('userinfoform', 'subdivision', ''));
      this.getDistricts(input.value);
    }
  }

  ondistrictChange(input) {
    if (input.value) {
      let data = {
        value: input.value,
        label: input.label
      };
      this.setState({
        districts: data,
        subdivisions: null
      });
      this.props.dispatch(change('userinfoform', 'subdivision', ''));
      this.getSubdivisions(input.value);
    }
  }

  onsubChange(input) {
    if (input.value) {
      let data = {
        value: input.value,
        label: input.label
      };
      this.setState({
        subdivisions: data
      });
    }
  }

  submitHandler(values) {
    if (values) {
      this.props.start();
      const loan_amount = localStorage.getItem('tenor_amt');
      const loan_tenor = localStorage.getItem('tenor_mon');
      const monthly_installment = localStorage.getItem('installment');
      const fee_upfront = localStorage.getItem('fee_upfront');
      let id = localStorage.getItem('id');
      let dob = values.dob;
      let temp = new Date(dob);
      temp.toUTCString();
      let ktp = localStorage.getItem('KTP');
      let data = {
        user_id: id,
        UserDetails: {
          fullname: values.fullname,
          birthday: temp,
          number: ktp,
          gender: ReactDOM.findDOMNode(this.refs.gender).value,
          marital_status: ReactDOM.findDOMNode(this.refs.maritalstatus).value
        },
        AddressDetails: {
          email: values.email,
          address: values.address,
          region1: this.state.provinces,
          region2: this.state.cities,
          region3: this.state.districts,
          region4: this.state.subdivisions,
          zip: values.zip
        },
        LoanDetails: {
          purpose_of_loan: ReactDOM.findDOMNode(this.refs.purspose).value,
          details_needs: values.reason_loan,
          loan_amount: loan_amount,
          loan_tenor: loan_tenor,
          monthly_installment: monthly_installment,
          fee_upfront: fee_upfront,
          interest_rate: '36'
        }
      };
      let token = localStorage.getItem('token');
      return axios.post(api.FINAL_SUBMIT, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      }).then(function (response) {
        this.props.setPercent(100);
        if (response.data.status === 'UNAUTHORIZED') {
          toastr.error(locale_userinfo.sessionError);
          browserHistory.push('/Login');
        }
        if (response.data.message === 'INVALID ZIP') {
          throw new SubmissionError({
            zip: locale_contactinfo.postalRemoteValidate
          });
        }
        if (response.data.message === 'INVALID EMAIL') {
          throw new SubmissionError({
            email: locale_contactinfo.emailValidation
          });
        } else if (response.data.status === 'OK') {
          this.props.setPercent(100);
          toastr.success(response.message);
          browserHistory.push('/user-info/loan-acknowledgement-accept');
        } else if (response.data.status === 'ADDRESS_REASON') {
          browserHistory.push('/user-info/loan-acknowledgement-reject-reason2');
        } else if (response.data.status === 'OTHER_REASONS') {
          browserHistory.push('/user-info/loan-acknowledgement-reject-reason1');
        } else {
          toastr.error(locale_userinfo.internalError);
        }
      }.bind(this))
        .catch(function (error) {
          if (error.errors) {
            if (error.errors.zip) {
              this.props.setPercent(100);
              throw new SubmissionError({
                zip: locale_contactinfo.postalRemoteValidate
              });
            }
            if (error.errors.email) {
              this.props.setPercent(100);
              throw new SubmissionError({
                email: locale_contactinfo.emailValidation
              });
            }
          } else {
            this.props.setPercent(100);
            // localStorage.clear();
            toastr.error(locale_userinfo.serverError);
            // browserHistory.push('/Login')
          }
          this.props.setPercent(100);
        }.bind(this));
    }
  }

  render() {
    locale_wizard7 = this.props.locale.wizard7;
    locale_contactinfo = this.props.locale.contactinfo;
    locale_loaninfo = this.props.locale.loaninfo;
    locale_userinfo = this.props.locale.userinfo;
    // let locale_loanoffer = this.props.locale.loanoffer;
    const {handleSubmit} = this.props;
    let personaldetails = this.state.details;
    let loaninformation = this.state.loaninfo;
    return (
      <div className='nav-md loan_wizard'>
        <div className='main_container'>
          <div className='container'>
            <div className='right_col' role='main'>
              <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12'>
                  <div className='wrapper row'>
                    <div className='col-sm-12 col-xs-12'>
                      {/* <h2 className='offered_title'>Offered Loan</h2> */}
                    </div>
                    <div className='col-sm-12 col-xs-12'>
                      <h5 className='text-center'><b>{locale_userinfo.heading_part1}</b></h5>
                    </div>
                    <div className='col-sm-12 col-xs-12'>
                      <OfferedLoan/>
                    </div>
                    <BlockUi tag='div' blocking={this.state.blocking}>

                      <form onSubmit={handleSubmit(this.submitHandler.bind(this))}>
                        <div className='col-sm-6 col-xs-12'>
                          <div className='sideform rightInfo appLoanFrm'>
                            <div className='personal_details clearfix'><h5><b>{locale_wizard7.label}</b></h5></div>
                            <div className='personal_form userinfo_mod'>
                              <div className='row'>
                                <div className='col-sm-12 col-xs-12'>
                                  <div className='form-group row'>
                                    <label
                                      className='label-control  col-md-4 col-xs-12'>{locale_wizard7.fullname}</label>
                                    <div className='col-md-8 col-xs-12 userInfoInput'>
                                      <Field
                                        name='fullname'
                                        component={renderFields.renderTextbox}
                                        placeholder={locale_wizard7.placeholder1}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className='col-sm-12 col-xs-12'>
                                  <div className='form-group row'>
                                    <label className='label-control  col-md-4 col-xs-12'>{locale_wizard7.dob}</label>
                                    <div className='col-md-8 col-xs-12 userInfoInput react-datepickercustom'>
                                      <Field
                                        name='dob'
                                        component={renderDatepickerField.renderdatePicker}
                                        dateFormat='DD-MM-YYYY'
                                        maxDate={moment().subtract(18, 'years')}
                                        placeholder={locale_wizard7.placeholder2}
                                        selected={this.state.startDate ? this.state.startDate : null}
                                        onChange={this.handleChange.bind(this)}
                                      />
                                    </div>
                                    {/* <div className='input_form  col-md-8'>08-13-1978</div> */}
                                  </div>
                                </div>
                                <div className='col-sm-12 col-xs-12'>
                                  <div className='form-group row'>
                                    <label className='label-control  col-md-4 col-xs-12'>{locale_wizard7.gender}</label>
                                    <div className='drop_down userInfoSelect col-md-8 col-xs-12'>
                                      <select ref='gender' defaultValue={personaldetails ? personaldetails.gender : ''}
                                        key={personaldetails ? personaldetails.gender : ''}>
                                        <option value='Male'>{locale_wizard7.male}</option>
                                        <option value='Female'>{locale_wizard7.female}</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className='col-sm-12 col-xs-12'>
                                  <div className='form-group row'>
                                    <label className='label-control  col-md-4 col-xs-12'>
                                      {locale_wizard7.maritalStatus}
                                    </label>
                                    <div className='drop_down userInfoSelect col-md-8 col-xs-12'>
                                      <select ref='maritalstatus'
                                        defaultValue={personaldetails ? personaldetails.marital_status : ''}
                                        key={personaldetails ? personaldetails.marital_status : ''}>
                                        <option value='1'>{locale_wizard7.single}</option>
                                        <option value='2'>{locale_wizard7.married}</option>
                                        <option value='3'>{locale_wizard7.divorced}</option>
                                        <option value='4'>{locale_wizard7.widowed}</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-sm-6 col-xs-12'>
                          <div className='sideform appLoanFrm leftInfo'>
                            <div className='personal_details clearfix'><h5><b>{locale_loaninfo.heading3}</b></h5></div>
                            <div className='personal_form appLoanFrm'>
                              <div className='row'>
                                <div className='col-sm-12 col-xs-12'>
                                  <div className='form-group row'>
                                    <label
                                      className='label-control col-md-4 col-xs-12'>{locale_loaninfo.purpose}</label>
                                    <div className='drop_down userInfoSelect col-md-8 col-xs-12'>
                                      <select ref='purspose'
                                        defaultValue={loaninformation ? loaninformation.loan_purpose : ''}
                                        key={loaninformation ? loaninformation.loan_purpose : ''}>
                                        <option value='1'>{locale_loaninfo.education_fees}</option>
                                        <option value='2'>{locale_loaninfo.wedding_expenses}</option>
                                        <option value='3'>{locale_loaninfo.medical_expenses}</option>
                                        <option value='4'>{locale_loaninfo.item_purchases}</option>
                                        <option value='5'>{locale_loaninfo.holiday_expenses}</option>
                                        <option value='6'>{locale_loaninfo.home_renovation}</option>
                                        <option value='7'>{locale_loaninfo.repaying_other_loans}</option>
                                        <option value='8'>{locale_loaninfo.other}</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className='col-sm-12 col-xs-12'>
                                  <div className='form-group row'>
                                    <label
                                      className='label-control  col-md-4 col-xs-12'>{locale_loaninfo.need_loan}</label>
                                    <div className='text_form  col-md-8 col-xs-12 userInfoInput'>
                                      <Field
                                        name='reason_loan'
                                        component={renderFields.renderTextArea}
                                        placeholder={locale_loaninfo.placeholder1}
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
                            <div className='personal_details clearfix'><h5><b>{locale_contactinfo.heading}</b></h5>
                            </div>
                            <div className='personal_form '>
                              <div className='row'>
                                <div className='col-sm-12 col-xs-12'>
                                  <div className='form-group row'>
                                    <label
                                      className='label-control col-md-4 col-xs-12'>{locale_contactinfo.email}</label>
                                    <div className='col-md-8 col-xs-12 userInfoInput'>
                                      <Field
                                        name='email'
                                        component={renderFields.renderTextbox}
                                        placeholder={locale_contactinfo.placeholder1}
                                        maxLength='255'
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className='col-sm-12 col-xs-12'>
                                  <div className='form-group row'>
                                    <label
                                      className='label-control col-md-4 col-xs-12'>{locale_contactinfo.address}</label>
                                    <div className='col-md-8 col-xs-12 userInfoInput'>
                                      <Field
                                        name='address'
                                        maxLength='200'
                                        component={renderFields.renderTextbox}
                                        placeholder={locale_contactinfo.placeholder6}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className='col-sm-12 col-xs-12'>
                                  <div className='form-group row'>
                                    <label
                                      className='label-control col-md-4 col-xs-12'>{locale_contactinfo.province}</label>
                                    <div className='drop_down userInfoSelect col-md-8 col-xs-12'>
                                      <Field
                                        name='province'
                                        component={renderSelectFields.renderSelectField}
                                        onChange={this.onProvinceChange.bind(this)}
                                        options={this.state.provinceOptions}
                                        placeholder={locale_contactinfo.placeholder2}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className='col-sm-12 col-xs-12'>
                                  <div className='form-group row'>
                                    <label
                                      className='label-control col-md-4 col-xs-12'>{locale_contactinfo.regency}</label>
                                    <div className='drop_down userInfoSelect col-md-8 col-xs-12'>
                                      <Field
                                        name='city'
                                        component={renderSelectFields.renderSelectField}
                                        onChange={this.onCityChange.bind(this)}
                                        options={this.state.citiesOptions}
                                        placeholder={locale_contactinfo.placeholder3}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className='col-sm-12 col-xs-12'>
                                  <div className='form-group row'>
                                    <label
                                      className='label-control col-md-4 col-xs-12'>{locale_contactinfo.district}</label>
                                    <div className='drop_down userInfoSelect col-md-8 col-xs-12'>
                                      <Field
                                        name='district'
                                        component={renderSelectFields.renderSelectField}
                                        onChange={this.ondistrictChange.bind(this)}
                                        options={this.state.districtOptions}
                                        placeholder={locale_contactinfo.placeholder4}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className='col-sm-12 col-xs-12'>
                                  <div className='form-group row'>
                                    <label className='label-control col-md-4 col-xs-12'>
                                      {locale_contactinfo.subdivision}
                                    </label>
                                    <div className='drop_down userInfoSelect col-md-8 col-xs-12 '>
                                      <Field
                                        name='subdivision'
                                        component={renderSelectFields.renderSelectField}
                                        onChange={this.onsubChange.bind(this)}
                                        options={this.state.subOptions}
                                        placeholder={locale_contactinfo.placeholder5}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className='col-sm-12 col-xs-12'>
                                  <div className='form-group row'>
                                    <label
                                      className='label-control col-md-4 col-xs-12'>{locale_contactinfo.postal}</label>
                                    <div className='col-md-8 col-xs-12 userInfoInput '>
                                      <Field
                                        name='zip'
                                        placeholder={locale_contactinfo.placeholder7}
                                        component={renderFields.renderZipField}
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
                            <button type='submit' className='btn btn-primary  prev_btn'>Submit</button>
                          </div>
                        </div>
                      </form>
                    </BlockUi>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.fullname) {
    errors.fullname = locale_wizard7.requirednameMessage;
  } else if (!/^[ A-Za-z0-9./']*$/i.test(values.fullname)) {
    errors.fullname = locale_wizard7.invalidCharacters;
  }
  if (!values.dob) {
    errors.dob = locale_wizard7.requireddobMessage;
  }
  if (!values.reason_loan) {
    errors.reason_loan = locale_loaninfo.validatereasonrequired;
  }
  if (!values.email) {
    errors.email = locale_contactinfo.requiredValidateEmail;
  }
  if (!values.province) {
    errors.province = locale_contactinfo.requiredValidateProvince;
  }
  if (!values.city) {
    errors.city = locale_contactinfo.requiredValidateCity;
  }
  if (!values.district) {
    errors.district = locale_contactinfo.requiredValidateDistrict;
  }
  if (!values.subdivision) {
    errors.subdivision = locale_contactinfo.requiredValidateSubdivision;
  }
  if (!values.address) {
    errors.address = locale_contactinfo.requiredValidateAddress;
  }
  if (!values.zip) {
    errors.zip = locale_contactinfo.postalRequired;
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = locale_contactinfo.emailValidation;
  }
  if (values.zip) {
    if (values.zip.length < 5) {
      errors.zip = locale_contactinfo.postalLengthvalidation;
    }
  }
  if (!/^[a-zA-Z0-9\s,'-/]*$/i.test(values.address)) {
    errors.address = locale_contactinfo.addressValidation;
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'userinfoform'
})(UserInfo);
