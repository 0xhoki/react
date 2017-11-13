import React from 'react';
import {Link, browserHistory} from 'react-router';
import * as api from '../../tools/apiConfig';
import * as validation from '../js/custom';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class accountActivation extends React.Component {
  static propTypes = {
    locale: PropTypes.object
  };

  componentDidMount() {
    validation.FormValidationMd.init();
  }

  accountActivation(data) {
    $.ajax({
      type: 'POST',
      url: api.ACCOUNT_ACTIVATION,
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
          toastr.error(toastr.message);
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
    let form = $('#account_activation');
    if (form.valid()) {
      let data = {
        username: ReactDOM.findDOMNode(this.refs.username).value,
        password: ReactDOM.findDOMNode(this.refs.password).value,
        token: ReactDOM.findDOMNode(this.refs.token).value
      };
      this.accountActivation(data);
    }
  }

  render() {
    // const locale = this.props.locale;
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
                          <div><h4>Account Activation</h4></div>
                          <div><p>Fill below form to activate your account.</p></div>
                        </div>
                        <form role='form' id='account_activation'>
                          <div className='form-group'>
                            <input type='text' ref='username' name='username' className='form-control'
                              placeholder='Enter your username'/>
                          </div>
                          <div className='form-group'>
                            <input type='password' ref='password' name='userpassword' className='form-control'
                              placeholder='Enter your password'/>
                          </div>
                          <div className='form-group'>
                            <input type='text' ref='token' name='token' className='form-control'
                              placeholder='Enter your token'/>
                          </div>
                          <div className='next_previous clearfix continue'>
                            <button type='button' onClick={(e) => this.submitHandler(e)}
                              className='btn btn-primary next_btn '>Submit
                            </button>
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

export default accountActivation;
