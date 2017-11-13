import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import translate from 'counterpart';

export class OurTeamContainer extends React.Component {
  static propTypes = {
    children: PropTypes.any
  };

  locale = translate('layout');

  componentWillReceiveProps() {
    this.locale = translate('layout');
  }

  render() {
    return (
      <div className='team_page'>
        <div className='middle_content'>
          <div className='about contact'>
            <div className='last_update'>
            </div>
            <div className='row'>
              <div className='col-sm-12 col-xs-12'>
                <div className='team_cont'>
                  <div className='row'>
                    <div className='col-sm-4 col-xs-12'>
                      <div className='card-containerr'>
                        <div className='card'>
                          <div className='front'>

                            <div className='user'>
                              <img className='img-circle' src={require('../../../images/Prakash.png')}/>
                            </div>
                            <div className='content'>
                              <div className='main'>
                                <h3 className='name'>Prakash Palaniappan</h3>
                                <p className='profession'>{this.locale.ourteam.position1}</p>
                              </div>
                              <div className='footer'>
                                <i className='fa fa-mail-forward'/> {this.locale.ourteam.view_bio}
                              </div>
                            </div>
                          </div>
                          <div className='back'>
                            <div className='header'>
                              <h4 className='text-center motto'>Bio</h4>
                            </div>
                            <div className='content'>
                              <div className='main'>
                                <div className='bio'>
                                  {this.locale.ourteam.bio1}
                                </div>
                              </div>
                            </div>
                            <div className='footer'>
                              <div className='social-links text-center'>
                                <a href='https://www.linkedin.com/in/praknarayanan/' className='facebook'><i
                                  className='fa fa-linkedin fa-fw'/></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-4 col-xs-12'>
                      <div className='card-containerr'>
                        <div className='card'>
                          <div className='front'>

                            <div className='user'>
                              <img className='img-circle' src={require('../../../images/David.png')}/>
                            </div>
                            <div className='content'>
                              <div className='main'>
                                <h3 className='name'>David Chiang</h3>
                                <p className='profession'>{this.locale.ourteam.position2}</p>
                              </div>
                              <div className='footer'>
                                <i className='fa fa-mail-forward'/> {this.locale.ourteam.view_bio}
                              </div>
                            </div>
                          </div>
                          <div className='back'>
                            <div className='header'>
                              <h4 className='text-center motto'>Bio</h4>
                            </div>
                            <div className='content'>
                              <div className='main'>
                                <div className='bio'>
                                  {this.locale.ourteam.bio2}
                                </div>
                              </div>
                            </div>
                            <div className='footer'>
                              <div className='social-links text-center'>
                                <a href='https://www.linkedin.com/in/david-chiang-96a37712/' className='facebook'><i
                                  className='fa fa-linkedin fa-fw'/></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-4 col-xs-12'>
                      <div className='card-containerr'>
                        <div className='card'>
                          <div className='front'>

                            <div className='user'>
                              <img className='img-circle' src={require('../../../images/Ray.png')}/>
                            </div>
                            <div className='content'>
                              <div className='main'>
                                <h3 className='name'>Ray Pulungan</h3>
                                <p className='profession'>Chairman</p>
                              </div>
                              <div className='footer'>
                                <i className='fa fa-mail-forward'/> {this.locale.ourteam.view_bio}
                              </div>
                            </div>
                          </div>
                          <div className='back'>
                            <div className='header'>
                              <h4 className='text-center motto'>Bio</h4>
                            </div>
                            <div className='content'>
                              <div className='main'>
                                <div className='bio'>
                                  {this.locale.ourteam.bio3}
                                </div>
                              </div>
                            </div>
                            <div className='footer'>
                              <div className='social-links text-center'>
                                <a href='https://www.linkedin.com/in/ray-zulfirman-parsioan-pulungan-067389/'
                                  className='facebook'><i className='fa fa-linkedin fa-fw'/></a>

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

            </div>

            <div className='clearfix'>

              <div className='col-sm-12 col-xs-12'>
                <div className='team_cont'>
                  <div className='row'>
                    <div className='col-sm-4 col-xs-12'>
                      <div className='card-containerr'>
                        <div className='card'>
                          <div className='front'>

                            <div className='user'>
                              <img className='img-circle' src={require('../../../images/Prakash.png')}/>
                            </div>
                            <div className='content'>
                              <div className='main'>
                                <h3 className='name'>Prakash Palaniappan</h3>
                                <p className='profession'>{this.locale.ourteam.position1}</p>
                              </div>
                              <div className='footer'>
                                <i className='fa fa-mail-forward'/> {this.locale.ourteam.view_bio}
                              </div>
                            </div>
                          </div>
                          <div className='back'>
                            <div className='header'>
                              <h4 className='text-center motto'>Bio</h4>
                            </div>
                            <div className='content'>
                              <div className='main'>
                                <div className='bio'>
                                  {this.locale.ourteam.bio1}
                                </div>
                              </div>
                            </div>
                            <div className='footer'>
                              <div className='social-links text-center'>
                                <a href='https://www.linkedin.com/in/praknarayanan/' className='facebook'><i
                                  className='fa fa-linkedin fa-fw'/></a>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-4 col-xs-12'>
                      <div className='card-containerr'>
                        <div className='card'>
                          <div className='front'>

                            <div className='user'>
                              <img className='img-circle' src={require('../../../images/David.png')}/>
                            </div>
                            <div className='content'>
                              <div className='main'>
                                <h3 className='name'>David Chiang</h3>
                                <p className='profession'>{this.locale.ourteam.position2}</p>
                              </div>
                              <div className='footer'>
                                <i className='fa fa-mail-forward'/> {this.locale.ourteam.view_bio}
                              </div>
                            </div>
                          </div>
                          <div className='back'>
                            <div className='header'>
                              <h4 className='text-center motto'>Bio</h4>
                            </div>
                            <div className='content'>
                              <div className='main'>
                                <div className='bio'>
                                  {this.locale.ourteam.bio2}
                                </div>
                              </div>
                            </div>
                            <div className='footer'>
                              <div className='social-links text-center'>
                                <a href='https://www.linkedin.com/in/david-chiang-96a37712/' className='facebook'><i
                                  className='fa fa-linkedin fa-fw'/></a>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-4 col-xs-12'>
                      <div className='card-containerr'>
                        <div className='card'>
                          <div className='front'>

                            <div className='user'>
                              <img className='img-circle' src={require('../../../images/Ray.png')}/>
                            </div>
                            <div className='content'>
                              <div className='main'>
                                <h3 className='name'>Ray Pulungan</h3>
                                <p className='profession'>Chairman</p>
                              </div>
                              <div className='footer'>
                                <i className='fa fa-mail-forward'/> {this.locale.ourteam.view_bio}
                              </div>
                            </div>
                          </div>
                          <div className='back'>
                            <div className='header'>
                              <h4 className='text-center motto'>Bio</h4>
                            </div>
                            <div className='content'>
                              <div className='main'>
                                <div className='bio'>
                                  {this.locale.ourteam.bio3}
                                </div>
                              </div>
                            </div>
                            <div className='footer'>
                              <div className='social-links text-center'>
                                <a href='https://www.linkedin.com/in/ray-zulfirman-parsioan-pulungan-067389/'
                                  className='facebook'><i className='fa fa-linkedin fa-fw'/></a>

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

