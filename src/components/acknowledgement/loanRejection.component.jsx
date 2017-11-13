import React from 'react';

class acknowledgement1 extends React.Component {
  render() {
    return (
      <div className='nav-md loan_wizard'>
        <div className='main_container'>
          <div className='container'>
            <div className='right_col' role='main'>
              <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12'>
                  <div className='thankYouDK'>
                    <h2>Thank you for considering <br/> DanaKita as a financial partner.</h2>
                    <img src={require('../../images/financial_condition.png')} alt=''/>
                    <h3>We are very sorry. Due to your financial <br/>condition, <br className='brWeb'/> we cannot
                      proceed your loan application </h3>
                    <p>You can try to apply for a loan again in the future as we expand the scope of our services.</p>
                    <p>You will be redirected to our HomePage in a few seconds or you can click
                      <a href='javascript:void(0)'><strong>here</strong></a>.
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

export default acknowledgement1;
