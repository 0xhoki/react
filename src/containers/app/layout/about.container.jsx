import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

export class AboutUsContainer extends React.Component {
  static propTypes = {
    locale: PropTypes.object
  };

  render() {
    const locale = this.props.locale;
    return (
      <div>
        <div className='middle_content'>
          <div className='about'>
            <h3>{locale.Aboutpage.Aboutheader}</h3>
            <div className='mid_con'>
              <p>
                {locale.Aboutpage.AboutContent1}
              </p>
              <p>
                {locale.Aboutpage.AboutContent2}
              </p>
            </div>
          </div>
        </div>
        <div className='desktop_footer clearfix'>
          <div className='desktop_img'>
            <img src={require('../../../images/foot_img.png')}/>
          </div>
          <div className='foot_cont'>
            <p>{locale.layoutcontent.Footerdata}</p>
          </div>
        </div>
        <div className='mobile_content'>
          <div className='mobile_ban'><span>{locale.layoutside.Borrow}</span></div>
          <div className='scroll_section0 scroll_section about'>
            <div className='text-center sec0head'>
              <h5>{locale.Aboutpage.Aboutheader}</h5>
            </div>
            <div className='sec_0'>
              <p>
                {locale.Aboutpage.AboutContent1}
              </p>
              <p>
                {locale.Aboutpage.AboutContent2}
              </p>
            </div>
            <div className='slide_arrow text-center'><a href='#scroll_section1'><i className='fa fa-angle-down'
                                                                                   aria-hidden='true'/> </a></div>
          </div>
          <div className='scroll_section1 scroll_section' id='scroll_section1'>
            <div className='mobile_foot'>
              <div className='mobile_footer clearfix text-center'>
                <div className='desktop_img'>
                  <img src={require('../../../images/foot_img.png')}/>
                </div>
                <div className='foot_cont'>
                  <p>{locale.layoutcontent.Footerdata}</p>
                </div>
              </div>
            </div>
            <div className='text-center'>
              <div>
                <h5>{locale.layoutside.profit}</h5>
              </div>
            </div>
            <div className='sidebar_menu_sec clearfix'>
              <div className='col-xs-12 clearfix'>
                <div className='side_icon'><img src={require('../../../images/profit1mob.png')}/></div>
                <div className='profit_content'>
                  <strong>{locale.layoutside.Convenient}</strong>
                  <p>{locale.mobile.simple}</p>
                </div>
              </div>
              <div className='col-xs-12 clearfix'>
                <div className='side_icon'><img src={require('../../../images/profit2mob.png')}/></div>
                <div className='profit_content'>
                  <strong>{locale.layoutside.Collateral}</strong>
                  <p>{locale.mobile.fast}</p>
                </div>
              </div>
              <div className='col-xs-12 clearfix'>
                <div className='side_icon'><img src={require('../../../images/profit3mob.png')}/></div>
                <div className='profit_content'>
                  <strong>{locale.layoutside.Fast1}</strong>
                  <p>{locale.mobile.secure}</p>
                </div>
              </div>
              <div className='col-xs-12 clearfix'>
                <div className='side_icon'><img src={require('../../../images/profit4mob.png')}/></div>
                <div className='profit_content'>
                  <strong>{locale.layoutside.Transparent}</strong>
                  <p>{locale.mobile.childhood}</p>
                </div>
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
                <div id='myCarousell' className='carousel slide' data-ride='carousel'>
                  <div className='carousel-inner' role='listbox'>
                    <div className='item active'>
                      <div className='user_image'><img src={require('../../../images/test1.jpg')} className='img-circle'/>
                      </div>
                      <div className='user_review'>
                        <h5>{locale.layoutside.scrolldata1}</h5>
                      </div>
                      <div className='user_review_cont'><i>{locale.layoutside.scrolldata2}</i></div>
                      <div className='user_name'><span>{locale.layoutside.scrolldata3}</span><span
                        className='occupation'>{locale.layoutside.scrolldata4}</span></div>
                    </div>
                    <div className='item'>
                      <div className='user_image'><img src={require('../../../images/test2.jpg')} className='img-circle'/>
                      </div>
                      <div className='user_review'>
                        <h5>{locale.layoutside.scrolldata5}</h5>
                      </div>
                      <div className='user_review_cont'><i>{locale.layoutside.scrolldata6}</i></div>
                      <div className='user_name'><span>{locale.layoutside.scrolldata7}</span><span
                        className='occupation'>{locale.layoutside.scrolldata8}</span></div>
                    </div>
                    <div className='item'>
                      <div className='user_image'><img src={require('../../../images/test3.jpg')} className='img-circle'/>
                      </div>
                      <div className='user_review'>
                        <h5>{locale.layoutside.scrolldata9}</h5>
                      </div>
                      <div className='user_review_cont'><i>{locale.layoutside.scrolldata10}</i></div>
                      <div className='user_name'><span>{locale.layoutside.scrolldata11}</span><span
                        className='occupation'>{locale.layoutside.scrolldata12}</span></div>
                    </div>
                  </div>
                  <div className='texti_control'><a className='left carousel-control' href='#myCarousell' role='button'
                                                    data-slide='prev'> <img
                    src={require('../../../images/leftarrowgray.png')}/> </a> <a className='right carousel-control'
                                                                                 href='#myCarousell' role='button'
                                                                                 data-slide='next'> <img
                    src={require('../../../images/rightarrowgray.png')}/> </a></div>
                </div>
              </div>
            </div>
          </div>
          <div className='scroll_section2 scroll_section section_partner'>
            <div className='text-center'>
              <div className='top_head'>
                <h3>{locale.ourpartners.heading}</h3>
              </div>
            </div>
            <div className='sidebar_menu_sec clearfix'>
              <div className='text-center'>
                <div id='myCarouselll' className='carousel slide partner_slide' data-ride='carousel'>
                  <div className='carousel-inner' role='listbox'>
                    <div className='item active'>
                      <a href='https://www.bca.co.id/'>
                        <div className='user_image'><img src={require('../../../images/partner11.png')}/></div>
                        <div className='user_review'>
                          <h5>{locale.ourpartners.role1}</h5>
                        </div>
                      </a>
                    </div>
                    <div className='item'>
                      <a href='http://www.pefindo.com/'>
                        <div className='user_image'><img src={require('../../../images/partner3.png')}/></div>
                        <div className='user_review'>
                          <h5>{locale.ourpartners.role3}</h5>
                        </div>
                      </a>
                    </div>
                    <div className='item'>
                      <a href='http://hprplawyers.com/'>
                        <div className='user_image'><img src={require('../../../images/partner4.png')}/></div>
                        <div className='user_review'>
                          <h5>{locale.ourpartners.role4}</h5>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='texti_control'><a className='left carousel-control' href='#myCarouselll' role='button'
                                                    data-slide='prev'> <img
                    src={require('../../../images/leftarrowgray.png')}/> </a> <a className='right carousel-control'
                                                                                 href='#myCarouselll' role='button'
                                                                                 data-slide='next'> <img
                    src={require('../../../images/rightarrowgray.png')}/> </a></div>
                </div>
              </div>
            </div>
          </div>
          <div className='scroll_section4 scroll_section'>
            <div className='sidebar_menu_sec clearfix'>
              <div className=''>
                <div className='other_links'>
                  <div>
                    <ul>
                      <li><Link to='/faq'>{locale.links.FAQ}</Link></li>
                      <li><Link to='/our-team'>{locale.links.OurTeam}</Link></li>
                      <li><Link to='/contact-us'>{locale.links.Contact}</Link></li>
                      <li><Link to='/privacy'>{locale.layoutside.toplink8}</Link></li>
                      <li><Link to='/terms'>{locale.layoutside.toplink6}</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='social_follow'>
                  <div className='top_head'>
                    <h5>{locale.layoutside.toplinkheader}</h5>
                  </div>
                  <div className='social_links'>
                    <ul>
                      <li><a href='https://www.facebook.com/danakitadata/' target='_blank'><img
                        src={require('../../../images/fb.png')}/></a></li>
                      <li><a href='https://www.linkedin.com/company/danakita' target='_blank'><img
                        src={require('../../../images/linkedin.png')}/></a></li>
                      <li><a href='https://twitter.com/danakitadata' target='_blank'><img
                        src={require('../../../images/twitter.png')}/></a></li>
                    </ul>
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
