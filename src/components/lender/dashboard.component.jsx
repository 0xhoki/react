import React from 'react';
import {Link, browserHistory} from 'react-router';
import * as script from '../../js/custom.min.js';

class dashboard extends React.Component {
  componentDidMount() {
    script.layout.init();
  }

  logout() {
    localStorage.clear();
    browserHistory.push('/Login');
  }

  render() {
    const fullname = localStorage.userName;
    const imagePreviewUrl = localStorage.getItem('userImage');
    let userImage = (<img src={imagePreviewUrl} className='img-circle'/>);
    if (!userImage.key) {
      userImage = (<img src={require('../../images/user.png')} className='img-circle'/>);
    }
    /* const fullname=localStorage.fullName;
    const dob = localStorage.dob;
    const gender = localStorage.gender;
    const martialstatus = localStorage.martialstatus;
    const emailadd = localStorage.emailadd;
    const homeadd = localStorage.homeadd;
    const province = localStorage.province;
    const city = localStorage.city;
    const district = localStorage.district;
    const subdivision = localStorage.subdivision;
    const postal = localStorage.postal;
    const purpose = localStorage.purpose;
    const need = localStorage.need;
    const address = localStorage.address;
    const empstatus = localStorage.empstatus;
    const occupation = localStorage.occupation;
    const phonenumber = localStorage.phonenumber;
    const postalcode = localStorage.postalcode;
    const country = localStorage.country;
    const zip = localStorage.zip;
    */
    const KTP = localStorage.KTP;
    return (
      <div id='sidebar_togg' className='nav-md loan_wizard sidebar_wrap'>
        <div className='container body'>
          <div className='main_container'>
            <div className='col-md-3 left_col'>
              <div className='left_col scroll-view'>
                <div className='navbar nav_title sidebar_logo' style={{border: 0}}><Link to='/dashboard'
                  className='site_title'><img
                    src={require('../../images/dana.png')}/> <span>DanaKita</span></Link></div>
                <div className='clearfix'/>
                <div className='profile clearfix'>
                  <div className='profile_pic'> {userImage} </div>
                  <div className='profile_info'><span></span>
                    <h2>{fullname}</h2>
                  </div>
                </div>
                <br/>
                <div id='sidebar-menu' className='main_menu_side hidden-print main_menu'>
                  <div className='menu_section'>
                    <ul className='nav side-menu'>
                      <li><Link to='/dashboard'><i className='fa fa-tachometer'/> Dashboard</Link></li>
                      <li><Link to='/change-password'><i className='fa fa-magic'/>Change Password</Link></li>
                      <li><Link to='/lenderuserProfile'><i className='fa fa-user'/> User Profile</Link></li>
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
                    <li className=''><a href='javascript:;' className='user-profile dropdown-toggle'
                      data-toggle='dropdown' aria-expanded='false'> {userImage} {fullname} <span
                        className=' fa fa-angle-down'/> </a>
                    <ul className='dropdown-menu dropdown-usermenu pull-right'>
                      <li><a onClick={this.logout}><i className='fa fa-sign-out pull-right'/> Log Out</a></li>
                    </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className='right_col' role='main'>
              <div className=''>
                <div className='page-title'>
                  <div className='title_left'>
                    <h3>User Profile</h3>
                  </div>
                </div>
                <div className='clearfix'/>
                <div className='row'>
                  <div className='col-md-12 col-sm-12 col-xs-12'>
                    <div className='x_panel user_profile'>
                      <div className='x_content'>
                        <div className='col-md-3 col-sm-3 col-xs-12 profile_left'>
                          <div className='profile_img'>
                            <div id='crop-avatar'>
                              <img className='img-responsive avatar-view' src={require('../../images/picture.jpg')}
                                alt='Avatar' title='Change the avatar'/></div>
                          </div>
                          <h5>{fullname}</h5>
                          <ul className='list-unstyled user_data'>
                            <li><i className='fa fa-map-marker user-profile-icon'/> San Francisco, California, USA
                            </li>
                            <li><i className='fa fa-briefcase user-profile-icon'/> Software Engineer</li>
                            <li className='m-top-xs'><i className='fa fa-external-link user-profile-icon'/> <a
                              href='http://www.kimlabs.com/profile/' target='_blank'>www.kimlabs.com</a></li>
                          </ul>
                          <div className='next_previous'><a className='btn btn-success'><i
                            className='fa fa-edit m-right-xs'/>Edit Profile</a></div>
                        </div>
                        <div className='col-md-9 col-sm-9 col-xs-12'>
                          <div className='basic_user_info' role='tabpanel' data-example-id='togglable-tabs'>
                            <ul id='myTab' className='nav nav-tabs bar_tabs' role='tablist'>
                              <li role='presentation' className='active'><a href='#tab_content1' id='home-tab'
                                role='tab' data-toggle='tab'
                                aria-expanded='true'>Personal Details</a>
                              </li>
                              <li role='presentation' className=''><a href='#tab_content2' role='tab' id='profile-tab'
                                data-toggle='tab' aria-expanded='false'>Contact
                                Information</a></li>
                              <li role='presentation' className=''><a href='#tab_content4' role='tab' id='profile-tab3'
                                data-toggle='tab' aria-expanded='false'>Employment
                                Information</a></li>
                              <li role='presentation' className=''><a href='#tab_content5' role='tab' id='profile-tab4'
                                data-toggle='tab' aria-expanded='false'>Relative
                                Information</a></li>
                            </ul>
                            <div id='myTabContent' className='tab-content'>
                              <div role='tabpanel' className='tab-pane fade row active in' id='tab_content1'
                                aria-labelledby='home-tab'>
                                <div className='col-sm-12 col-xs-12 pay_info'>
                                  <div className='form_review row'>
                                    <div className='col-sm-3 col-xs-12'>
                                      <label>Full Name</label>
                                    </div>
                                    <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                  </div>
                                  <div className='form_review row'>
                                    <div className='col-sm-3 col-xs-12'>
                                      <label>Date of Birth</label>
                                    </div>
                                    <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                  </div>
                                  <div className='form_review row'>
                                    <div className='col-sm-3 col-xs-12'>
                                      <label>Gender</label>
                                    </div>
                                    <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                  </div>
                                  <div className='form_review row'>
                                    <div className='col-sm-3 col-xs-12'>
                                      <label>Marital Status</label>
                                    </div>
                                    <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                  </div>
                                </div>
                              </div>
                              <div role='tabpanel' className='tab-pane row fade' id='tab_content2'
                                aria-labelledby='profile-tab'>
                                <div className='col-sm-12 col-xs-12 pay_info'>
                                  <div className='form_review row'>
                                    <div className='col-sm-3 col-xs-12'>
                                      <label>Email Address</label>
                                    </div>
                                    <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                  </div>
                                  <div className='form_review row'>
                                    <div className='col-sm-3 col-xs-12'>
                                      <label>Home Adress</label>
                                    </div>
                                    <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                  </div>
                                  <div className='form_review row'>
                                    <div className='col-sm-3 col-xs-12'>
                                      <label>Province</label>
                                    </div>
                                    <div className='col-sm-9 col-xs-12'><span>Province A</span></div>
                                  </div>
                                  <div className='form_review row'>
                                    <div className='col-sm-3 col-xs-12'>
                                      <label>Regency / City</label>
                                    </div>
                                    <div className='col-sm-9 col-xs-12'><span>City B</span></div>
                                  </div>
                                  <div className='form_review row'>
                                    <div className='col-sm-3 col-xs-12'>
                                      <label>District</label>
                                    </div>
                                    <div className='col-sm-9 col-xs-12'><span>District C</span></div>
                                  </div>
                                  <div className='form_review row'>
                                    <div className='col-sm-3 col-xs-12'>
                                      <label>Subdivision / Village</label>
                                    </div>
                                    <div className='col-sm-9 col-xs-12'><span>Village D</span></div>
                                  </div>
                                  <div className='form_review row'>
                                    <div className='col-sm-3 col-xs-12'>
                                      <label>Postal Code</label>
                                    </div>
                                    <div className='col-sm-9 col-xs-12'><span>11111</span></div>
                                  </div>
                                </div>
                              </div>
                              <div role='tabpanel' className='tab-pane row fade' id='tab_content4'
                                aria-labelledby='profile-tab'>
                                <div className='col-sm-12 col-xs-12 pay_info'>
                                  <div className='sub_sec_user'>
                                    <div className='clearfix review_title'>
                                      <h2>Company Basic Details</h2>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Employment status</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Occupation</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Company name</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Company sector</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>City B</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Company phone</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Subdivision / Village</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Village D</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Postal Code</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                    </div>
                                  </div>
                                  <div className='sub_sec_user'>
                                    <div className='clearfix review_title'>
                                      <h2>Company Address Details</h2>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Company address</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum dolor</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Country</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>District</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Regency</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>City B</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Province</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Zip code</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                    </div>
                                  </div>
                                  <div className='sub_sec_user'>
                                    <div className='clearfix review_title'>
                                      <h2>Company Other Details</h2>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Monthly base income</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Rp. 3.0</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Monthly other income</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Rp. 3.0</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Company manager name</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Employee since</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>2017</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Job title</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div role='tabpanel' className='tab-pane row fade' id='tab_content5'
                                aria-labelledby='profile-tab'>
                                <div className='col-sm-12 col-xs-12 pay_info'>
                                  <div className='sub_sec_user'>
                                    <div className='clearfix review_title'>
                                      <h2>Spouse Details</h2>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>KTP number</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>{KTP}</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Name</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Company Name</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Phone number</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>+61 0000000000</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Occupation</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Address</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>District</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Regency</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Province</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Zip code</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>0000</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Country</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Australia</span></div>
                                    </div>
                                  </div>
                                  <div className='sub_sec_user'>
                                    <div className='clearfix review_title'>
                                      <h2>Relative Details</h2>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Name</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Relationship</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Phone number</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>+61 0000000000</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Occupation</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Address</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>District</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Regency</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Province</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Lorem ipsum</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Zip code</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>0000</span></div>
                                    </div>
                                    <div className='form_review row'>
                                      <div className='col-sm-3 col-xs-12'>
                                        <label>Country</label>
                                      </div>
                                      <div className='col-sm-9 col-xs-12'><span>Australia</span></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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

export default dashboard;
