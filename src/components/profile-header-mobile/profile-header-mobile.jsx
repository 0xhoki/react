import './profile-header-mobile.styl';
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toggleNavigation} from '../../actions/ui.actions';

class ProfileHeaderMobileComponent extends React.Component {
  static propTypes = {
    toggleNavigation: PropTypes.func
  };

  render() {
    return (
      <div className='profile-header-mobile'>
        <div className='profile-header-mobile__btn' onClick={this.props.toggleNavigation}>
          <i className='fa fa-bars' />
        </div>
        <Link to='/' className='profile-header-mobile__logo'>
          <img src={require('../../images/danablue.png')} />
          <div>DanaKita</div>
        </Link>
      </div>
    );
  }
}

export const ProfileHeaderMobile = connect(({}) => ({
}), (dispatch) => ({
  toggleNavigation: bindActionCreators(toggleNavigation, dispatch)
}))(ProfileHeaderMobileComponent);


