import React from 'react';
import {browserHistory} from 'react-router';
import translate from 'counterpart';

class OldUserRedirectContainer extends React.Component {
  locale = translate('wizards').loanacknowledgements;

  constructor(props) {
    super(props);
    this.redirectHandler = this.redirectHandler.bind(this);
  }

  redirectHandler() {
    localStorage.clear();
    browserHistory.push('/');
  }

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
                    <img src={require('../../../images/financial_ok.png')} alt=''/>
                    <h3>{locale.wait_msg}</h3>
                    <p>{locale.acknowledge_line2}
                      <a href='javascript:void(0)' onClick={this.redirectHandler}><strong>{locale.here}</strong></a>.
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

export {OldUserRedirectContainer};
