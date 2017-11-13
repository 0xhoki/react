import React from 'react';
import {Header} from '../../../components/header/header.jsx';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCurrentProfile} from '../../../actions/profile.actions';

class WizardContainerComponent extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    getCurrentProfile: PropTypes.func
  };

  componentWillMount() {
    this.props.getCurrentProfile();
  }

  render() {
    return (
      <div>
        <Header/>
        <div className='nav-md loan_wizard step1'>
          <div className='main_container'>
            <div className='container'>
              <div className='right_col' role='main'>
                <div>
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const WizardContainer = connect(({language, profile}) => {
  return {language, profile};
}, (dispatch) => {
  return {
    getCurrentProfile: bindActionCreators(getCurrentProfile, dispatch)
  };
})(WizardContainerComponent);
