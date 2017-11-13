import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import translate from 'counterpart';

export class ContactUsContainer extends React.Component {
  static propTypes = {
    children: PropTypes.any
  };

  locale = translate('layout');

  componentWillReceiveProps() {
    this.locale = translate('layout');
  }

  render() {
    return (
      <div>
        <div className='middle_content'>
          <div className='about contact'>
            <h3>{this.locale.Contactpage.Contactheader}</h3>
            <div className='mid_con'>
            </div>
            <div className='row'>
              <div className='col-sm-5 col-xs-12'>
                <div className='contact_address'>
                  <strong>PT Danakita Data Prima</strong>
                  <p>
                    {this.locale.Contactpage.addresspart1} <br/>
                    {this.locale.Contactpage.addresspart2} <br/>
                    {this.locale.Contactpage.addresspart3} <br/>
                    {this.locale.Contactpage.addresspart4}
                  </p>
                </div>
                <div className='contact_phone'>
                  <div><i className='fa fa-phone'/> <span>+62-21-576-1770</span></div>
                  <div><i className='fa fa-envelope'/>
                    <span>
                      <a href='mailto:webmaster@danakita.com' target='_top'>webmaster@danakita.com</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-sm-7 col-xs-12'>
                <div className='map'>
                  {/* eslint-disable*/}
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.277560826088!2d106.8238833147692!3d-6.227088995492349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3fb2e71c159%3A0x1e16e11118c6c58c!2sMenara+Rajawali%2C+Jl.+Lingkar+Mega+Kuningan!5e0!3m2!1sen!2sin!4v1492083797424'
                    width='100%' height='252px' style={{border: 0}}></iframe>
                  {/* eslint-enable*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='desktop_footer clearfix'>
          <div className='desktop_img'>
            <img src={require('../../../images/foot_img.png')}/>
          </div>
          <div className='foot_cont'>
            <p>{this.locale.layoutcontent.Footerdata}</p>
          </div>
        </div>
        <div className='mobile_content'>
          <div className='mobile_ban'><span>{this.locale.layoutside.Borrow}</span></div>
          <div className='scroll_section0 scroll_section about contact'>
            <div className='text-center sec0head'>
              <h5>{this.locale.Contactpage.Contactheader}</h5>
            </div>
            <div className='clearfix contact_mob text-center'>
              <div className='col-sm-12 col-xs-12'>
                <div className='contact_address'>
                  <strong>PT Danakita Data Prima</strong>
                  <p>
                    {this.locale.Contactpage.addresspart1} <br/>
                    {this.locale.Contactpage.addresspart2} <br/>
                    {this.locale.Contactpage.addresspart3} <br/>
                    {this.locale.Contactpage.addresspart4}
                  </p>
                </div>
                <div className='contact_phone'>
                  <div><i className='fa fa-phone'/> <span>+62-21-576-1770</span></div>
                  <div><i className='fa fa-envelope'/>
                    <span>
                      <a href='mailto:webmaster@danakita.com' target='_top'>webmaster@danakita.com</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-sm-12 col-xs-12'>
                <div className='map'>
                  {/* eslint-disable*/}
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.277560826088!2d106.8238833147692!3d-6.227088995492349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3fb2e71c159%3A0x1e16e11118c6c58c!2sMenara+Rajawali%2C+Jl.+Lingkar+Mega+Kuningan!5e0!3m2!1sen!2sin!4v1492083797424'
                    width='100%' height='252px' style={{border: 0}}></iframe>
                  {/* eslint-enable*/}
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
                      <li><Link to='/faq'>{this.locale.links.FAQ}</Link></li>
                      <li><Link to='/our-team'>{this.locale.links.OurTeam}</Link></li>
                      <li><Link to='/contact-us'>{this.locale.links.Contact}</Link></li>
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
