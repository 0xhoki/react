import React from 'react';
import {Link, browserHistory} from 'react-router';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logout} from '../../actions/user.actions';

class HeaderComponent extends React.Component {
  static propTypes = {
    logout: PropTypes.func,
    user: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
    browserHistory.push('/login');
  }

  render() {
    return (
      <div className='top_nav'>
        <div className='nav_menu'>
          <nav>
            <div className='navbar nav_title'><Link to='/wizard' className='site_title'>
              <img src={require('../../images/danablue.png')}/> <span>DanaKita</span></Link></div>
            <ul className='nav navbar-nav navbar-right'>
              <li className=''>
                <a
                  href='javascript:void(0);'
                  className='user-profile dropdown-toggle'
                  data-toggle='dropdown'
                  aria-expanded='false'>
                  <img src={this.props.user.userInfo.pictureUrl}/>
                  <span className=' fa fa-angle-down'/> </a>
                <ul className='dropdown-menu dropdown-usermenu pull-right'>
                  <li><a href='javascript:void(0);'>Help</a></li>
                  <li><a onClick={this.logout}> <i className='fa fa-sign-out pull-right'/>Log Out</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export const Header = connect(({user}) => {
  return {user};
}, (dispatch) => {
  return {
    logout: bindActionCreators(logout, dispatch)
  };
})(HeaderComponent);
