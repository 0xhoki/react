import React from 'react';
import ReactDOM from 'react-dom';
import * as script from '../../js/custom.min.js';
import counterpart from 'counterpart';
import translate from 'counterpart';
import Decimal from 'decimal';

counterpart.registerTranslations('en', require('../../locales/en'));
counterpart.registerTranslations('id', require('../../locales/id'));
let locale = {};

class OfferedLoan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      months: 0,
      locale: [],
      monthlyPayment: 0,
      totalPayment: 0,
      adminFee: 0
    };
    this.calculateAmount = this.calculateAmount.bind(this);
  }

  calculateAmount() {
    let amount = ReactDOM.findDOMNode(this.refs.amount).value;
    let tenor = ReactDOM.findDOMNode(this.refs.month).value;
    amount = Decimal.mul(amount, 1000000).toNumber();
    let IR = Decimal.div(Decimal.mul(Decimal.mul(amount, 0.36).toNumber(), tenor).toNumber(), 12).toNumber();
    let totalPayment = Decimal.add(amount, IR).toNumber();
    let monthlyPayment = Decimal.div(totalPayment, tenor).toNumber();
    monthlyPayment = Math.ceil(monthlyPayment / 10000) * 10000;
    totalPayment = Decimal.mul(monthlyPayment, tenor).toNumber();
    if (!monthlyPayment) {
      this.setState({
        monthlyPayment: 0,
        totalPayment: totalPayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      });
      localStorage.setItem('installment', 0);
    } else {
      this.setState({
        monthlyPayment: monthlyPayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
        totalPayment: totalPayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
        adminFee: (amount * 0.05).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      });
      localStorage.setItem('installment', monthlyPayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'));
      localStorage.setItem('fee_upfront', (amount * 0.05).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'));
    }
  }

  componentWillMount() {
    script.layout.init();
    let tenor_mon = localStorage.getItem('tenor_mon');
    let tenor_amt = localStorage.getItem('tenor_amt');
    if (tenor_mon && tenor_amt) {
      ReactDOM.findDOMNode(this.refs.month).value = tenor_mon;
      ReactDOM.findDOMNode(this.refs.amount).value = tenor_amt;
    } else {
      localStorage.setItem('tenor_mon', 12);
      localStorage.setItem('tenor_amt', 5);
      ReactDOM.findDOMNode(this.refs.month).value = 12;
      ReactDOM.findDOMNode(this.refs.amount).value = 5;
    }
    this.calculateAmount();
    this.setState({
      locale: translate('wizards')
    });
  }

  componentWillMount() {
    const checkLocal = localStorage.getItem('lang');
    if (checkLocal) {
      counterpart.setLocale(checkLocal);
    }
    this.setState({
      locale: translate('wizards')
    });
  }

  amountChange() {
    const currval = ReactDOM.findDOMNode(this.refs.amount).value;
    localStorage.setItem('tenor_amt', currval);
    this.calculateAmount();
  }

  monthChange() {
    const currval = ReactDOM.findDOMNode(this.refs.month).value;
    localStorage.setItem('tenor_mon', currval);
    this.calculateAmount();
  }

  render() {
    locale = this.state.locale.loanoffer;
    return (
      <div className='offered_loan applyLoan'>
        <div className='loan_sec'>
          <div className='loan_fields clearfix'>
            <div className='loan_label'>
              <label>{locale.borrow}</label> <span><select className='common_query2'
                onChange={this.amountChange.bind(this)} ref='amount'>
                <option value='5'>{locale.five}</option>
                <option value='6'>{locale.six}</option>
                <option value='7'>{locale.seven}</option>
                <option value='8'>{locale.eight}</option>
                <option value='9'>{locale.nine}</option>
                <option value='10'>{locale.ten}</option>
              </select></span> <label>{locale.millions}</label> <span><select className='common_query2'
                onChange={this.monthChange.bind(this)}
                ref='month'>
                <option value='6'>{locale.sixmonths}</option>
                <option value='12'>{locale.twelvemonths}</option>
                <option value='18'>{locale.eighteenmonths}</option>
              </select></span>
            </div>
            <div className='monthly_pay'>
              <div className='clearfix show_more'>
              </div>
              <div className='amount'><span>Rp {this.state.monthlyPayment}</span></div>
              <div className='amt_noti'><span> {locale.payment_message}</span></div>
            </div>
            <div className='payInfoWrapBg'>
              <div className='row pay_info_wrap'>
                <div className='col-sm-4 col-xs-12 pay_info'>
                  <div>
                    <h2>{locale.rate}</h2>
                  </div>
                  <div className='amount'><span>36%</span></div>
                  <div className='amt_noti'><span>{locale.cost1}<br/>
                    {locale.cost2}.</span></div>
                </div>
                <div className='col-sm-4 col-xs-12 pay_info'>
                  <div>
                    <h2>{locale.finance_charge}</h2>
                  </div>
                  <div className='amount'><span>Rp {this.state.adminFee}</span></div>
                  <div className='amt_noti'><span>
                    {locale.finance_charge_message1}<br/>
                    {locale.finance_charge_message2}.</span></div>
                </div>
                <div className='col-sm-4 col-xs-12 pay_info'>
                  <div>
                    <h2>{locale.total_payment}</h2>
                  </div>
                  <div className='amount'><span>Rp {this.state.totalPayment}</span></div>
                  <div className='amt_noti'><span>
                    {locale.total_payment_message1}<br/>
                    {locale.total_payment_message2}.</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='review_note'>
          <p>* {locale.includes} {this.state.adminFee}</p>
        </div>
      </div>
    );
  }
}

export default OfferedLoan;
