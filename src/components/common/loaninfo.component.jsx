import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Link} from 'react-router';
import * as api from '../../../tools/apiConfig';
import OfferedLoan from '../shared/offeredLoanSection.component.jsx';
import {Field, reduxForm} from 'redux-form';
import renderFields from '../redux-FormFields/renderCommonField';
import PropTypes from 'prop-types';

let locale = {};

class LoanInfo extends React.Component {
  static propTypes = {
    locale: PropTypes.object,
    initialize: PropTypes.func,
    setPercent: PropTypes.func,
    handleSubmit: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      months: 0,
      monthlyPayment: 0,
      totalPayment: 0,
      loaninfo: {},
      selectValue: '1'
    };
    this.saveLoanInfo = this.saveLoanInfo.bind(this);
    this.getLoanInfo = this.getLoanInfo.bind(this);
  }

  changeHandler() {
    this.calculateAmount();
  }

  componentDidMount() {
    this.getLoanInfo();
  }

  saveLoanInfo(data) {
    let token = localStorage.getItem('token');
    data.user_id = localStorage.getItem('id');
    $.ajax({
      type: 'POST',
      url: api.SAVE_LOANINFO,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      headers: {
        Authorization: 'Bearer ' + token
      },
      success: (response) => {
        if (response.status === 'UNAUTHORIZED') {
          this.props.setPercent(100);
          toastr.error(locale.sessionError);
          browserHistory.push('/login');
        } else if (response.status === 'OK') {
          this.props.setPercent(100);
          browserHistory.push('/user-info');
        } else if (response.status === 'INTERNAL_ERROR') {
          toastr.error(locale.internalError);
        } else {
          toastr.info(locale.internalError);
          this.props.setPercent(100);
        }
      },
      error: () => {
        toastr.error(locale.serverError);
        browserHistory.push('/login');
        this.props.setPercent(100);
      }
    });
  }

  handleData(data) {
    this.setState({
      loaninfo: data
    });
    const initData = {
      reason_loan: this.state.loaninfo.details_needs
    };
    this.props.initialize(initData);
  }

  initData() {
    const initData = {
      reason_loan: ''
    };
    this.props.initialize(initData);
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
          toastr.error(locale.sessionError);
          browserHistory.push('/login');
        } else if (response.status === 'NOT_FOUND') {
          this.initData();
        } else if (response.status === 'OK') {
          let temp = response.data;
          if (temp) {
            this.handleData(temp);
          }
        } else {
          toastr.error(locale.internalError);
        }
      },
      error: () => {
        toastr.error(locale.serverError);
        browserHistory.push('/login');
        this.props.setPercent(100);
      }
    });
  }

  submitHandler(values) {
    const loan_amount = localStorage.getItem('tenor_amt');
    const loan_tenor = localStorage.getItem('tenor_mon');
    const monthly_installment = localStorage.getItem('installment');
    const fee_upfront = localStorage.getItem('fee_upfront');
    let data = {
      purpose_of_loan: ReactDOM.findDOMNode(this.refs.purspose).value,
      details_needs: values.reason_loan,
      loan_amount: loan_amount,
      loan_tenor: loan_tenor,
      monthly_installment: monthly_installment,
      fee_upfront: fee_upfront,
      interest_rate: '36'
    };
    this.saveLoanInfo(data);
  }

  handleChange() {
    this.setState({selectValue: ReactDOM.findDOMNode(this.refs.purspose).value});
  }

  render() {
    locale = this.props.locale.loaninfo;
    let editData = this.state.loaninfo;
    const {handleSubmit} = this.props;
    return (
      <div className='nav-md loan_wizard step7'>
        <div className='main_container'>
          <div className='container'>
            <div className='right_col' role='main'>
              <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12'>
                  <div className='wrapper row'>
                    <div className='col-sm-12 col-xs-12'>
                      <h2 className='offered_title'>{locale.heading1}</h2>
                    </div>
                    <div className='col-sm-8 col-xs-12'>
                      <OfferedLoan/>
                    </div>
                    <div className='col-sm-4 col-xs-12'>
                      <div className='sideform'>
                        <div className='side_notes'><span>{locale.heading2}</span></div>
                        <div className='personal_details clearfix'><h5>{locale.heading3}</h5> <span><i
                          className='fa fa-circle-o'/><i className='fa fa-circle-o'/><i
                          className='fa fa-circle'/></span></div>
                        <div className='personal_form common_wizards'>
                          <form onSubmit={handleSubmit(this.submitHandler.bind(this))}>
                            <div className='row'>
                              <div className='col-sm-6 col-xs-12'>
                                <div className='form-group'>
                                  <label className='label-control'>{locale.purpose}</label>
                                  <select defaultValue={editData ? editData.loan_purpose : ''}
                                    key={editData ? editData.loan_purpose : ''} ref='purspose'>
                                    <option value='1'>{locale.education_fees}</option>
                                    <option value='2'>{locale.wedding_expenses}</option>
                                    <option value='3'>{locale.medical_expenses}</option>
                                    <option value='4'>{locale.item_purchases}</option>
                                    <option value='5'>{locale.holiday_expenses}</option>
                                    <option value='6'>{locale.home_renovation}</option>
                                    <option value='7'>{locale.repaying_other_loans}</option>
                                    <option value='8'>{locale.other}</option>
                                  </select>
                                </div>
                              </div>
                              <div className='col-sm-12 col-xs-12'>
                                <div className='form-group'>
                                  <label className='label-control'>{locale.need_loan}</label>
                                  <Field
                                    name='reason_loan'
                                    component={renderFields.renderTextArea}
                                    placeholder={locale.placeholder1}
                                  />
                                </div>
                              </div>
                              <div className='col-sm-12 col-xs-12'>
                                <div className='continue next_previous clearfix'>
                                  <Link to='/contact-info'>
                                    <button type='button'
                                      className='btn btn-primary pull-left prev_btn'>{locale.previous}</button>
                                  </Link>
                                  <button type='submit'
                                    className='btn btn-primary pull-right next_btn'>{locale.next}</button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
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
  if (!values.reason_loan) {
    errors.reason_loan = locale.validatereasonrequired;
  }
  return errors;
}

export default reduxForm({
  form: 'LoanInfoForm',
  validate
})(LoanInfo);
