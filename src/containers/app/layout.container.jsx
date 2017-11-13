import React from 'react';
import {Link} from 'react-router';
import * as script from '../../js/layout.js';
import '../../styles/css/customHomepage.css';
import '../../styles/css/customHomepageResponsive.css';
import counterpart from 'counterpart';
import translate from 'counterpart';
import PropTypes from 'prop-types';
import {LanguageSwitcher} from '../../components/language-switcher/language-switcher.jsx';
import {connect} from 'react-redux';

counterpart.registerTranslations('en', require('../../locales/en'));
counterpart.registerTranslations('id', require('../../locales/id'));

class LayoutContainerComponent extends React.Component {
  static propTypes = {
    children: PropTypes.any
  };

  locale = translate('layout');

  componentDidMount() {
    script.layout.init();
  }

  componentWillReceiveProps() {
    this.locale = translate('layout');
  }

  render() {
    // const locale = this.state.locale;
    return (
      <div className='container-fluid home_layout'>
        <div className='row'>
          <div className='sidebar_home'>
            <div className='scroll_section1  scroll_section'>
              <div className='text-center'>
                <div>
                  <img src={require('../../images/logo.png')}/>
                </div>
                <div className='top_links'>
                  <span>{this.locale.layoutside.Borrow} </span>
                </div>
              </div>
              <div className='sidebar_menu_sec clearfix'>
                <div className='col-sm-6 col-xs-12 text-center'>
                  <div className='side_icon'>
                    <img src={require('../../images/profit1.png')}/>
                  </div>
                  <strong>{this.locale.layoutside.Convenient}</strong>
                  <p>{this.locale.mobile.simple}</p>
                </div>
                <div className='col-sm-6 col-xs-12 text-center'>
                  <div className='side_icon'><img src={require('../../images/profit2.png')}/></div>
                  <strong>{this.locale.layoutside.Collateral}</strong>
                  <p>{this.locale.mobile.fast}</p>
                </div>
                <div className='col-sm-6 col-xs-12 text-center'>
                  <div className='side_icon'><img src={require('../../images/profit3.png')}/></div>
                  <strong>{this.locale.layoutside.Fast1}</strong>
                  <p>{this.locale.mobile.secure}</p>
                </div>
                <div className='col-sm-6 col-xs-12 text-center'>
                  <div className='side_icon'><img src={require('../../images/profit4.png')}/></div>
                  <strong>{this.locale.layoutside.Transparent}</strong>
                  <p>{this.locale.mobile.childhood}</p>
                </div>
              </div>
            </div>
            <div className='scroll_section2 scroll_section'>
              <div className='text-center'>
                <div className='top_head'>
                </div>
                <div className='top_links'/>
              </div>
              <div className='sidebar_menu_sec clearfix'>
                <div className='text-center'>
                  <div id='myCarousel' className='carousel slide' data-ride='carousel'>
                    <div className='carousel-inner' role='listbox'>
                      <div className='item active'>
                        <div className='user_image'><img src={require('../../images/test1.jpg')}
                          className='img-circle'/></div>
                        <div className='user_review'>
                          <h5>{this.locale.layoutside.scrolldata1}</h5>
                        </div>
                        <div className='user_review_cont'><i>{this.locale.layoutside.scrolldata2}</i></div>
                        <div className='user_name'><span>{this.locale.layoutside.scrolldata3}</span><span
                          className='occupation'>{this.locale.layoutside.scrolldata4}</span></div>
                      </div>
                      <div className='item'>
                        <div className='user_image'><img src={require('../../images/test2.jpg')}
                          className='img-circle'/></div>
                        <div className='user_review'>
                          <h5>{this.locale.layoutside.scrolldata5}</h5>
                        </div>
                        <div className='user_review_cont'><i>{this.locale.layoutside.scrolldata6}</i></div>
                        <div className='user_name'><span>{this.locale.layoutside.scrolldata7}</span><span
                          className='occupation'>{this.locale.layoutside.scrolldata8}</span></div>
                      </div>
                      <div className='item'>
                        <div className='user_image'><img src={require('../../images/test3.jpg')}
                          className='img-circle'/></div>
                        <div className='user_review'>
                          <h5>{this.locale.layoutside.scrolldata9}</h5>
                        </div>
                        <div className='user_review_cont'><i>{this.locale.layoutside.scrolldata10}</i></div>
                        <div className='user_name'><span>{this.locale.layoutside.scrolldata11}</span><span
                          className='occupation'>{this.locale.layoutside.scrolldata12}</span></div>
                      </div>
                    </div>
                    <div className='texti_control'><a className='left carousel-control' href='#myCarousel' role='button'
                      data-slide='prev'> <img
                        src={require('../../images/leftarrow.png')}/> </a> <a className='right carousel-control'
                      href='#myCarousel' role='button'
                      data-slide='next'> <img
                        src={require('../../images/rightarrow.png')}/> </a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='scroll_section2 scroll_section'>
              <div className='text-center'>
                <div className='top_head'>
                  <h3>{this.locale.ourpartners.heading}</h3>
                </div>
                <div className='top_links'/>
              </div>
              <div className='sidebar_menu_sec clearfix'>
                <div className='text-center'>
                  <div id='myCarousell' className='carousel slide partner_slide' data-ride='carousel'>
                    <div className='carousel-inner' role='listbox'>
                      <div className='item active'>
                        <a href='https://www.bca.co.id/' target='_blank'>
                          <div className='user_image'><img src={require('../../images/partner1.png')}/></div>
                          <div className='user_review'>
                            <h5>{this.locale.ourpartners.role1}</h5>
                          </div>
                        </a>
                      </div>
                      <div className='item'>
                        <a href='http://www.bankmandiri.co.id/' target='_blank'>
                          <div className='user_image'><img src={require('../../images/partner2.png')}/></div>
                          <div className='user_review'>
                            <h5>{this.locale.ourpartners.role2}</h5>
                          </div>
                        </a>
                      </div>
                      <div className='item'>
                        <a href='http://www.pefindo.com/' target='_blank'>
                          <div className='user_image'><img src={require('../../images/partner3.png')}/></div>
                          <div className='user_review'>
                            <h5>{this.locale.ourpartners.role3}</h5>
                          </div>
                        </a>
                      </div>
                      <div className='item'>
                        <a href='http://hprplawyers.com/' target='_blank'>
                          <div className='user_image'><img src={require('../../images/partner4.png')}/></div>
                          <div className='user_review'>
                            <h5>{this.locale.ourpartners.role4}</h5>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className='texti_control'><a className='left carousel-control' href='#myCarousell'
                      role='button' data-slide='prev'> <img
                        src={require('../../images/leftarrow.png')}/> </a> <a className='right carousel-control'
                      href='#myCarousell' role='button'
                      data-slide='next'> <img
                        src={require('../../images/rightarrow.png')}/> </a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='scroll_section4 scroll_section'>
              <div className='text-center'>
                <div className='top_head'/>
                <div className='top_links'/>
              </div>
              <div className='sidebar_menu_sec clearfix'>
                <div className=''>
                  <div className='other_links'>
                    <div>
                      <ul>
                        <li><Link to='/faq'>{this.locale.links.FAQ}</Link></li>
                        <li><Link to='/our-team'>{this.locale.links.OurTeam}</Link></li>
                        <li><Link to='/'>{this.locale.links.Home}</Link></li>
                        <li><Link to='/privacy'>{this.locale.layoutside.toplink8}</Link></li>
                        <li><Link to='/terms'>{this.locale.layoutside.toplink6}</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className='social_follow'>
                    <div className='top_head'>
                      <h5>{this.locale.layoutside.toplinkheader}</h5>
                    </div>
                    <div className='social_links'>
                      <ul>
                        <li><a href='https://www.facebook.com/danakitadata/' target='_blank'><img
                          src={require('../../images/fb.png')}/></a></li>
                        <li><a href='https://www.linkedin.com/company/danakita' target='_blank'><img
                          src={require('../../images/linkedin.png')}/></a></li>
                        <li><a href='https://twitter.com/danakitadata' target='_blank'><img
                          src={require('../../images/twitter.png')}/></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='right_panel'>
            <div className='lang'>
              <LanguageSwitcher/>
              <nav className='navbar navbar-inverse' data-spy='affix' data-offset-top='197'>
                <div className='container-fluid'>
                  <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                      <span className='icon-bar'/>
                      <span className='icon-bar'/>
                      <span className='icon-bar'/>
                    </button>
                    <a className='navbar-brand ' href='#'><img src={require('../../images/dana.png')}/>
                      <span>DanaKita</span></a>
                  </div>
                  <div>
                    <div className='collapse navbar-collapse' id='myNavbar'>
                      <ul className='nav navbar-nav'>
                        <li><Link to='/'>{this.locale.links.Home}</Link></li>
                        <li><Link to='/faq'>{this.locale.links.FAQ}</Link></li>
                        <li><Link to='/our-team'>{this.locale.links.OurTeam}</Link></li>
                        <li><Link to='/contact-us'>{this.locale.links.Contact}</Link></li>
                        <li><Link to='/login' className='button'>{this.locale.links.Signin}</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className='desk_cont'> {this.props.children} </div>
          </div>
        </div>
      </div>
    );
  }
}

export const LayoutContainer = connect(({language}) => {
  return {
    language
  };
})(LayoutContainerComponent);
