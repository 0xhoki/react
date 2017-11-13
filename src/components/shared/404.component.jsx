import React from 'react';
import '../../styles/css/customHomepage.css';

// contact presentational component
class notFound extends React.Component {
  render() {
    return (
      <div>
        <div className='middle_content'>
          <div className='about contact not_found'>

            <div className='row'>
              <div className='col-sm-12 col-xs-12'>
                <div className='no_found clearfix'>
                  <div className='fourofour'>
                    <span>404</span>
                  </div>
                  <div className='sorry'>
                    <span>SORRY</span>
                    <div>PAGE</div>
                    <span>NOT FOUND</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='mobile_content'>
          <div className='mobile_ban'> <span>Borrowing easily.</span> </div>
          <div className='scroll_section0 scroll_section about contact'>
            <div className='row'>
              <div className='col-sm-12 col-xs-12'>
                <div className='no_found clearfix'>
                  <div className='fourofour'>
                    <span>404</span>
                  </div>
                  <div className='sorry'>
                    <span>SORRY</span>
                    <div>PAGE</div>
                    <span>NOT FOUND</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='scroll_section4 scroll_section'>
            <div className='sidebar_menu_sec clearfix' >
              <div className=''>
                <div className='other_links'>
                  <div>
                    <ul>
                      <li><a href='javascript:void()'>About</a></li>
                      <li><a href='javascript:void()'>How it works</a></li>
                      <li><a href='javascript:void()'>Press</a></li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li><a href='javascript:void()'>Partners</a></li>
                      <li><a href='javascript:void()'>Coverage</a></li>
                      <li><a href='javascript:void()'>Terms</a></li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li><a href='javascript:void()'>Careers</a></li>
                      <li><a href='javascript:void()'>Privacy</a></li>
                      <li><a href='javascript:void()'>Contact us</a></li>
                    </ul>
                  </div>
                </div>
                <div className='social_follow'>
                  <div className='top_head'>
                    <h5>Follow us on</h5>
                  </div>
                  <div className='social_links'>
                    <ul>
                      <li><a href='javascript:void()'><img src={require('../../images/fb.png')} /></a></li>
                      <li><a href='javascript:void()'><img src={require('../../images/linkedin.png')} /></a></li>
                      <li><a href='javascript:void()'><img src={require('../../images/twitter.png')} /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default notFound;
