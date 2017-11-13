import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import translate from 'counterpart';

export class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthlyPayment: 0,
      totalPayment: 0
    };
  }

  /* componentWillMount() {
    script.layout.init();
  }*/

  componentDidMount() {
    let tenor_mon = localStorage.getItem('tenor_mon');
    let tenor_amt = localStorage.getItem('tenor_amt');
    if (tenor_mon && tenor_amt) {
      ReactDOM.findDOMNode(this.refs.month).value = tenor_mon;
      ReactDOM.findDOMNode(this.refs.amount).value = tenor_amt;
      ReactDOM.findDOMNode(this.refs.month_mob).value = tenor_mon;
      ReactDOM.findDOMNode(this.refs.amount_mob).value = tenor_amt;
    } else {
      localStorage.setItem('tenor_mon', 12);
      localStorage.setItem('tenor_amt', 5);
      ReactDOM.findDOMNode(this.refs.month).value = 12;
      ReactDOM.findDOMNode(this.refs.amount).value = 5;
      ReactDOM.findDOMNode(this.refs.month_mob).value = 12;
      ReactDOM.findDOMNode(this.refs.amount_mob).value = 5;
    }
    // ReactDOM.findDOMNode(this.refs.month).value = 12;
    // ReactDOM.findDOMNode(this.refs.amount).value = 5;
    // ReactDOM.findDOMNode(this.refs.month_mob).value = 12;
    // ReactDOM.findDOMNode(this.refs.amount_mob).value = 5;
  }

  componentWillReceiveProps() {
    this.locale = translate('layout');
  }

  locale = translate('layout');

  amountChange() {
    const currval = ReactDOM.findDOMNode(this.refs.amount).value;
    localStorage.setItem('tenor_amt', currval);
  }

  monthChange() {
    const currval = ReactDOM.findDOMNode(this.refs.month).value;
    localStorage.setItem('tenor_mon', currval);
  }

  amountChangeMob() {
    const currval = ReactDOM.findDOMNode(this.refs.amount_mob).value;
    localStorage.setItem('tenor_amt', currval);
  }

  monthChangeMob() {
    const currval = ReactDOM.findDOMNode(this.refs.month_mob).value;
    localStorage.setItem('tenor_mon', currval);
  }

  render() {
    return (
      <div>
        <div className='middle_content'>
          <div className='commingsoon'>
            <div className='how_desktop text-left'>
              <div className='sec0head'>
                <h3>{this.locale.Homepage.Home_Header} ?</h3>
              </div>
              <div className='sec_0 clearfix'>
                <div className='line1 clearfix'>
                  <div className='left_cont'>{this.locale.Homepage.Borrow}</div>
                  <div className='mid_cont commonSelect'>
                    <select className='common_query ' onChange={this.amountChange.bind(this)} ref='amount'>
                      <option value='5'>{this.locale.Homepage.five}</option>
                      <option value='6'>{this.locale.Homepage.six}</option>
                      <option value='7'>{this.locale.Homepage.seven}</option>
                      <option value='8'>{this.locale.Homepage.eight}</option>
                      <option value='9'>{this.locale.Homepage.nine}</option>
                      <option value='10'>{this.locale.Homepage.ten}</option>
                    </select>
                    {/* <input className='custom_query' ref='amount' type='text' maxLength={2} disabled={true} /> */}
                  </div>
                  {/* <div className='right_cont'>{this.locale.Homepage.Million}</div> */}
                </div>
                <div className='line2 clearfix'>
                  <div className='left_cont'>{this.locale.Homepage.Repay}</div>
                  <div className='mid_cont commonSelect'>
                    <select className='common_query' onChange={this.monthChange.bind(this)} ref='month'>
                      <option value='6'>{this.locale.Homepage.sixmonths}</option>
                      <option value='12'>{this.locale.Homepage.twelvemonths}</option>
                      <option value='18'>{this.locale.Homepage.eighteenmonths}</option>
                    </select>
                    {/* <input className='custom_query' ref='month' type='text' disabled={true} /> */}
                  </div>
                  {/* <div className='right_cont'>{this.locale.Homepage.Months} .</div> */}
                </div>
              </div>
              <div className='get_started'>
                <Link to='/sign-up'>
                  <button className='btn'>{this.locale.Homepage.get_started}</button>
                </Link>
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
          <div className='scroll_section0 scroll_section'>
            <div className='text-center sec0head'>
              <h5>{this.locale.Homepage.Home_Header} ?</h5>
            </div>
            <div className='sec_0 clearfix'>
              <div className='line1 clearfix'>
                <div className='left_cont'>{this.locale.Homepage.Borrow}</div>
                <div className='mid_cont commonSelect'>
                  {/* <input type='text' className='mob_tenor' ref='amount_mob' maxLength={2} disabled={true} /> */}
                  <select className='common_query' onChange={this.amountChangeMob.bind(this)} ref='amount_mob'>
                    <option value='5'>{this.locale.Homepage.five}</option>
                    <option value='6'>{this.locale.Homepage.six}</option>
                    <option value='7'>{this.locale.Homepage.seven}</option>
                    <option value='8'>{this.locale.Homepage.eight}</option>
                    <option value='9'>{this.locale.Homepage.nine}</option>
                    <option value='10'>{this.locale.Homepage.ten}</option>
                  </select>
                </div>
                {/* <div className='right_cont'>{this.locale.Homepage.Million}</div> */}
              </div>
              <div className='line2 clearfix'>
                <div className='left_cont'>{this.locale.Homepage.Repay}</div>
                <div className='mid_cont commonSelect'>
                  <select className='common_query' onChange={this.monthChangeMob.bind(this)} ref='month_mob'>
                    <option value='6'>{this.locale.Homepage.sixmonths}</option>
                    <option value='12'>{this.locale.Homepage.twelvemonths}</option>
                    <option value='18'>{this.locale.Homepage.eighteenmonths}</option>
                  </select>
                  {/* <input type='text' className='mob_tenor' ref='month_mob' disabled={true} /> */}
                </div>
                {/* <div className='right_cont'>{this.locale.Homepage.Months} .</div> */}
              </div>

              <div className='get_started'>
                <Link to='/sign-up' className='btn'>{this.locale.Homepage.get_started}</Link>
              </div>
            </div>
          </div>
          <div className='scroll_section1 scroll_section' id='scroll_section1'>
            <div className='mobile_foot'>
              <div className='mobile_footer clearfix text-center'>
                <div className='desktop_img'>
                  <img src={require('../../../images/foot_img.png')}/>
                </div>
                <div className='foot_cont'>
                  <p>{this.locale.layoutcontent.Footerdata}</p>
                </div>
              </div>
            </div>

            <div className='sidebar_menu_sec clearfix'>
              <div className='col-xs-12 clearfix'>
                <div className='side_icon'><img src={require('../../../images/profit1mob.png')}/></div>
                <div className='profit_content'>
                  <strong>{this.locale.layoutside.Convenient}</strong>
                  <p>{this.locale.mobile.simple}</p>
                </div>
              </div>
              <div className='col-xs-12 clearfix'>
                <div className='side_icon'><img src={require('../../../images/profit2mob.png')}/></div>
                <div className='profit_content'>
                  <strong>{this.locale.layoutside.Collateral}</strong>
                  <p>{this.locale.mobile.fast}</p>
                </div>
              </div>
              <div className='col-xs-12 clearfix'>
                <div className='side_icon'><img src={require('../../../images/profit3mob.png')}/></div>
                <div className='profit_content'>
                  <strong>{this.locale.layoutside.Fast1}</strong>
                  <p>{this.locale.mobile.secure}</p>
                </div>
              </div>
              <div className='col-xs-12 clearfix'>
                <div className='side_icon'><img src={require('../../../images/profit4mob.png')}/></div>
                <div className='profit_content'>
                  <strong>{this.locale.layoutside.Transparent}</strong>
                  <p>{this.locale.mobile.childhood}</p>
                </div>
              </div>
            </div>
          </div>

          <div className='scroll_section2 scroll_section'>
            <div className='text-center'>
              <div className='top_head'>

              </div>
              <div className='top_links'></div>
            </div>
            <div className='sidebar_menu_sec clearfix'>
              <div className='text-center'>
                {/*
                <div id='myCarouselllll' className='carousel slide' data-ride='carousel'>
                  <div className='carousel-inner' role='listbox'>
                    <div className='item active'>
                      <div className='user_image'><img src={require('../../../images/test1.jpg')}
                        className='img-circle'/>
                      </div>
                      <div className='user_review'>
                        <h5>{this.locale.layoutside.scrolldata1}</h5>
                      </div>
                      <div className='user_review_cont'><i>{this.locale.layoutside.scrolldata2}</i></div>
                      <div className='user_name'><span>{this.locale.layoutside.scrolldata3}</span><span
                        className='occupation'>{this.locale.layoutside.scrolldata4}</span></div>
                    </div>
                    <div className='item'>
                      <div className='user_image'><img src={require('../../../images/test2.jpg')}
                        className='img-circle'/>
                      </div>
                      <div className='user_review'>
                        <h5>{this.locale.layoutside.scrolldata5}</h5>
                      </div>
                      <div className='user_review_cont'><i>{this.locale.layoutside.scrolldata6}</i></div>
                      <div className='user_name'><span>{this.locale.layoutside.scrolldata7}</span><span
                        className='occupation'>{this.locale.layoutside.scrolldata8}</span></div>
                    </div>
                    <div className='item'>
                      <div className='user_image'><img src={require('../../../images/test3.jpg')}
                        className='img-circle'/>
                      </div>
                      <div className='user_review'>
                        <h5>{this.locale.layoutside.scrolldata9}</h5>
                      </div>
                      <div className='user_review_cont'><i>{this.locale.layoutside.scrolldata10}</i></div>
                      <div className='user_name'><span>{this.locale.layoutside.scrolldata11}</span><span
                        className='occupation'>{this.locale.layoutside.scrolldata12}</span></div>
                    </div>
                  </div>
                  <div className='texti_control'><a className='left carousel-control' href='#myCarouselllll'
                    role='button' data-slide='prev'> <img
                      src={require('../../../images/leftarrowgray.png')}/> </a> <a className='right carousel-control'
                    href='#myCarouselllll' role='button'
                    data-slide='next'> <img
                      src={require('../../../images/rightarrowgray.png')}/> </a></div>
                </div>
                */}
              </div>
            </div>
          </div>
          <div className='scroll_section2 scroll_section  section_partner'>
            <div className='text-center'>
              <div className='top_head'>
                <h3>{this.locale.ourpartners.heading}</h3>
              </div>

            </div>
            <div className='sidebar_menu_sec clearfix'>
              <div className='text-center'>
                {/*
                <div id='myCarouselll' className='carousel slide partner_slide' data-ride='carousel'>
                  <div className='carousel-inner' role='listbox'>
                    <div className='item active'>

                      <a href='https://www.bca.co.id/' target='_blank'>
                        <div className='user_image'><img src={require('../../../images/partner1.png')}/></div>
                        <div className='user_review'>
                          <h5>{this.locale.ourpartners.role1}</h5>
                        </div>
                      </a>

                    </div>
                    <div className='item'>
                      <a href='http://www.bankmandiri.co.id/' target='_blank'>
                        <div className='user_image'><img src={require('../../../images/partner2.png')}/></div>
                        <div className='user_review'>
                          <h5>{this.locale.ourpartners.role2}</h5>
                        </div>
                      </a>
                    </div>
                    <div className='item'>
                      <a href='http://www.pefindo.com/' target='_blank'>
                        <div className='user_image'><img src={require('../../../images/partner3.png')}/></div>
                        <div className='user_review'>
                          <h5>{this.locale.ourpartners.role3}</h5>
                        </div>
                      </a>
                    </div>
                    <div className='item'>
                      <a href='http://hprplawyers.com/' target='_blank'>
                        <div className='user_image'><img src={require('../../../images/partner4.png')}/></div>
                        <div className='user_review'>
                          <h5>{this.locale.ourpartners.role4}</h5>
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
                */}
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
