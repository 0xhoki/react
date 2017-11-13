import React from 'react';
import { Link, browserHistory } from 'react-router';
import * as api from '../../../tools/apiConfig';
import moment from 'moment';
import ReactDOM from 'react-dom';
import { Field, reduxForm, change } from 'redux-form';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import renderFields from '../redux-FormFields/renderCommonField';
import renderSelectFields from '../redux-FormFields/renderSelectField';
import renderDatepickerField from '../redux-FormFields/renderDatepickerField';
import axios from 'axios';
import SubmissionError from 'redux-form/lib/SubmissionError';
let locale = {};
class EmpInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment().subtract(18, "years"),
      emp_detail: {},
      blocking: true,
      provinces: null,
      cities: null,
      citiesOptions: [],
      districts: null,
      districtOptions: [],
      subdivisions: null,
      subOptions: [],
      provinceOptions: []
    }
  }
  handleChange(date) {
    this.setState({
      startDate: date,
      // dob:this.state.startDate-
    });
  }
  handleValue(data) {
    debugger
    let temp = data.emp_detail.employed_since;
    if (temp) {
      let format = new Date(temp)
      format.toUTCString();
      temp = format;
      let date = moment(temp, "DD-MM-YYYY");
      this.setState({
        startDate: date,
      })
    }
    if (data.address && data.emp_detail) {
      let initData = {
        company_name: data.emp_detail.company_name,
        company_phone: data.emp_detail.company_phone_number,
        company_address: data.address.street,
        province: data.address.region1,
        regency: data.address.region2,
        district: data.address.region3,
        subdivision: data.address.region4,
        zip: data.address.zip,
        manager_name: data.emp_detail.manager_name,
        employed_since: data.emp_detail.employed_since,
        job_title: data.emp_detail.job_title,
        monthly_income: data.emp_detail.monthlyIncome
      }
      this.getCities(initData.province ? initData.province.value : '')
      this.getDistricts(initData.regency ? initData.regency.value : '')
      this.getSubdivisions(initData.district ? initData.district.value : '')
      this.setState({
        emp_detail: {
          occupation_type: data.emp_detail.occupation_type,
          company_sector: data.emp_detail.company_sector,
          employment_status: data.emp_detail.employmentStatus
        }
      })
      this.props.initialize(initData);
      this.setState({
        blocking: false
      })
    }
    // this.setState({
    //   empinfo: data,
    //   monthlybaseincome: data.emp_detail.monthly_income_base,
    //   monthlyotherincome: data.emp_detail.monthly_income_other
    // })
    // var temp = data.emp_detail.employed_since;
    // var abc = new Date(temp)
    // abc.toUTCString();
    // temp = abc;
    // var date = moment(temp, "YYYY-MM-DD");
    // this.setState({
    //   startDate: date,
    // })
    //$("#emp_since").val(formatedDate);
  }
  componentDidMount() {
    this.getProvinces()
    this.getData();
    window.scrollTo(0, 0);
    //validation.FormValidationMd.init();
  }
  getData() {
    var token = localStorage.getItem('token');
    var id = localStorage.getItem('id');
    $.ajax({
      type: 'GET',
      url: api.GET_EMPINFO,
      dataType: 'json',
      contentType: 'application/json',
      data: {
        user_id: id
      },
      headers: {
        Authorization: 'Bearer ' + token
      },
      success: function (response) {
        debugger
        if (response.status == 'UNAUTHORIZED') {
          toastr.error('Your session has been expired,plese login again to continue.')
          localStorage.clear();
          browserHistory.push('/Login')
        }
        else if (response.status == 'OK') {
          console.log(response)
          if (response.data) {
            this.handleValue(response.data);
          }
        }
        else if (response.status == 'INTERNAL_ERROR') {
          toastr.warning("Some internal error occured")
        }
      }.bind(this),
      error: function (response) {
        debugger
        localStorage.clear();
        toastr.error("Server error occured");
        browserHistory.push('/Login')
      }.bind(this)
    });
  }
  saveEmploymentinfo(data) {
    debugger
    var token = localStorage.getItem('token');
    return axios.post(api.SAVE_EMPINFO, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    }).then(function (response) {
      debugger
      this.props.setPercent(100);
      if (response.data.zip === false) {
        throw new SubmissionError({
          zip: locale.postalRemoteValidate,
        });
      }
      else if (response.data.phone === false) {
        throw new SubmissionError({
          company_phone: locale.validatePhone,
        });
      }
      if (response.data.status == 'UNAUTHORIZED') {
        toastr.error(locale.sessionError)
        browserHistory.push('/Login')
      }
      else if (response.data.status == 'OK') {
        //browserHistory.push('')
      }
      else {
        toastr.error(locale.internalError);
      }
    }.bind(this))
      .catch(function (error) {
        if (error.errors) {
          if (error.errors.zip) {
            this.props.setPercent(100);
            throw new SubmissionError({
              zip: locale.postalRemoteValidate,
            });
          }
          if (error.errors.phone) {
            this.props.setPercent(100);
            throw new SubmissionError({
              company_phone: locale.validatePhone,
            });
          }
        }
        else {
          this.props.setPercent(100);
          //localStorage.clear();
          toastr.error(locale.serverError);
          //browserHistory.push('/Login')
        }
        this.props.setPercent(100);
      }.bind(this));
  }
  getProvinces() {
    axios.get(api.GET_PROVINCES).then((response) => {
      this.setState({
        provinceOptions: response.data.data
      })
    })
  }
  getCities(value) {
    let id = value ? value : null;
    if (id != null) {
      axios.get(api.GET_CITIES, { params: { id: id } }).then((response) => {
        this.setState({
          citiesOptions: response.data.data
        })
      })
    }
    else {
      return { options: [] }
    }

  }
  getDistricts(value) {
    let id = value ? value : null;
    if (id != null) {
      axios.get(api.GET_DISTRICTS, { params: { id: id } }).then((response) => {
        this.setState({
          districtOptions: response.data.data
        })
      })
    }
    else {
      return { options: [] }
    }
  }
  getSubdivisions(value) {
    let id = value ? value : null;
    if (id != null) {
      axios.get(api.GET_SUBS, { params: { id: id } }).then((response) => {
        this.setState({
          subOptions: response.data.data
        })
      })
    }
    else {
      return { options: [] }
    }
  }
  onProvinceChange(input) {
    if (input.value) {
      let data = {
        value: input.value,
        label: input.label
      }
      this.setState({
        provinces: data,
        cities: null,
        districts: null,
        subdivisions: null
      })
      this.props.dispatch(change('ContactInfoForm', 'city', ''));
      this.props.dispatch(change('ContactInfoForm', 'district', ''));
      this.props.dispatch(change('ContactInfoForm', 'subdivision', ''));
      // let initData ={
      //   cities: null,
      //   districts: null,
      //   subdivisions: null
      // }
      // this.props.initialize(initData);
      this.getCities(input.value)
    }
  }
  onCityChange(input) {
    if (input.value) {
      let data = {
        value: input.value,
        label: input.label
      }
      this.setState({
        cities: data,
        districts: null,
        subdivisions: null
      })
      this.props.dispatch(change('ContactInfoForm', 'district', ''));
      this.props.dispatch(change('ContactInfoForm', 'subdivision', ''));
      this.getDistricts(input.value)
    }
  }
  ondistrictChange(input) {
    if (input.value) {
      let data = {
        value: input.value,
        label: input.label
      }
      this.setState({
        districts: data,
        subdivisions: null
      })
      this.props.dispatch(change('ContactInfoForm', 'subdivision', ''));
      this.getSubdivisions(input.value)
    }
  }
  onsubChange(input) {
    if (input.value) {
      let data = {
        value: input.value,
        label: input.label
      }
      this.setState({
        subdivisions: data
      })
    }
  }
  submitHandler(values) {
    let employee_since = values.employee_since;
    employee_since = new Date(employee_since)
    employee_since.toUTCString();
    if (values) {
      var data = {
        occupation_type: ReactDOM.findDOMNode(this.refs.occupation_type).value,
        company_name: values.company_name,
        company_sector: ReactDOM.findDOMNode(this.refs.company_sector).value,
        employment_status: ReactDOM.findDOMNode(this.refs.employment_status).value,
        company_phone_number: values.company_phone.indexOf(' ') !== -1 ? values.company_phone.replace(/\s+/g, '') : values.company_phone,
        company_address: values.company_address,
        region1: values.province,
        region2: values.regency,
        region3: values.district,
        region4: values.subdivision,
        zip: values.zip,
        manager_name: values.manager_name,
        employed_since: employee_since,
        job_title: values.job_title,
        monthly_income: values.monthly_income.toString().indexOf('.') !== -1 ? values.monthly_income.replace(/\.+/g, '') : values.monthly_income,
        user_id: localStorage.getItem('id'),
      }
      this.props.start();
      return this.saveEmploymentinfo(data)
    }
  }
  render() {
    const editData = this.state.emp_detail;
    debugger
    const { handleSubmit } = this.props;
    locale = this.props.locale.empinfo;
    return (
      <div className="container body loan_wizard">
        <div className="main_container">
          <div className="right_col" role="main" >
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="wrapper">
                  <div className="emp_head">
                    <h2>Employment Info</h2>
                  </div>
                  <div className="clearfix row">
                    <div className="col-sm-12 col-xs12 right_notifi">
                      <div className="sideform personal_note">
                        <div className=""> <span className="blue_notes">In order to proceed with the loan, please verify and complete the following information</span> </div>
                      </div>
                    </div>
                  </div>
                  <BlockUi tag="div" blocking={this.state.blocking}>

                    <form onSubmit={handleSubmit(this.submitHandler.bind(this))}>
                      <div className="personal_overlay employment_overlay clearfix">
                        <div className="row">
                          <div className="col-sm-12 col-xs-12 personal_details">
                            <h5>Company Basic Details</h5>
                            <div className="personal_form">
                              <div className="row">
                                {/*<div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Employment status</label>
                                    <div className="fields clearfix">
                                      <select>
                                        <option value="Permanant">Permanant</option>
                                        <option value="Contract">Contract</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>*/}
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Occupation Type</label> <br />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Occupation" className="input_form" maskChar={null} />*/}
                                    <select ref="occupation_type" defaultValue={editData ? editData.occupation_type : ''} key={editData ? editData.occupation_type : ''}>
                                      <option value="Private Company Employee">{locale.private}</option>
                                      <option value="National SOE Employee">{locale.national}</option>
                                      <option value="Regional SOE Employee">{locale.regional}</option>
                                      <option value="Civil Servant">{locale.civil}</option>
                                      <option value="Army">{locale.Army}</option>
                                      <option value="Police">{locale.Police}</option>
                                      <option value="Professional">{locale.Professional}</option>
                                      <option value="Trading">{locale.Trading}</option>
                                      <option value="Not Working">{locale.not_working}</option>
                                      <option value="Housewife">{locale.Housewife}</option>
                                      <option value="Student">{locale.Student}</option>
                                      <option value="Pensioner">{locale.Pensioner}</option>
                                      <option value="Other">{locale.Other}</option>
                                    </select>
                                    {/* <input type="text" name="occupation" maxLength={45} defaultValue={editData ? editData.emp_detail.occupation : ''} key={editData ? editData.emp_detail.occupation : ''} ref="occupation" placeholder="eg: Occupation" className="form-control" /> */}
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">Employment Status</label> <br />
                                    <select defaultValue={editData ? editData.employment_status : ""} key={editData ? editData.employment_status : ""} ref="employment_status">
                                      <option value="1">Permanent</option>
                                      <option value="2">Contract</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">{locale.employer_name}</label><br />
                                    {/* <input type="text" name="companyname" maxLength={45} defaultValue={editData ? editData.emp_detail.company_name : ''} key={editData ? editData.emp_detail.company_name : ''} ref="companyname" placeholder="eg: Company name" className="form-control" /> */}
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Company name" className="input_form" maskChar={null}/>*/}
                                    <Field
                                      name="company_name"
                                      component={renderFields.renderTextbox}
                                      placeholder="companyname"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">{locale.employer_sector}</label><br />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Company sector" className="input_form" maskChar={null} />*/}
                                    {/* <input type="text" name="companysector" maxLength={45} ref="companysector" defaultValue={editData ? editData.emp_detail.company_sector : ''} key={editData ? editData.emp_detail.company_sector : ''} placeholder="eg: Company sector" className="form-control" /> */}
                                    <select ref="company_sector" defaultValue={editData ? editData.company_sector : ''} key={editData ? editData.company_sector : ''}>
                                      <option value="Trading">{locale.Trading}</option>
                                      <option value="Banking">{locale.Banking}</option>
                                      <option value="Industrial">{locale.Industrial}</option>
                                      <option value="Property">{locale.Property}</option>
                                      <option value="Mining">{locale.Mining}</option>
                                      <option value="Education">{locale.Education}</option>
                                      <option value="Telecom">{locale.Telecom}</option>
                                      <option value="Tourism">{locale.Tourism}</option>
                                      <option value="Transportation">{locale.Transportation}</option>
                                      <option value="Government">{locale.Government}</option>
                                      <option value="Specialist">{locale.Specialist}</option>
                                      <option value="Plantation">{locale.Plantation}</option>
                                      <option value="Army_Police">{locale.Army_Police}</option>
                                      <option value="Legal">{locale.Legal}</option>
                                      <option value="Other">{locale.Other}</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">{locale.company_phone}</label><br />
                                    <Field
                                      ref={ref => this.field = ref}
                                      name="company_phone"
                                      component={renderFields.renderPhoneField}
                                    />
                                    {/* <InputElement ref="companyphone" id="companyphone" maxLength={45} defaultValue={editData ? editData.emp_detail.company_phone_number : ''} placeholder="eg: Company phone" key={editData ? editData.emp_detail.company_phone_number : ''} name="companyphone" mask="+6\2 999 9999 99999" className="form-control" maskChar={null} /> */}
                                    {/*<input type="text" name="companyphone" ref="companyphone" username="full_name" placeholder="eg: Company phone" className="form-control"></input>*/}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-xs-12 personal_details">
                            <h5>Company Address Details</h5>
                            <div className="personal_form">
                              <div className="row">
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">{locale.Province}</label><br />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Province" className="input_form" maskChar={null}/>*/}
                                    {/* <input type="text" maxLength={45} name="companyprovince" defaultValue={editData ? editData.address.region2 : ''} key={editData ? editData.address.region2 : ''} placeholder="eg: Province" ref="companyprovince" className="form-control" /> */}
                                    <Field
                                      name="province"
                                      component={renderSelectFields.renderSelectField}
                                      onChange={this.onProvinceChange.bind(this)}
                                      options={this.state.provinceOptions}
                                      placeholder={locale.placeholder4}
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">{locale.Regency}</label><br />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Regency" className="input_form" maskChar={null} />*/}
                                    {/* <input type="text" maxLength={45} name="companyregency" defaultValue={editData ? editData.address.region3 : ''} key={editData ? editData.address.region3 : ''} ref="companyregency" placeholder="eg: Regency" className="form-control" /> */}
                                    <Field
                                      name="regency"
                                      component={renderSelectFields.renderSelectField}
                                      onChange={this.onCityChange.bind(this)}
                                      options={this.state.citiesOptions}
                                      placeholder={locale.placeholder5}
                                    />
                                  </div>
                                </div>

                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">{locale.District}</label><br />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: District" className="input_form" maskChar={null} />*/}
                                    {/* <input type="text" maxLength={45} name="companydistrict" defaultValue={editData ? editData.address.region4 : ''} key={editData ? editData.address.region4 : ''} ref="companydistrict" placeholder="eg: District" className="form-control" /> */}
                                    <Field
                                      name="district"
                                      component={renderSelectFields.renderSelectField}
                                      onChange={this.ondistrictChange.bind(this)}
                                      options={this.state.districtOptions}
                                      placeholder={locale.placeholder6}
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">{locale.Subdistrict}</label><br />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Regency" className="input_form" maskChar={null} />*/}
                                    {/* <input type="text" maxLength={45} name="companyregency" defaultValue={editData ? editData.address.region3 : ''} key={editData ? editData.address.region3 : ''} ref="companyregency" placeholder="eg: Regency" className="form-control" /> */}
                                    <Field
                                      name="subdivision"
                                      component={renderSelectFields.renderSelectField}
                                      onChange={this.onsubChange.bind(this)}
                                      options={this.state.subOptions}
                                      placeholder={locale.placeholder7}
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">{locale.zip}</label><br />
                                    {/* <InputElement id="postal_code" ref="companyzip" minLength={5} maxLength={5} placeholder="eg: 00000" name="postalcode" defaultValue={editData ? editData.address.zip : ''} key={editData ? editData.address.zip : ''} className="form-control" mask="99999" maskChar={null} /> */}
                                    {/*<input type="text" name="zip" maxLength={6} username="full_name" ref="zip" placeholder="eg: Zip code" className="form-control"></input>*/}
                                    <Field
                                      name="zip"
                                      placeholder={locale.placeholder8}
                                      component={renderFields.renderZipField}
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">{locale.company_address}</label><br />
                                    {/* <input type="text" maxLength={45} name="companyaddress" defaultValue={editData ? editData.address.street : ''} key={editData ? editData.address.street : ''} ref="companyaddress" placeholder="eg: Company address" className="form-control"></input> */}
                                    <Field
                                      name="company_address"
                                      component={renderFields.renderTextArea}
                                      placeholder={locale.placeholder9}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-xs-12 personal_details">
                            <h5>Company Other Details</h5>
                            <div className="personal_form">
                              <div className="row">
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">{locale.monthly_income}</label><br />
                                    <Field
                                      component={renderFields.renderSalaryField}
                                      ref={ref => this.field = ref}
                                      placeholder={locale.placeholder10}
                                      name="monthly_income"
                                      onChange={(e, value) => {
                                        const formattedValue = e.target.value; // $222,3
                                        //value will be non formatted value ie, 2223
                                        this.setState({ income: value })
                                      }}
                                    />
                                    {/*<input type="text" name="monthlybaseincome" username="full_name" ref="monthlybaseincome" placeholder="eg: monthly income" className="form-control"></input>*/}

                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">{locale.manager_name}</label><br />
                                    {/* <input type="text" maxLength={45} name="companymanagername" defaultValue={editData ? editData.emp_detail.manager_name : ''} key={editData ? editData.emp_detail.manager_name : ''} placeholder="eg: Company manager name" ref="companymanagername" className="form-control" /> */}
                                    <Field
                                      name="manager_name"
                                      component={renderFields.renderTextbox}
                                      placeholder={locale.placeholder11}
                                    />
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Company manager name" className="input_form" maskChar={null} />*/}
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">{locale.employee_since}</label><br />
                                    {/*<input type="number" name="employeesince" username="full_name" ref="employeesince" placeholder="eg: Employee since" className="form-control"></input>*/}
                                    <Field
                                      name="employee_since"
                                      component={renderDatepickerField.renderdatePicker}
                                      dateFormat="DD-MM-YYYY"
                                      maxDate={moment().subtract(18, "years")}
                                      placeholder={locale.placeholder12}
                                      selected={this.state.startDate ? this.state.startDate : null}
                                      onChange={this.handleChange.bind(this)}
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-12 col-xs-12">
                                  <div className="form-group">
                                    <label className="label-control">{locale.job_title}</label><br />
                                    <Field
                                      name="job_title"
                                      component={renderFields.renderTextbox}
                                      placeholder={locale.placeholder13}
                                      maxLength="255"
                                    />
                                    {/* <input type="text" maxLength={45} name="jobtitle" defaultValue={editData ? editData.emp_detail.job_title : ''} key={editData ? editData.emp_detail.job_title : ''} placeholder="eg: Title of your Job" ref="jobtitle" className="form-control" /> */}
                                    {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Title of your Job" className="input_form" maskChar={null} />*/}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="next_previous clearfix continue" >
                        {/*<Link to="relativeinfo">*/}
                        <button type="submit" className="btn btn-primary pull-right next_btn ">Continue</button>
                        {/*</Link>*/}
                      </div>
                    </form>
                  </BlockUi>

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
  if (!values.email) {
    errors.email = locale.requiredValidateEmail;
  }
  if (!values.province) {
    errors.province = locale.requiredValidateProvince;
  }
  if (!values.regency) {
    errors.city = locale.requiredValidateCity;
  }
  if (!values.district) {
    errors.district = locale.requiredValidateDistrict;
  }
  if (!values.subdivision) {
    errors.subdivision = locale.requiredValidateSubdivision;
  }
  if (!values.company_address) {
    errors.address = locale.requiredValidateAddress;
  }
  if (!values.zip) {
    errors.zip = locale.postalRequired;
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = locale.emailValidation;
  }
  if (values.zip) {
    if (values.zip.length < 5) {
      errors.zip = locale.postalLengthvalidation
    }
  }
  if (!/^[a-zA-Z0-9\s,'-/]*$/i.test(values.address)) {
    errors.address = locale.addressValidation;
  }
  return errors;
}
export default reduxForm({
  form: 'EmpInfoForm',
  // validate,
})(EmpInfo);