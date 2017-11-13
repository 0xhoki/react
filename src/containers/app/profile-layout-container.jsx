import React from 'react';
import PropTypes from 'prop-types';
import {Footer} from '../../components/footer/footer.jsx';
import {ProfileHeader} from '../../components/profile-header/profile-header.jsx';
import {ProfileHeaderMobile} from '../../components/profile-header-mobile/profile-header-mobile.jsx';
import {MobileMenu} from '../../components/mobile-menu/mobile-menu.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {isMobile} from '../../helpers';
import classNames from 'classnames';
import {toggleNavigation} from '../../actions/ui.actions';

class ProfileLayoutContainerComponent extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    isOpen: PropTypes.bool,
    toggleNavigation: PropTypes.func
  };

  isMobile = isMobile();

  toggleMenu = (e) => {
    e.stopPropagation();
    this.props.toggleNavigation();
  };

  render() {
    const {isOpen} = this.props;
    const {toggleMenu} = this;
    const profileLayoutClass = classNames(
      'profile-layout',
      {'profile-layout--mobile': this.isMobile},
      {'profile-layout--open-menu': isOpen}
    );

    return (
      <div className={profileLayoutClass}>
        {
          this.isMobile &&
          <div className='profile-layout__vertical-menu' onClick={toggleMenu}>
            <MobileMenu />
          </div>
        }
        <div className='profile-layout__header'>
          {
            this.isMobile
              ? <ProfileHeaderMobile />
              : <ProfileHeader />
          }
        </div>
        <div className='profile-layout__body'>
          {this.props.children}
        </div>
        <div className='profile-layout__footer'>
          <Footer />
        </div>
      </div>
    );
  }
}

export const ProfileLayoutContainer = connect(({ui: {nav: {isOpen}}}) => ({
  isOpen
}), (dispatch) => ({
  toggleNavigation: bindActionCreators(toggleNavigation, dispatch)
}))(ProfileLayoutContainerComponent);
