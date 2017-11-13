import React from 'react';
import {Link, browserHistory} from 'react-router';

class Sidebar extends React.Component {
  logout() {
    localStorage.clear();
    toastr.success('You have signed out');
    browserHistory.push('/Login');
  }

  render() {
    return (
      <div>
        <div className='col-md-3 left_col'>
          <div className='left_col scroll-view'>
            <div className='navbar nav_title sidebar_logo'><Link to='/wizard' className='site_title'>
              <img src={require('../../images/dana.png')}/> <span>DanaKita </span></Link></div>
            <div className='clearfix'/>
            <div className='profile clearfix'>
              <div className='profile_pic'>
                <img src={localStorage.getItem('userImage')} className='img-circle profile_img'/>
              </div>
              <div className='profile_info'><span>Welcome,</span>
                <h2>{localStorage.getItem('userName')}</h2>
              </div>
            </div>
            <br/>
            <div id='sidebar-menu' className='main_menu_side hidden-print main_menu'>
              <div className='menu_section'>
                <ul className='nav side-menu'>
                  <li><a><i className='fa fa-tachometer'/> Dashboard</a></li>
                  <li><Link to='/wizard'> <i className='fa fa-magic'/> Loan Wizard</Link></li>
                  <li><a><i className='fa fa-user'/> User Profile</a></li>
                  <li><a><i className='fa fa-user-plus'/> Invite User</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='top_nav'>
          <div className='nav_menu'>
            <nav>
              <div className='nav toggle'><a id='menu_toggle'><i className='fa fa-bars'/></a></div>
              <ul className='nav navbar-nav navbar-right'>
                <li className=''>
                  <a href='javascript:void(0);'
                     className='user-profile dropdown-toggle'
                     data-toggle='dropdown'
                     aria-expanded='false'>
                    <img src={localStorage.getItem('userImage')}/>
                    <span className=' fa fa-angle-down'/> </a>
                  <ul className='dropdown-menu dropdown-usermenu pull-right'>
                    <li><a href='javascript:void(0);'>Help</a></li>
                    <li><a onClick={this.logout}> <i className='fa fa-sign-out pull-right'/> Log Out</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
