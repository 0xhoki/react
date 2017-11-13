import React from 'react';
import translate from 'counterpart';
import moment from 'moment';
import OfferedLoan from '../shared/offeredLoanSection.component.jsx';
import PropTypes from 'prop-types';
import {BorrowerAboutForm} from '../borrower-about-form/borrower-about-form.jsx';
import {connect} from 'react-redux';

class Step7ContainerComponent extends React.Component {
  static propTypes = {
    setPercent: PropTypes.func,
    initialize: PropTypes.func,
    start: PropTypes.func,
    handleSubmit: PropTypes.func,
    locale: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      startDate: moment().date(15).month(5).year(1990),
      dob: '',
      monthlyPayment: 0,
      totalPayment: 0,
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
      provinceOptions: []
    };
    this.getPersonalDetails = this.getPersonalDetails.bind(this);
    this.savePersonalDetails = this.savePersonalDetails.bind(this);
    this.formatKtpData = this.formatKtpData.bind(this);
  }

  locale = translate('wizards').wizard7;

  componentWillReceiveProps() {
    this.locale = translate('wizards').wizard7;
  }

  // handleChange(date) {
  //   if (date._d) {
  //     this.setState({
  //       startDate: date
  //     });
  //   } else {
  //     this.setState({
  //       startDate: ''
  //     });
  //   }
  // }
  //
  // formatKtpData(data) {
  //   if (data) {
  //     this.setState({
  //       details: data
  //     });
  //     let temp = data.birthdate;
  //     if (temp) {
  //       let format = new Date(temp);
  //       format.toUTCString();
  //       temp = format;
  //       let date = moment(temp, 'DD-MM-YYYY');
  //       this.setState({
  //         startDate: date
  //       });
  //     }
  //     const initData = {
  //       fullname: data.fullname ? data.fullname : '',
  //       dob: this.state.startDate ? this.state.startDate : ''
  //     };
  //     this.props.initialize(initData);
  //   } else {
  //     const initData = {
  //       fullname: '',
  //       dob: this.state.startDate ? this.state.startDate : ''
  //     };
  //     this.props.initialize(initData);
  //   }
  // }
  //
  // getPersonalDetails() {
  //   let token = localStorage.getItem('token');
  //   let id = localStorage.getItem('id');
  //   let ktp = localStorage.getItem('KTP');
  //   if (ktp) {
  //     ktp = ktp.replace(/ /g, '');
  //   }
  //   $.ajax({
  //     type: 'GET',
  //     url: api.GET_KTP_DATA,
  //     dataType: 'json',
  //     contentType: 'application/json',
  //     data: {
  //       user_id: id,
  //       ktp: ktp
  //     },
  //     headers: {
  //       Authorization: 'Bearer ' + token
  //     },
  //     success: (response) => {
  //       this.setState({
  //         blocking: false
  //       });
  //       if (response.status === 'UNAUTHORIZED') {
  //         toastr.error(locale.sessionError);
  //         localStorage.clear();
  //         browserHistory.push('/Login');
  //       } else if (response.status === 'OK') {
  //         this.formatKtpData(response.data);
  //       } else if (response.status === 'INTERNAL_ERROR') {
  //         toastr.error(locale.internalError);
  //       }
  //     },
  //     error: () => {
  //       localStorage.clear();
  //       toastr.error(locale.serverError);
  //       browserHistory.push('/Login');
  //     }
  //   });
  // }
  //
  // savePersonalDetails(data) {
  //   let token = localStorage.getItem('token');
  //   data.user_id = localStorage.getItem('id');
  //   $.ajax({
  //     type: 'POST',
  //     url: api.SAVE_PERSONALDETAILS,
  //     dataType: 'json',
  //     contentType: 'application/json',
  //     data: JSON.stringify(data),
  //     headers: {
  //       Authorization: 'Bearer ' + token
  //     },
  //     success: function (response) {
  //       if (response.status === 'UNAUTHORIZED') {
  //         this.props.setPercent(100);
  //         localStorage.clear();
  //         toastr.error(locale.serverError);
  //         browserHistory.push('/Login');
  //       } else if (response.status === 'OK') {
  //         this.props.setPercent(100);
  //         browserHistory.push('/contactinfo');
  //       } else if (response.status === 'INTERNAL_ERROR') {
  //         this.props.setPercent(100);
  //         toastr.error(locale.internalError);
  //       }
  //     }.bind(this),
  //     error: function () {
  //       localStorage.clear();
  //       this.props.setPercent(100);
  //       toastr.error(locale.serverError);
  //       browserHistory.push('/Login');
  //     }.bind(this)
  //   });
  // }
  //
  // submitHandler(values) {
  //   let dob = values.dob;
  //   let temp = new Date(dob);
  //   temp.toUTCString();
  //   let ktp = localStorage.getItem('KTP');
  //   let data = {
  //     fullname: values.fullname,
  //     birthday: temp,
  //     number: ktp,
  //     gender: ReactDOM.findDOMNode(this.refs.gender).value,
  //     marital_status: ReactDOM.findDOMNode(this.refs.maritalstatus).value
  //   };
  //   this.props.start();
  //   this.savePersonalDetails(data);
  // }

  render() {
    return (
      <div className='nav-md loan_wizard step7'>
        <div className='main_container'>
          <div className='container'>
            <div className='right_col' role='main'>
              <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12'>
                  <div className='wrapper row'>
                    <div className='col-sm-12 col-xs-12'>
                      <h2 className='offered_title'>{this.locale.heading1}</h2>
                    </div>
                    <div className='col-sm-8 col-xs-12'>
                      <OfferedLoan/>
                    </div>
                    <BorrowerAboutForm/>
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

export const Step7Container = connect(({language, borrower}) => {
  return {language, borrower};
})(Step7ContainerComponent);
