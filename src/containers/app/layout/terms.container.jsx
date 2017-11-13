import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import translate from 'counterpart';

// contact presentational component
export class TermsContainer extends React.Component {
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
              <h3>{this.locale.terms_of_service.heading}</h3>
              <span>{this.locale.terms_of_service.updated_at}</span>
            </div>
            <div className='row'>
              <div className='col-sm-12 col-xs-12'>
                <div className='privacy_cont'>
                  <div>
                    <div className='main_cont_prv'>
                      <p>{this.locale.terms_of_service.heading1}</p>
                      <p>{this.locale.terms_of_service.heading2}</p>
                      <p>{this.locale.terms_of_service.heading3}</p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.terms_of_service.heading4}</h5>
                      <p>{this.locale.terms_of_service.content1}</p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.terms_of_service.heading5}</h5>
                      <p><strong>{this.locale.terms_of_service.content2}</strong></p>

                      <p><strong>{this.locale.terms_of_service.content3}</strong></p>
                      <ul>
                        <li><p>{this.locale.terms_of_service.subcontent1}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent2}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent3}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent4}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent5}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent6}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent7}</p></li>
                      </ul>
                      <p><strong>{this.locale.terms_of_service.content4}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content5}</strong></p>
                      <ul>
                        <li><p>{this.locale.terms_of_service.subcontent8}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent9}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent10}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent11}</p></li>
                      </ul>
                      <p><strong>{this.locale.terms_of_service.content6}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content7}</strong></p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.terms_of_service.heading6}</h5>
                      <p><strong>{this.locale.terms_of_service.content8}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content9}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content10}</strong></p>
                      <ul>
                        <li><p>{this.locale.terms_of_service.subcontent12}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent13}</p></li>
                      </ul>
                      <p><strong>{this.locale.terms_of_service.content11}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content12}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content13}</strong></p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.terms_of_service.heading7}</h5>
                      <p><strong>{this.locale.terms_of_service.content14}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content15}</strong></p>
                      <ul>
                        <li><p>{this.locale.terms_of_service.subcontent14}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent15}</p></li>
                      </ul>
                      <p>{this.locale.terms_of_service.subcontent16}</p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.terms_of_service.heading8}</h5>
                      <p><strong>{this.locale.terms_of_service.content16}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content17}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content18}</strong></p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.terms_of_service.heading9}</h5>
                      <p><strong>{this.locale.terms_of_service.content19}</strong></p>
                      <ul>
                        <li><p>{this.locale.terms_of_service.subcontent17}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent18}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent19}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent20}</p></li>
                      </ul>
                      <p><strong>{this.locale.terms_of_service.content20}</strong></p>
                      <ul>
                        <li><p>{this.locale.terms_of_service.subcontent21}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent22}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent23}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent24}</p></li>
                      </ul>
                      <p><strong>{this.locale.terms_of_service.content21}</strong></p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.terms_of_service.heading10}</h5>
                      <p><strong>{this.locale.terms_of_service.content22}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content23}</strong></p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.terms_of_service.heading11}</h5>
                      <p><strong>{this.locale.terms_of_service.content24}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content25}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content26} <Link to='/privacy'>Privacy
                        Policy</Link> {this.locale.terms_of_service.content262}</strong></p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.terms_of_service.heading12}</h5>
                      <p><strong>{this.locale.terms_of_service.content27}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content28}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content29}</strong></p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.terms_of_service.heading13}</h5>
                      <p><strong>{this.locale.terms_of_service.content30}</strong></p>
                      <ul>
                        <li><p>{this.locale.terms_of_service.subcontent25}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent26}</p></li>
                      </ul>
                      <p><strong>{this.locale.terms_of_service.content31}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content32}</strong></p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.terms_of_service.heading14}</h5>
                      <p><strong>{this.locale.terms_of_service.content33}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content34}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content35}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content36}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content37}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content38}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content39}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content40}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content41}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content42}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content43}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content44}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content45}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content46}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content47}</strong></p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.terms_of_service.heading15}</h5>
                      <p><strong>{this.locale.terms_of_service.content48}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content49}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content50}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content51}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content52}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content53}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content54}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content55}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content56}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content57}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content58}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content59} <Link to='/privacy'>Privacy
                        Policy</Link></strong>
                      </p>
                      <p><strong>{this.locale.terms_of_service.content60}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content61}</strong></p>
                      <ul>
                        <li><p>{this.locale.terms_of_service.subcontent27}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent28}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent29}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent30}</p></li>
                      </ul>
                      <p><strong>{this.locale.terms_of_service.content62}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content63}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content64}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content65}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content66}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content67}</strong></p>
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
              <h3>{this.locale.terms_of_service.heading}</h3>
            </div>

            <div className='clearfix'>

              <div className='col-sm-12 col-xs-12'>
                <div className='privacy_cont'>
                  <div>
                    <div className='main_cont_prv'>
                      <p>{this.locale.terms_of_service.heading1}</p>
                      <p>{this.locale.terms_of_service.heading2}</p>
                      <p>{this.locale.terms_of_service.heading3}</p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.terms_of_service.heading4}</h5>
                      <p>{this.locale.terms_of_service.content1}</p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.terms_of_service.heading5}</h5>
                      <p><strong>{this.locale.terms_of_service.content2}</strong></p>

                      <p><strong>{this.locale.terms_of_service.content3}</strong></p>
                      <ul>
                        <li><p>{this.locale.terms_of_service.subcontent1}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent2}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent3}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent4}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent5}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent6}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent7}</p></li>
                      </ul>
                      <p><strong>{this.locale.terms_of_service.content4}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content5}</strong></p>
                      <ul>
                        <li><p>{this.locale.terms_of_service.subcontent8}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent9}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent10}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent11}</p></li>
                      </ul>
                      <p><strong>{this.locale.terms_of_service.content6}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content7}</strong></p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.terms_of_service.heading6}</h5>
                      <p><strong>{this.locale.terms_of_service.content8}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content9}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content10}</strong></p>
                      <ul>
                        <li><p>{this.locale.terms_of_service.subcontent12}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent13}</p></li>
                      </ul>
                      <p><strong>{this.locale.terms_of_service.content11}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content12}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content13}</strong></p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.terms_of_service.heading7}</h5>
                      <p><strong>{this.locale.terms_of_service.content14}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content15}</strong></p>
                      <ul>
                        <li><p>{this.locale.terms_of_service.subcontent14}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent15}</p></li>
                      </ul>
                      <p>{this.locale.terms_of_service.subcontent16}</p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.terms_of_service.heading8}</h5>
                      <p><strong>{this.locale.terms_of_service.content16}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content17}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content18}</strong></p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.terms_of_service.heading9}</h5>
                      <p><strong>{this.locale.terms_of_service.content19}</strong></p>
                      <ul>
                        <li><p>{this.locale.terms_of_service.subcontent17}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent18}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent19}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent20}</p></li>
                      </ul>
                      <p><strong>{this.locale.terms_of_service.content20}</strong></p>
                      <ul>
                        <li><p>{this.locale.terms_of_service.subcontent21}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent22}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent23}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent24}</p></li>
                      </ul>
                      <p><strong>{this.locale.terms_of_service.content21}</strong></p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.terms_of_service.heading10}</h5>
                      <p><strong>{this.locale.terms_of_service.content22}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content23}</strong></p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.terms_of_service.heading11}</h5>
                      <p><strong>{this.locale.terms_of_service.content24}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content25}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content26} <Link to='/privacy'>Privacy
                        Policy</Link> {this.locale.terms_of_service.content262}</strong></p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.terms_of_service.heading12}</h5>
                      <p><strong>{this.locale.terms_of_service.content27}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content28}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content29}</strong></p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.terms_of_service.heading13}</h5>
                      <p><strong>{this.locale.terms_of_service.content30}</strong></p>
                      <ul>
                        <li><p>{this.locale.terms_of_service.subcontent25}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent26}</p></li>
                      </ul>
                      <p><strong>{this.locale.terms_of_service.content31}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content32}</strong></p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.terms_of_service.heading14}</h5>
                      <p><strong>{this.locale.terms_of_service.content33}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content34}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content35}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content36}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content37}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content38}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content39}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content40}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content41}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content42}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content43}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content44}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content45}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content46}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content47}</strong></p>
                    </div>
                    <div className='clause'>
                      <h5>{this.locale.terms_of_service.heading15}</h5>
                      <p><strong>{this.locale.terms_of_service.content48}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content49}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content50}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content51}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content52}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content53}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content54}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content55}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content56}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content57}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content58}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content59} <Link to='/privacy'>Privacy
                        Policy</Link></strong>
                      </p>
                      <p><strong>{this.locale.terms_of_service.content60}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content61}</strong></p>
                      <ul>
                        <li><p>{this.locale.terms_of_service.subcontent27}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent28}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent29}</p></li>
                        <li><p>{this.locale.terms_of_service.subcontent30}</p></li>
                      </ul>
                      <p><strong>{this.locale.terms_of_service.content62}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content63}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content64}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content65}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content66}</strong></p>
                      <p><strong>{this.locale.terms_of_service.content67}</strong></p>
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

