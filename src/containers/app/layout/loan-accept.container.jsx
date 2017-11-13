import React from 'react';
import translate from 'counterpart';

class IoanAcceptContainer extends React.Component {
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
                  <div className='thankYouDK congratulations'>
                    <img src={require('../../../images/financial_ok.png')} alt=''/>
                    <h2>{locale.congratulation_msg}</h2>
                    <h3> {locale.acceptance_msg1}</h3>
                    <p>{locale.postacceptance_msg1_part1}</p>
                    <p>{locale.postacceptance_msg1_part2}
                      <a href='javascript:void(0)'><strong>{locale.here}</strong></a>.
                    </p>
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

export {IoanAcceptContainer};
