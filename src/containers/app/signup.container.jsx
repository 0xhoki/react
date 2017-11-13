import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import translate from 'counterpart';
import {GoogleSignInButton} from '../../components/google-sign-in-button/google-sign-in-button.jsx';
import {FacebookSignInButton} from '../../components/facebook-sign-in-button/facebook-sign-in-button.jsx';
import {connect} from 'react-redux';

class SignUpContainerComponent extends React.Component {
  locale = translate('layout');

  static propTypes = {
    saveFacebookDetails: PropTypes.func,
    handleSubmit: PropTypes.func
  };

  render() {
    return (
      <div className='nav-md loan_wizard login_page'>
        <div className='body'>
          <div className='main_container'>
            <div className='top_nav'>
              <div className='nav_menu'>
                <nav>
                  <div className='navbar nav_title'><Link to='/' className='site_title'>
                    <img src={require('../../images/danablue.png')}/> <span>DanaKita</span></Link></div>
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
                          <div><h4>{this.locale.signup.continue}</h4></div>
                          <div className='signup_link'>
                            <span>{this.locale.signup.account} <Link to='/Login'>Login</Link></span>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-xs-12 col-sm-12 col-md-12 text-center'>
                            <FacebookSignInButton
                              text={this.locale.signup.facebook}
                            />
                          </div>
                          <div className='col-xs-12 col-sm-12 col-md-12 text-center'>
                            <GoogleSignInButton text={this.locale.signup.google}/>
                          </div>
                        </div>
                        <form role='form'>
                          <div className='next_previous clearfix continue'>
                          </div>
                          <div className='terms'>
                            <div>
                              {this.locale.signup.acceptance} <br/>
                              <Link to='/terms'>{this.locale.signup.terms}</Link> {this.locale.signup.acceptance1}
                              <Link to='/privacy'>{this.locale.signup.privacy}</Link> {this.locale.signup.acceptance2}
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
    );
  }
}

export const SignUpContainer = connect((language) => {
  return {language};
})(SignUpContainerComponent);
