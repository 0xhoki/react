import React from 'react';
import {Link, browserHistory} from 'react-router';
import * as api from '../../../tools/apiConfig';
import InputElement from 'react-input-mask';
import axios from 'axios';
import PropTypes from 'prop-types';
import translate from 'counterpart';

import {Field, reduxForm} from 'redux-form';

let locale = {};
let time = 0;
let counter = setInterval(function () {
  timer();
}, 1000);

function timer() {
  time += 1;
  if (time === 180) {
    clearInterval(counter);
  }
}

class Wizard5 extends React.Component {
  static propTypes = {
    locale: PropTypes.object,
    initialize: PropTypes.func,
    handleSubmit: PropTypes.func,
    start: PropTypes.func,
    setPercent: PropTypes.func
  };

  locale = translate('wizards').wizard5;

  componentWillReceiveProps() {
    this.locale = translate('wizards').wizard5;
  }

  constructor(props) {
    super(props);
    this.state = {
      clickCount: 1
    };
    this.verification = this.verification.bind(this);
    this.resendPin = this.resendPin.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    clearInterval(counter);
    time = 0;
    counter = setInterval(function () {
      timer();
    }, 1000);
    // validation.FormValidationMd.init();
    this.props.initialize(
      {
        pin: ''
      });
  }

  // renderPinField(field) {
  //   const {meta: {touched, error}} = field;
  //   const className = `form-group nombs wizard5_input ${touched && error ? 'has-danger' : ''} `;
  //   return (
  //     <div className={className}>
  //       <InputElement
  //         {...field.input}
  //         mask='999999'
  //         className='form-control'
  //         maskChar={null}
  //       />
  //       <div className='clearfix six'/>
  //       <div className='help-block help-block-error'>
  //         {touched ? error : ''}
  //       </div>
  //     </div>
  //   );
  // }

  // resendPin() {
  //   let phonenum = localStorage.getItem('phonenum');
  //   if (phonenum) {
  //     this.props.start();
  //     // const formattedValue = fieldDiv.querySelector('input').value;
  //     let temp = phonenum;
  //     const data = {
  //       phoneno: temp.replace(/ /g, ''),
  //       user_id: localStorage.getItem('id')
  //     };
  //     const token = localStorage.getItem('token');
  //     return axios.post(api.REGISTER_PHONE, JSON.stringify(data), {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: 'Bearer ' + token
  //       }
  //     }).then(function (response) {
  //       if (response.data.status === 'NOT_FOUND') {
  //         toastr.error(locale.validatePhone);
  //       } else if (response.data.status === 'UNAUTHORIZED') {
  //         localStorage.clear();
  //         toastr.error(locale.sessionError);
  //         browserHistory.push('/Login');
  //       } else if (response.data.status === 'OK') {
  //         if (response.data.data.is_verified === true) {
  //           toastr.info(locale.alreadyVerified);
  //           localStorage.setItem('phonenum', phonenum);
  //           browserHistory.push('/wizard6');
  //         } else {
  //           toastr.info(locale.pinNotification);
  //           localStorage.setItem('phonenum', phonenum);
  //         }
  //       } else {
  //         toastr.error(locale.internalError);
  //       }
  //       this.props.setPercent(100);
  //     }.bind(this))
  //       .catch(function () {
  //         // localStorage.clear();
  //         toastr.error(locale.serverError);
  //         // browserHistory.push('/Login')
  //         this.props.setPercent(100);
  //       }.bind(this));
  //   }
  // }

  verification(code) {
    let token = localStorage.getItem('token');
    let data = {
      phoneno: localStorage.getItem('phonenum').replace(/ /g, ''),
      user_id: localStorage.getItem('id'),
      code: code
    };
    $.ajax({
      type: 'POST',
      url: api.VERIFY_PHONE,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      headers: {
        Authorization: 'Bearer ' + token
      },
      success: function (response) {
        if (response.status === 'UNAUTHORIZED') {
          this.props.setPercent(100);
          localStorage.clear();
          toastr.error(locale.sessionError);
          browserHistory.push('/Login');
        } else if (response.status === 'OK') {
          this.props.setPercent(100);
          toastr.success(locale.successVerification);
          browserHistory.push('/wizard/step-6');
        } else if (response.status === 'INTERNAL_ERROR') {
          this.props.setPercent(100);
          toastr.error(locale.incorrectPin);
        } else {
          toastr.error(locale.internalError);
          this.props.setPercent(100);
        }
      }.bind(this),
      error: function () {
        localStorage.clear();
        toastr.error(locale.serverError);
        browserHistory.push('/Login');
        this.props.setPercent(100);
      }.bind(this)
    });
  }

  submitHandler(values) {
    if (values.pin) {
      let code = values.pin;
      this.verification(code);
      this.props.start();
    }
  }

  clickHandler() {
    let count = this.state.clickCount;
    if (count === 1) {
      this.setState({
        clickCount: count + 1
      });
      if (time >= 30) {
        this.resendPin();
        clearInterval(counter);
        time = 0;
        counter = setInterval(function () {
          timer();
        }, 1000);
      } else {
        toastr.error(locale.pinNotification2);
      }
    } else if (count === 2) {
      this.setState({
        clickCount: count + 1
      });
      if (time >= 30) {
        this.resendPin();
        clearInterval(counter);
        time = 0;
        counter = setInterval(function () {
          timer();
        }, 1000);
      } else {
        toastr.error(locale.pinNotification2);
      }
    } else if (time === 180) {
      this.resendPin();
      clearInterval(counter);
      time = 0;
      counter = setInterval(function () {
        timer();
      }, 1000);
    } else if (time < 180) {
      toastr.error(locale.pinNotification3);
    }
  }

  render() {
    const {handleSubmit} = this.props;
    const salary = localStorage.sal;
    const KTP = localStorage.KTP;
    const phonenum = localStorage.phonenum;
    const status = localStorage.getItem('employ');
    return (
      <div className='nav-md loan_wizard step5'>
        <div className='main_container'>
          <div className='container'>
            <div className='right_col' role='main'>
              <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12'>
                  <div className='wrapperr row primary_step'>
                    <div className='col-sm-12 col-xs12'>
                      <div className='completed_fileds'>
                        <div className='completed'><Link to='/wizard' className='edit_link'>{this.locale.heading1}
                          <span> {KTP}</span></Link></div>
                        <div className='completed'><Link to='/wizard/step-2' className='edit_link'>{this.locale.heading2}
                          <span>RP {salary} </span></Link></div>
                        <div className='completed'><Link to='/wizard/step-3' className='edit_link'>{this.locale.heading3}
                          <span>{status} </span></Link></div>
                        <div className='completed'><Link to='/wizard/step-4' className='edit_link'>{this.locale.heading4}
                          <span> {phonenum} </span></Link></div>
                      </div>
                    </div>
                  </div>
                  <div className='wrapper row'>
                    <div className='col-sm-8 col-xs-12'>
                      <form onSubmit={handleSubmit(this.submitHandler)}>
                        <div className='process  active_field'>
                          <div className='active_lable'>
                            <h3>{this.locale.label}</h3>
                          </div>
                          <div className='fields clearfix'>
                            <div className='four_group'>
                            </div>
                            <Field
                              ref={(ref) => {
                                this.field = ref;
                              }}
                              name='pin'
                              component={this.renderPinField}
                            />
                            <div className='wrapperr'><span className='notes resend'>
                              <a
                                href='javascript:void(0)'
                                onClick={this.clickHandler}>{this.locale.resend_pin}</a></span>
                            </div>
                          </div>
                        </div>
                        <div className='next_previous clearfix'>
                          <button
                            type='submit'
                            className='btn btn-primary pull-right next_btn'>{this.locale.next}</button>
                        </div>
                      </form>
                    </div>
                    <div className='col-sm-4 col-xs-12 right_notifi step_notifi'>
                      <h4>{this.locale.question}</h4>
                      <p>{this.locale.answer}</p>
                    </div>
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
  if (!values.pin) {
    errors.pin = locale.requiredValidate;
  } else if (values.pin.length < 6) {
    errors.pin = locale.lengthValidate;
  }
  return errors;
}

export default reduxForm({
  form: 'wizard5Form',
  validate
})(Wizard5);
