import React from 'react';
import {Link} from 'react-router';
// import {connect} from 'react-redux';
// import * as api from '../../tools/apiConfig';
// import * as loginActions from '../actions/loginActions';
// import {bindActionCreators} from 'redux';
// import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';
// import ProgressBar from 'react-progress-bar-plus';
// import {Field, reduxForm} from 'redux-form';
// import renderFields from './redux-FormFields/renderCommonField';
import PropTypes from 'prop-types';
import translate from 'counterpart';
// import {GOOGLE_AUTH_ID} from '../commons/const';
import {SignInForm} from '../../components/sign-in-form/sign-in-form.jsx';
import {GoogleSignInButton} from '../../components/google-sign-in-button/google-sign-in-button.jsx';
import {FacebookSignInButton} from '../../components/facebook-sign-in-button/facebook-sign-in-button.jsx';

export class LoginContainer extends React.Component {
  locale = translate('layout');

  static propTypes = {
    // actions: PropTypes.object,
    // locale: PropTypes.object,
    initialize: PropTypes.func,
    handleSubmit: PropTypes.func
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     percent: -1,
  //     intervalTime: 200,
  //     login: {},
  //     user: {
  //       login_email: '',
  //       login_password: ''
  //     }
  //   };
  //   // this.responseGoogle = this.responseGoogle.bind(this);
  //   this.changeUser = this.changeUser.bind(this);
  // }

  /* setPercent(percent) {
     this.setState({
       percent: percent
     });
   }

   start() {
     this.setState({
       percent: 0,
       intervalTime: (Math.random() * 1000)
     });
   }*/

  // clickHandlerFB() {
  //   FB.AppEvents.logEvent('logged in with facebook');
  // }

  // responseFacebook(response) {
  //   // console.log(response)
  //   let longitude = localStorage.getItem('lng');
  //   let latitude = localStorage.getItem('lat');
  //   let accuracy = localStorage.getItem('accuracy');
  //   if (response.status || response.id) {
  //     if (longitude && latitude && accuracy) {
  //       let data = {
  //         facebookid: response.userID,
  //         imageUrl: response.picture.data.url,
  //         email: response.email,
  //         name: response.name,
  //         client_id: response.id,
  //         friends: response.friends.data,
  //         social_data: response,
  //         latitude: latitude,
  //         longtitude: longitude,
  //         accuracy: accuracy,
  //         provider: 'facebook'
  //       };
  //       // this.start();
  //       // this.saveFbDetails(data);
  //       this.props.actions.loginUser(data, this.locale.signin);
  //     }
  //     else {
  //       let data = {
  //         facebookid: response.userID,
  //         imageUrl: response.picture.data.url,
  //         email: response.email,
  //         name: response.name,
  //         social_data: response,
  //         client_id: response.id,
  //         friends: response.friends.data,
  //         provider: 'facebook'
  //       };
  //       // this.start();
  //       this.props.actions.loginUser(data, this.locale.signin);
  //       // this.saveFbDetails(data);
  //       FB.AppEvents.logEvent('Logged in to the app');
  //     }
  //     // if (localStorage.userImage || localStorage.userName) {
  //     //   localStorage.clear();
  //     // }
  //     localStorage.setItem('userImage', response.picture.data.url);
  //     localStorage.setItem('userName', response.name);
  //   }
  //   // browserHistory.push('/wizard')
  // }

  // loginUser(data) {
  //   $.ajax({
  //     type: 'POST',
  //     url: api.LENDER_LOGIN,
  //     dataType: 'json',
  //     contentType: 'application/json',
  //     data: JSON.stringify(data),
  //     success: (response) => {
  //       if (response.status === 'OK') {
  //         let token = response.data.token;
  //         let id = response.data.user.id;
  //         localStorage.setItem('token', token);
  //         localStorage.setItem('role', 'lender');
  //         localStorage.setItem('id', id);
  //         browserHistory.push('/dashboard');
  //       }
  //       else if (response.status === 'INTERNAL_ERROR') {
  //         toastr.error(this.locale.signin.internalError);
  //       }
  //       else {
  //         toastr.error(response.message);
  //         browserHistory.push('/Login');
  //       }
  //     },
  //     error: () => {
  //       localStorage.clear();
  //       toastr.error(this.locale.signin.serverError);
  //     }
  //   });
  // }
  //
  // submitHandler(values) {
  //   let lat = localStorage.getItem('lat');
  //   let lng = localStorage.getItem('lng');
  //   let accuracy = localStorage.getItem('accuracy');
  //   // let form = $('#login_form');
  //   // if (form.valid()) {
  //   if (lat && lng && accuracy) {
  //     let data = {
  //       username: values.email,
  //       password: values.password,
  //       latitude: lat,
  //       longtitude: lng,
  //       accuracy: accuracy
  //     };
  //     this.loginUser(data);
  //   }
  //   else {
  //     let data = {
  //       username: values.email,
  //       password: values.password
  //     };
  //     this.loginUser(data);
  //   }
  //   // }
  // }
  //
  // changeUser(event) {
  //   const field = event.target.name;
  //   const user = this.state.user;
  //   user[field] = event.target.value;
  //   this.setState({
  //     user
  //   });
  // }

  render() {
    return (
      <div className='nav-md loan_wizard login_page'>
        <div className='body'>
          <div className='main_container'>
            <div className='top_nav'>
              <div className='nav_menu'>
                <nav>
                  <div className='navbar nav_title'>
                    <Link to='/' className='site_title'>
                      <img src={require('../../images/danablue.png')}/> <span>DanaKita</span>
                    </Link></div>
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
                          <div><h4>{this.locale.signin.login}</h4></div>
                          <div className='signup_link'>
                            <span>{this.locale.signin.nillaccount} <Link to='/sign-up'>
                              {this.locale.signin.signup}</Link></span>
                          </div>
                        </div>
                        <div className='text-center'>
                          <FacebookSignInButton text={this.locale.signin.facebook}/>
                        </div>
                        <div className='text-center'>
                          <GoogleSignInButton text={this.locale.signin.google}/>
                        </div>
                        <div className='login-or'>
                          <hr className='hr-or'/>
                          <span className='span-or'>{this.locale.signin.or}</span>
                        </div>
                        <SignInForm/>
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

// function mapStateToProps(state) {
//   return {
//     login: state.loginData
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(loginActions, dispatch)
//   };
// }
//
// export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainerComponent);
