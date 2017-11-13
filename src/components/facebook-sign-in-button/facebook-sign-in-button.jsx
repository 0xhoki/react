import React from 'react';
import FacebookLogin from 'react-facebook-login';
import {FACEBOOK_APP_ID, FACEBOOK_AUTH_FIELDS, FACEBOOK_AUTH_SCOPE} from '../../commons/const';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {facebookAuthResponse} from '../../actions/social-auth.actions';

class FacebookSignInButtonComponent extends React.Component {
  static propTypes = {
    facebookAuthResponse: PropTypes.func,
    onSuccess: PropTypes.func,
    text: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
  }

  async onSuccess(response) {
    if (this.props.onSuccess) {
      await this.props.onSuccess(response);
    }
    this.props.facebookAuthResponse(response).then(() => {
      browserHistory.push('/wizard');
    });
  }

  componentWillMount() {
    (function (d, s, id) {
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = '//connect.facebook.net/en_US/all.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  render() {
    return (<FacebookLogin
      appId={FACEBOOK_APP_ID}
      cookie={true}
      xfbml={true}
      version='2.8'
      autoLoad={false}
      fields={FACEBOOK_AUTH_FIELDS}
      scope={FACEBOOK_AUTH_SCOPE}
      callback={this.onSuccess}
      disableMobileRedirect={true}
      cssClass='loginBtn loginBtn--facebook'
      textButton={this.props.text}
    />);
  }
}

export const FacebookSignInButton = connect(() => {
  return {};
}, (dispatch) => {
  return {
    facebookAuthResponse: bindActionCreators(facebookAuthResponse, dispatch)
  };
})(FacebookSignInButtonComponent);
