import React from 'react';
import {Link, browserHistory} from 'react-router';
import * as validation from '../js/custom';
import * as api from '../../tools/apiConfig';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class resetPassword extends React.Component {
  static propTypes = {
    actions: PropTypes.object,
    locale: PropTypes.object,
    initialize: PropTypes.func,
    handleSubmit: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      changepassword: '',
      confirmpassword: ''
    };
  }

  componentDidMount() {
    validation.FormValidationMd.init();
  }

  resetPassword(data) {
    $.ajax({
      type: 'POST',
      url: api.RESET_PASSWORD,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: (response) => {
        if (response.status === 'OK') {
          toastr.success(response.message);
          browserHistory.push('/Login');
        } else if (response.status === 'INTERNAL_ERROR') {
          toastr.error('Some internal error occured.');
        } else {
          toastr.error(response.message);
          browserHistory.push('/account-activation');
        }
      },
      error: () => {
        localStorage.clear();
        toastr.error('Server error occured');
        browserHistory.push('/');
      }
    });
  }

  submitHandler() {
    let form = $('#resetpassword_page');
    if (form.valid()) {
      let data = {
        username: ReactDOM.findDOMNode(this.refs.username).value,
        password: ReactDOM.findDOMNode(this.refs.password).value,
        token: ReactDOM.findDOMNode(this.refs.token).value
      };
      this.resetPassword(data);
    }
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
                    <img src={require('../images/danablue.png')}/> <span>DanaKita</span></Link></div>
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
                          <div><h4>Reset Password</h4></div>
                          <div><p>Difficulty accessing your account? Enter your login email address below. We will send
                            you an email with instructions to reset your account password.</p></div>
                        </div>
                        <form role='form' id='resetpassword_page'>
                          <div className='form-group'>
                            <input type='text' ref='username' name='username' className='form-control' id=''
                              placeholder='Username'/>
                          </div>
                          <div className='form-group'>
                            <input type='password' ref='password' name='password' className='form-control' id='password'
                              placeholder='Password'/>
                          </div>
                          <div className='form-group'>
                            <input type='password' name='confirm_password' className='form-control' id='confirmpassword'
                              placeholder='Confirm password'/>
                          </div>
                          <div className='form-group'>
                            <input type='text' ref='token' name='token' className='form-control' id=''
                              placeholder='Enter your token'/>
                          </div>

                          <div className='next_previous clearfix continue'>
                            <button type='button' onClick={(e) => this.submitHandler(e)}
                              className='btn btn-primary next_btn '>Reset Your Password
                            </button>
                          </div>
                          <div className='signup_link'>
                            <span>Go back to <Link to='/Login'>Login</Link></span>
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

export default resetPassword;
