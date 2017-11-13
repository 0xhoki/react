import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

export class HowItWorksContainer extends React.Component {
  static propTypes = {
    locale: PropTypes.object
  };

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='sidebar_home'>
            <div className='scroll_section'>
              <div className='text-center'>
                <div>
                  <img src={require('../../../images/logo.png')}/>
                </div>
                <div className='top_links'>
                                    <span>Borrowing easily. <a href='#'> See More <i className='fa fa-angle-right'
                                                                                     aria-hidden='true'/>
                                    </a></span>
                </div>
              </div>
              <div className='sidebar_menu_sec clearfix'>
                <div className='col-sm-6 col-xs-12 text-center'>
                  <div className='side_icon'>
                    <img src={require('../../../images/side_icon1.png')}/>
                  </div>
                  <strong>Simple</strong>
                  <p>You can follow <br/>any step easily.</p>
                </div>
                <div className='col-sm-6 col-xs-12 text-center'>
                  <div className='side_icon'><img src={require('../../../images/side_icon2.png')}/></div>
                  <strong>Fast</strong>
                  <p>You do not have to wait long <br/>for the disbursement.</p>
                </div>
                <div className='col-sm-6 col-xs-12 text-center'>
                  <div className='side_icon'><img src={require('../../../images/side_icon3.png')}/></div>
                  <strong>Secure</strong>
                  <p>The information you share in these <br/>applications are secure.</p>
                </div>
                <div className='col-sm-6 col-xs-12 text-center'>
                  <div className='side_icon'><img src={require('../../../images/side_icon4.png')}/></div>
                  <strong>Since childhood</strong>
                  <p>You can borrow from <br/>a low nominal.</p>
                </div>
              </div>
            </div>
            <div className='downarrow'><a href='#'><i className='fa fa-angle-down' aria-hidden='true'/></a></div>
          </div>
          <div className='right_panel'>
            <div>
              <nav className='navbar navbar-inverse' data-spy='affix' data-offset-top='197'>
                <div className='container-fluid'>
                  <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                      <span className='icon-bar'/>
                      <span className='icon-bar'/>
                      <span className='icon-bar'/>
                    </button>
                    <a className='navbar-brand ' href='#'><img src={require('../../../images/dana.png')}/>
                      <span>DanaKita</span></a>
                  </div>
                  <div>
                    <div className='collapse navbar-collapse' id='myNavbar'>
                      <ul className='nav navbar-nav'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/contact-us'>Contact us</Link></li>
                        <li><Link to='/Login' className='button'>Sign In</Link></li>
                        <li><Link to='/sign-up' className='button'>Sign Up</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className='commingsoon'>
              <h2>Coming soon</h2>
            </div>

            <div className='mobile_content'>
              <div className='mobile_ban'>
                <span>Borrowing easily.</span>
              </div>
              <div className='scroll_section0 scroll_section'>
                <div className='text-center sec0head'><h5>How much do you need?</h5></div>
                <div className='sec_0'>
                  <div className='line1 clearfix'>
                    <div className='left_cont'>I want to borrow Rp.</div>
                    <div className='mid_cont'>
                      <a href=''><i className='fa fa-minus-square-o' aria-hidden='true'/></a><input type='text'/><a
                      href=''><i className='fa fa-plus-square-o' aria-hidden='true'/></a>
                    </div>
                    <div className='right_cont'>million</div>
                  </div>
                  <div className='line2 clearfix'>
                    <div className='left_cont'>and I will repay over</div>
                    <div className='mid_cont'>
                      <a href=''><i className='fa fa-minus-square-o' aria-hidden='true'/></a><input type='text'/><a
                      href=''><i className='fa fa-plus-square-o' aria-hidden='true'/></a>
                    </div>
                    <div className='right_cont'>months</div>
                  </div>
                </div>
                <div className='get_started'>
                  <button className='btn'>Get Started</button>
                </div>
                <div className='slide_arrow text-center'>
                  <a href=''>
                    <i className='fa fa-angle-down' aria-hidden='true'/>
                  </a>
                </div>
              </div>
              <div className='scroll_section1 scroll_section'>
                <div className='text-center'>
                  <div><h5>Profit</h5></div>
                </div>
                <div className='sidebar_menu_sec clearfix'>
                  <div className='col-xs-12 clearfix'>
                    <div className='side_icon'><img src={require('../../../images/side_iconmob1.png')}/></div>
                    <div className='profit_content'>
                      <strong>Easy</strong>
                      <p>You can easily do every steps with confidence.</p>
                    </div>
                  </div>
                  <div className='col-xs-12 clearfix'>
                    <div className='side_icon'><img src={require('../../../images/side_iconmob2.png')}/></div>
                    <div className='profit_content'>
                      <strong>Fast</strong>
                      <p>We make sure your waiting time to get your loans at minimum.</p>
                    </div>
                  </div>
                  <div className='col-xs-12 clearfix'>
                    <div className='side_icon'><img src={require('../../../images/side_iconmob3.png')}/></div>
                    <div className='profit_content'>
                      <strong>Secure</strong>
                      <p>All information you shares are safe with us.</p>
                    </div>
                  </div>
                  <div className='col-xs-12 clearfix'>
                    <div className='side_icon'><img src={require('../../../images/side_iconmob4.png')}/></div>
                    <div className='profit_content'>
                      <strong>Since childhood</strong>
                      <p>You will get your loans once you completed the process.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='scroll_section2 scroll_section'>
                <div className='text-center'>
                  <div className='top_head'>
                    <h3>What they says</h3>
                  </div>
                  <div className='top_links'>

                  </div>
                </div>
                <div className='sidebar_menu_sec clearfix'>
                  <div className='text-center'>
                    <div id='myCarousell' className='carousel slide' data-ride='carousel'>

                      <div className='carousel-inner' role='listbox'>
                        <div className='item active'>
                          <div className='user_image'><img src={require('../../../images/test1.jpg')}
                                                           className='img-circle'/></div>
                          <div className='user_review'><h5>Quick and easy!</h5></div>
                          <div className='user_review_cont'>
                            <i>It was quick and easy. Very fair interest rate. I recommend DanaKita to all.</i>
                          </div>
                          <div className='user_name'>
                            <span>Endang Supomo</span>
                            <span className='occupation'>,	Mining Engineer</span>
                          </div>
                        </div>

                        <div className='item'>
                          <div className='user_image'><img src={require('../../../images/test2.jpg')}
                                                           className='img-circle'/></div>
                          <div className='user_review'><h5>We were lucky to find DanaKita</h5></div>
                          <div className='user_review_cont'>
                            <i>We want to do the best for our children, so when we needed some extra money to pay for
                              their school fees, we were lucky to find DanaKita</i>
                          </div>
                          <div className='user_name'>
                            <span>Nurdin and Syaridah</span><
                            span className='occupation'>,	BUMN Officer</span>
                          </div>
                        </div>

                        <div className='item'>
                          <div className='user_image'><img src={require('../../../images/test3.jpg')}
                                                           className='img-circle'/></div>
                          <div className='user_review'><h5>It has been very helpful!</h5></div>
                          <div className='user_review_cont'>
                            <i>When I needed to pay for my father's medical treatment, DanaKita was there to help
                              me.</i>
                          </div>
                          <div className='user_name'>
                            <span>Adolphus Sitorus</span>
                            <span className='occupation'>,	Accounting Staff</span>
                          </div>
                        </div>
                      </div>


                      <div className='texti_control'>
                        <a className='left carousel-control' href='#myCarousell' role='button' data-slide='prev'>
                          <img src={require('../../../images/leftarrowgray.png')}/>
                        </a>
                        <a className='right carousel-control' href='#myCarousell' role='button' data-slide='next'>
                          <img src={require('../../../images/rightarrowgray.png')}/>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className='scroll_section3 scroll_section'>
                <div className='text-center'>
                  <div className='top_head'>
                    <h5>Our partner</h5>
                  </div>
                </div>
                <div className='sidebar_menu_sec clearfix'>

                  <div className='text-center'>
                    <img src={require('../../../images/partners.png')}/>
                  </div>
                  <div className='show_more'><a href='#'>Show more</a></div>
                </div>
              </div>

              <div className='scroll_section4 scroll_section'>

                <div className='sidebar_menu_sec clearfix'>

                  <div className=''>
                    <div className='other_links'>
                      <div>
                        <ul>
                          <li><a href='#'>About</a></li>
                          <li><a href='#'>How it works</a></li>
                          <li><a href='#'>Press</a></li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <li><a href='#'>Partners</a></li>
                          <li><a href='#'>Coverage</a></li>
                          <li><a href='#'>Terms</a></li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <li><a href='#'>Careers</a></li>
                          <li><a href='#'>Privacy</a></li>
                          <li><a href='#'>Contact us</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className='social_follow'>
                      <div className='top_head'>
                        <h5>Follow us on</h5>
                      </div>
                      <div className='social_links'>
                        <ul>
                          <li><a href='#'><img src={require('../../../images/fb.png')}/></a></li>
                          <li><a href='#'><img src={require('../../../images/linkedin.png')}/></a></li>
                          <li><a href='#'><img src={require('../../../images/twitter.png')}/></a></li>
                        </ul>
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

