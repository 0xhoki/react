import React from 'react';

class lenderChoice extends React.Component {
  render() {
    return (
      <div className='loan_wizard'>
        <div className='top_nav'>
          <div className='nav_menu'>
            <nav>
              <div className='navbar nav_title' style={{border: 0}}><a href='' className='site_title'><img
                src={require('../../images/danablue.png')}/> <span>DanaKita</span></a></div>
              <ul className='nav navbar-nav navbar-right'>
                <li className=''>
                  <a href='javascript:void(0);' className='user-profile dropdown-toggle'
                    data-toggle='dropdown'
                    aria-expanded='false'> <img src={require('../../images/img.jpg')} alt=''/>Huge Doe
                    <span className=' fa fa-angle-down'/> </a>
                  <ul className='dropdown-menu dropdown-usermenu pull-right'>
                    <li><a href='javascript:void(0);'> Profile</a></li>
                    <li><a href='javascript:void(0);'>Help</a></li>
                    <li><a href='login.html'><i className='fa fa-sign-out pull-right'/> Log Out</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='main_container'>
          <div className='container'>
            <div className='right_col borrower' role='main'>
              <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12'>
                  <div className='wrapperr row primary_step'>
                    <div className='col-sm-12 col-xs12'><span className='notes'>&nbsp;</span></div>
                  </div>
                  <div className='wrapper row'>
                    <div className='col-sm-8 col-xs-12'>
                      <div className='process active_field'>
                        <div className='active_lable'>
                          <h3>What you would like to be ?</h3>
                        </div>
                        <div className='fields clearfix'>

                          <div className='radio radio-primary'>
                            <input type='radio' name='role' id='individual' value='individual'/>
                            <label htmlFor='individual'>
                              Individual lender
                            </label>
                          </div>
                          <div className='radio radio-primary'>
                            <input type='radio' name='role' id='corporate' value='corporate'/>
                            <label htmlFor='corporate'>
                              Corporate lender
                            </label>
                          </div>

                        </div>

                      </div>
                      <div className='next_previous clearfix'>

                        <button type='button' className='btn btn-primary pull-right next_btn disabled'>Next</button>
                      </div>
                    </div>
                    <div className='col-sm-4 col-xs12 right_notifi step_notifi'>
                      <h4>Why do we need this?</h4>
                      <p>In order to determine your eligibility,
                        we need your NIK to Lorem ipsum
                        dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet dolore
                        magna aliquam erat volutpat. Ut
                        wisi enim ad minim veniam, quis
                        nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea
                        commodo consequat. Duis autem
                        vel eum iriure dolor in hen </p>
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

export default lenderChoice;
