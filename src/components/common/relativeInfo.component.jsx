import React from 'react';
import ReactDOM from 'react-dom';
import * as api from '../../../tools/apiConfig';
import { Router, Link, browserHistory } from 'react-router';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import { Field, reduxForm, change } from 'redux-form';
import renderFields from '../redux-FormFields/renderCommonField';
import renderSelectFields from '../redux-FormFields/renderSelectField';
import axios from 'axios';
let locale = {};
class RelativeInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      relativeInfo: [{
        relative: {
          fullname: ''
        },
        spouse: {
          number: ''
        }
      }],
      provinces: null,
      cities: null,
      citiesOptions: [],
      districts: null,
      districtOptions: [],
      subdivisions: null,
      subOptions: [],
      provinceOptions: [],
      blocking: false
    }
    this.handleData = this.handleData.bind(this);
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData();
    this.getProvinces();
    window.scrollTo(0, 0);
  }
  componentWillMount() {
    this.setState({
      relativeInfo: ''
    })
  }
  handleData(data) {
    console.log(data)
    this.setState({
      relativeInfo: data
    })
  }
  getData() {
    var token = localStorage.getItem('token');
    var id = localStorage.getItem('id');
    $.ajax({
      type: 'GET',
      url: api.GET_RELATIVEINFO,
      dataType: 'json',
      contentType: 'application/json',
      data: {
        user_id: id
      },
      headers: {
        Authorization: 'Bearer ' + token
      },
      success: function (response) {
        if (response.status == 'UNAUTHORIZED') {
          toastr.error('Your session has been expired,plese login again to continue.')
          localStorage.clear();
          browserHistory.push('/Login')
        }
        else if (response.status == 'OK') {
          this.handleData(response.data);
          this.setState({
            blocking: false
          })
        }
        else if (response.status == 'INTERNAL_ERROR') {
          toastr.warning("Some internal error occured")
        }
      }.bind(this),
      error: function (response) {
        //localStorage.clear();
        toastr.error("Server error occured");
        //browserHistory.push('/Login')
      }.bind(this)
    });
  }
  saveData(data) {
    var token = localStorage.getItem('token');
    $.ajax({
      type: 'POST',
      url: api.SAVE_RELATIVEINFO,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      headers: {
        Authorization: 'Bearer ' + token
      },
      success: function (response) {
        if (response.status == 'UNAUTHORIZED') {
          this.props.setPercent(100);
          localStorage.clear();
          toastr.error('Your session has been expired,plese login again to continue.')
          browserHistory.push('/Login')
        }
        else if (response.status == 'OK') {
          debugger
          this.props.setPercent(100);
          localStorage.setItem('filled_rel_data', 1);
          // browserHistory.push('/loanapplication_status_1')
        }
        else if (response.status == 'INTERNAL_ERROR') {
          this.props.setPercent(100);
          toastr.error('Some internal error occured.')
        }
        else {
          toastr.info(response.message);
          this.props.setPercent(100);
        }
      }.bind(this),
      error: function (response) {
        this.props.setPercent(100);
        //localStorage.clear();
        toastr.error("Server error occured");
        //browserHistory.push('/Login')
      }.bind(this)
    });
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
    debugger
    if (values) {
      var data = {
        ktp: values.ktp.replace(/\s+/g, ''),
        relative_name: values.fullname,
        //relative_relation: ReactDOM.findDOMNode(this.refs.relative_relationship).value,
        relative_handphone: values.hand_phone.indexOf(' ') !== -1 ? values.hand_phone.replace(/\s+/g, '') : values.hand_phone,
        relative_homephone: values.home_phone.indexOf(' ') !== -1 ? values.home_phone.replace(/\s+/g, '') : values.home_phone,
        relative_address: values.home_address,
        region1: values.province,
        region2: values.regency,
        region3: values.district,
        region4: values.subdivision,
        relative_zip: values.zip,
        company_phone: values.company_phone.indexOf(' ') !== -1 ? values.company_phone.replace(/\s+/g, '') : values.company_phone,
        relationship: values.relationship,
        user_id: localStorage.getItem('id')
      }
      this.props.start();
      this.saveData(data)
    }

  }
  render() {
    const editData = this.state.relativeInfo;
    const { handleSubmit } = this.props;
    locale = this.props.locale.relativeinfo;
    return (
      <div id="sidebar_togg" className="nav-md loan_wizard sidebar_wrap">
        <div className="container body">
          <div className="main_container">
            <div className="right_col" role="main" >
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="wrapper">
                    <div className="emp_head">
                      <h2>Relative Info</h2>
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
                              <h5>Spouse Details</h5>
                              <div className="personal_form">
                                <div className="row">
                                  <div className="col-sm-12 col-xs-12">
                                    <div className="form-group">
                                      <label className="label-control">{locale.ktp}</label><br />
                                      {/*<input type="text" name="relative_KTP" placeholder="eg: KTP number" username="full_name" className="form-control" />*/}
                                      <Field
                                        name="ktp"
                                        component={renderFields.renderKTPField}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-12 col-xs-12">
                                    <div className="form-group">
                                      <label className="label-control">{locale.fullname}</label><br />
                                      <Field
                                        name="fullname"
                                        component={renderFields.renderTextbox}
                                        placeholder={locale.placeholder2}
                                      />
                                      {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Name" className="input_form" maskChar={null} />*/}
                                    </div>
                                  </div>
                                  <div className="col-sm-12 col-xs-12">
                                    <div className="form-group">
                                      <label className="label-control">{locale.handphone}</label><br />
                                      <Field
                                        ref={ref => this.field = ref}
                                        name="hand_phone"
                                        component={renderFields.renderPhoneField}
                                        placeholder={locale.placeholder3}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-12 col-xs-12">
                                    <div className="form-group">
                                      <label className="label-control">{locale.homephone}</label><br />
                                      <Field
                                        ref={ref => this.field = ref}
                                        name="home_phone"
                                        component={renderFields.renderPhoneField}
                                        placeholder={locale.placeholder4}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-12 col-xs-12">
                                    <div className="form-group">
                                      <label className="label-control">{locale.address}</label><br />
                                      {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Occupation" className="input_form" maskChar={null} />*/}
                                      <Field
                                        name="home_address"
                                        component={renderFields.renderTextArea}
                                        placeholder={locale.placeholder5}
                                      />
                                      <input type="text" ref="spouse_occupation" defaultValue={editData ? editData.spouse.occupation : ''} key={editData ? editData.spouse.occupation : ''} maxLength={45} name="spouse_occupation" placeholder="eg: Occupation" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-sm-12 col-xs-12">
                                    <div className="form-group">
                                      <label className="label-control">{locale.Province}</label><br />
                                      {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Province" className="input_form" maskChar={null} />*/}
                                      <Field
                                        name="province"
                                        component={renderSelectFields.renderSelectField}
                                        options={this.state.provinceOptions}
                                        onChange={this.onProvinceChange.bind(this)}
                                        placeholder={locale.placeholder6}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-12 col-xs-12">
                                    <div className="form-group">
                                      <label className="label-control">{locale.Regency}</label><br />
                                      {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Regency" className="input_form" maskChar={null} />*/}
                                      <Field
                                        name="regency"
                                        component={renderSelectFields.renderSelectField}
                                        options={this.state.citiesOptions}
                                        onChange={this.onCityChange.bind(this)}
                                        placeholder={locale.placeholder7}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-12 col-xs-12">
                                    <div className="form-group">
                                      <label className="label-control">{locale.District}</label><br />
                                      {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: District" className="input_form" maskChar={null} />*/}
                                      <Field
                                        name="district"
                                        component={renderSelectFields.renderSelectField}
                                        options={this.state.districtOptions}
                                        onChange={this.ondistrictChange.bind(this)}
                                        placeholder={locale.placeholder8}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-12 col-xs-12">
                                    <div className="form-group">
                                      <label className="label-control">{locale.Subdistrict}</label><br />
                                      <Field
                                        name="subdivision"
                                        component={renderSelectFields.renderSelectField}
                                        options={this.state.subOptions}
                                        onChange={this.onsubChange.bind(this)}
                                        placeholder={locale.placeholder9}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-12 col-xs-12">
                                    <div className="form-group">
                                      <label className="label-control">{locale.zip}</label><br />
                                      <Field
                                        name="zip"
                                        placeholder={locale.placeholder10}
                                        component={renderFields.renderZipField}
                                      />
                                      {/*<input type="text" name="spouse_zip" username="full_name" placeholder="eg: Zip code" className="form-control"></input>*/}
                                    </div>
                                  </div>
                                  <div className="col-sm-12 col-xs-12">
                                    <div className="form-group">
                                      <label className="label-control">{locale.companyphone}</label><br />
                                      <Field
                                        ref={ref => this.field = ref}
                                        name="company_phone"
                                        placeholder={locale.placeholder11}
                                        component={renderFields.renderPhoneField}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-12 col-xs-12">
                                    <div className="form-group">
                                      <label className="label-control">{locale.relationship}</label><br />
                                      {/*<InputElement type="text" mask="aaaaaaaaaaaaaaaaaaaa" placeholder="eg: Country" className="input_form" maskChar={null} />*/}
                                      <Field
                                        name="relationship"
                                        component={renderFields.renderTextbox}
                                        placeholder={locale.placeholder12}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="next_previous clearfix continue" >
                          <button type="submit" className="btn btn-primary pull-right next_btn ">Continue</button>
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
export default reduxForm({
  form: 'RelativeInfoForm',
  // validate,
})(RelativeInfo);