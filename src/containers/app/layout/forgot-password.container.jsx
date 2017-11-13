import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import translate from 'counterpart';
import {ForgotPasswordForm} from '../../../components/forgot-password-form/forgot-password-form.jsx';

export class ForgotPasswordContainer extends React.Component {
  static propTypes = {
    children: PropTypes.any
  };

  locale = translate('layout');

  componentWillReceiveProps() {
    this.locale = translate('layout');
  }

  render() {
    return (
      <div className='nav-md loan_wizard login_page'>
        <div className='body'>
          <div className='main_container'>
            <div className='top_nav'>
              <div className='nav_menu'>
                <nav>
                  <div className='navbar nav_title'><Link to='/' className='site_title'>
                    <img src={require('../../../images/danablue.png')}/> <span>DanaKita</span></Link></div>
                </nav>
              </div>
            </div>
            <div className='container'>
              <div className='right_col' role='main'>
                <div className='row login_wrap'>
                  <div className='col-sm-12 col-xs-12'>
                    <div className='main '>
                      <div className='login_white'>
                        <div className='text-center login_txt'>
                          <div><h4>{this.locale.forgetpassword.headline}</h4></div>
                          <div><p>{this.locale.forgetpassword.text}</p></div>
                        </div>
                        <ForgotPasswordForm/>
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
