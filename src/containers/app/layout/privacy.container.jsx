import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import translate from 'counterpart';

export class PrivacyContainer extends React.Component {
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
            <div className='last_update'>
              <h3>{this.locale.privacy_policy.heading}</h3>
              <span>Last Updated: 2nd February 2017</span>
            </div>
            <div className='row'>
              <div className='col-sm-12 col-xs-12'>
                <div className='privacy_cont'>
                  <div>
                    <div className='main_cont_prv'>
                      <p>{this.locale.privacy_policy.point1}</p>
                      <p>{this.locale.privacy_policy.point2}</p>
                      <p>{this.locale.privacy_policy.point3}</p>
                      <p>{this.locale.privacy_policy.point4}
                        <a href='mailto:webmaster@danakita.com' target='_top'>webmaster@danakita.com</a>
                      </p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.privacy_policy.heading1}</h5>
                      <p>{this.locale.privacy_policy.content1}</p>
                      <p>{this.locale.privacy_policy.content2}</p>
                      <p>{this.locale.privacy_policy.content3}</p>
                      <p>{this.locale.privacy_policy.content4}</p>
                      <p>{this.locale.privacy_policy.content5}</p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.privacy_policy.heading2}</h5>
                      <p><strong>{this.locale.privacy_policy.content6}</strong></p>
                      <ul>
                        <li><p>{this.locale.privacy_policy.subcontent1}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent2}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent3}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent4}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent5}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent6}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent7}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent8}</p>
                          <p>{this.locale.privacy_policy.subcontent9}</p>
                          <p>{this.locale.privacy_policy.subcontent10}</p>
                        </li>
                      </ul>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.privacy_policy.heading3}</h5>
                      <p>{this.locale.privacy_policy.content7}</p>
                      <p>{this.locale.privacy_policy.content8}</p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.privacy_policy.heading4}</h5>
                      <p>{this.locale.privacy_policy.content9}</p>
                      <p>{this.locale.privacy_policy.content10}</p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.privacy_policy.heading5}</h5>
                      <p>{this.locale.privacy_policy.content11}</p>
                      <p>{this.locale.privacy_policy.content12}</p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.privacy_policy.heading6}</h5>
                      <p><strong>{this.locale.privacy_policy.content13}</strong></p>
                      <ul>
                        <li><p>{this.locale.privacy_policy.subcontent11}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent12}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent13}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent14}</p></li>
                      </ul>
                      <p>
                        {this.locale.privacy_policy.subcontent15}
                      </p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.privacy_policy.heading7}</h5>
                      <p>{this.locale.privacy_policy.content14}</p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.privacy_policy.heading8}</h5>
                      <p>{this.locale.privacy_policy.content15}</p>
                      <p><strong>{this.locale.privacy_policy.content16}</strong></p>
                      <ul>
                        <li><p>{this.locale.privacy_policy.subcontent16}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent17}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent18}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent19}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent20}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent21}</p></li>
                      </ul>
                      <p>{this.locale.privacy_policy.subcontent22}</p>
                      <p>{this.locale.privacy_policy.subcontent23}</p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.privacy_policy.heading9}</h5>
                      <p>{this.locale.privacy_policy.content17}</p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.privacy_policy.heading10}</h5>
                      <p>{this.locale.privacy_policy.content18}</p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.privacy_policy.heading11}</h5>
                      <p>{this.locale.privacy_policy.content19}</p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.privacy_policy.heading12}</h5>
                      <p>{this.locale.privacy_policy.content20}
                        <a href='mailto:webmaster@danakita.com' target='_top'>webmaster@danakita.com.</a>
                      </p>
                    </div>
                  </div>
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
            <div className='text-center sec0head col-sm-12 col-xs-12'>
              <h5>{this.locale.privacy_policy.heading}</h5>
            </div>
            <div className='clearfix'>
              <div className='col-sm-12 col-xs-12'>
                <div className='privacy_cont'>
                  <div>
                    <div className='main_cont_prv'>
                      <p>{this.locale.privacy_policy.point1}</p>
                      <p>{this.locale.privacy_policy.point2}</p>
                      <p>{this.locale.privacy_policy.point3}</p>
                      <p>{this.locale.privacy_policy.point4}
                        <a href='mailto:webmaster@danakita.com' target='_top'>webmaster@danakita.com</a>
                      </p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.privacy_policy.heading1}</h5>
                      <p>{this.locale.privacy_policy.content1}</p>
                      <p>{this.locale.privacy_policy.content2}</p>
                      <p>{this.locale.privacy_policy.content3}</p>
                      <p>{this.locale.privacy_policy.content4}</p>
                      <p>{this.locale.privacy_policy.content5}</p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.privacy_policy.heading2}</h5>
                      <p><strong>{this.locale.privacy_policy.content6}</strong></p>
                      <ul>
                        <li><p>{this.locale.privacy_policy.subcontent1}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent2}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent3}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent4}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent5}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent6}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent7}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent8}</p>
                          <p>{this.locale.privacy_policy.subcontent9}</p>
                          <p>{this.locale.privacy_policy.subcontent10}</p>
                        </li>
                      </ul>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.privacy_policy.heading3}</h5>
                      <p>{this.locale.privacy_policy.content7}</p>
                      <p>{this.locale.privacy_policy.content8}</p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.privacy_policy.heading4}</h5>
                      <p>{this.locale.privacy_policy.content9}</p>
                      <p>{this.locale.privacy_policy.content10}</p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.privacy_policy.heading5}</h5>
                      <p>{this.locale.privacy_policy.content11}</p>
                      <p>{this.locale.privacy_policy.content12}</p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.privacy_policy.heading6}</h5>
                      <p><strong>{this.locale.privacy_policy.content13}</strong></p>
                      <ul>
                        <li><p>{this.locale.privacy_policy.subcontent11}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent12}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent13}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent14}</p></li>
                      </ul>
                      <p>
                        {this.locale.privacy_policy.subcontent15}
                      </p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.privacy_policy.heading7}</h5>
                      <p>{this.locale.privacy_policy.content14}</p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.privacy_policy.heading8}</h5>
                      <p>{this.locale.privacy_policy.content15}</p>
                      <p><strong>{this.locale.privacy_policy.content16}</strong></p>
                      <ul>
                        <li><p>{this.locale.privacy_policy.subcontent16}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent17}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent18}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent19}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent20}</p></li>
                        <li><p>{this.locale.privacy_policy.subcontent21}</p></li>
                      </ul>
                      <p>{this.locale.privacy_policy.subcontent22}</p>
                      <p>{this.locale.privacy_policy.subcontent23}</p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.privacy_policy.heading9}</h5>
                      <p>{this.locale.privacy_policy.content17}</p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.privacy_policy.heading10}</h5>
                      <p>{this.locale.privacy_policy.content18}</p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.privacy_policy.heading11}</h5>
                      <p>{this.locale.privacy_policy.content19}</p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.privacy_policy.heading12}</h5>
                      <p>{this.locale.privacy_policy.content20}
                        <a href='mailto:webmaster@danakita.com' target='_top'>webmaster@danakita.com.</a>
                      </p>
                    </div>
                  </div>
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

