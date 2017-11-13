import React from 'react';
import GoogleLogin from 'react-google-login';
import {GOOGLE_AUTH_ID} from '../../commons/const';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {googleAuthResponse} from '../../actions/social-auth.actions';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

class GoogleSignInButtonComponent extends React.Component {
  static propTypes = {
    googleAuthResponse: PropTypes.func,
    text: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
  }

  onSuccess(response) {
    this.props.googleAuthResponse(response)
      .then(() => {
        browserHistory.push('/wizard');
      });
  }

  onFailure() {

  }

  render() {
    return (<GoogleLogin
      clientId={GOOGLE_AUTH_ID}
      offline={false}
      onSuccess={this.onSuccess}
      onFailure={this.onFailure}
      approvalPrompt='force'
      prompt='consent'
      className='loginBtn loginBtn--google'
    >
      <span>{this.props.text}</span>
    </GoogleLogin>);
  }
}


export const GoogleSignInButton = connect(() => {
  return {};
}, (dispatch => {
    return {
      googleAuthResponse: bindActionCreators(googleAuthResponse, dispatch)
    };
  })
)(GoogleSignInButtonComponent);
