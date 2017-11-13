import React from 'react';
import translate from 'counterpart';

class LoanRejection2Container extends React.Component {
  locale = translate('wizards').loanacknowledgements;

  render() {
    const {locale} = this;
    return (
      <div className='nav-md loan_wizard'>
        <div className='main_container'>
          <div className='container'>
            <div className='right_col' role='main'>
              <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12'>
                  <div className='thankYouDK'>
                    <h2>{locale.thankyou_msg}</h2>
                    <img src={require('../../../images/financial_condition.png')} alt=''/>
                    <h3>{locale.apology_msg_part1_type2}<br className='brWeb'/>{locale.apology_msg_part2_type2} </h3>
                    <p>{locale.acknowledge_line1}</p>
                    <p>{locale.acknowledge_line2} <a href='javascript:void(0)'><strong>{locale.here}</strong></a>. </p>
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

export {LoanRejection2Container};
