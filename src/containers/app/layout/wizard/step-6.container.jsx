import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import translate from 'counterpart';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getLastActiveRequest} from '../../../../actions/borrower.actions';


class Step6ContainerComponent extends React.Component {
  static propTypes = {
    borrower: PropTypes.object,
    profile: PropTypes.object,
    getLastActiveRequest: PropTypes.func
  };

  locale = translate('wizards');

  componentWillReceiveProps() {
    this.locale = translate('wizards');
  }

  componentWillMount() {
    this.props.getLastActiveRequest();
  }

  render() {
    const profile = this.props.profile.current;
    const borrower = this.props.borrower.current;
    return (
      <div className='nav-md loan_wizard step6'>
        <div className='main_container'>
          <div className='container'>
            <div className='right_col' role='main'>
              <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12'>
                  <div className='wrapperr row primary_step'>
                    <div className='col-sm-12 col-xs12'>
                      <div className='completed_fileds'>
                        <div className='completed'>
                          <Link to='/wizard' className='edit_link'>{this.locale.wizard6.heading1}
                            <span> {profile.ktp}</span></Link>
                        </div>
                        <div className='completed'>
                          <Link to='/wizard/step-2' className='edit_link'>{this.locale.wizard6.heading2}
                            <span> RP {borrower.rp} </span></Link>
                        </div>
                        <div className='completed'>
                          <Link to='/wizard/step-3' className='edit_link'>{this.locale.wizard6.heading3}
                            <span> {this.locale.wizard3[borrower.employmentStatus]} </span></Link>
                        </div>
                        <div className='completed'>
                          <Link to='/wizard/step-4' className='edit_link'>{this.locale.wizard6.heading4}
                            <span> {borrower.phone && borrower.phone.phone}</span></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='wrapper row'>
                    <div className='col-sm-8 col-xs-12'>
                      <div className='process  active_field'>
                        <div className='wrapperr row'>
                          <div className='col-sm-12 col-xs-12'><span
                            className='notes blue_notes'>{this.locale.wizard6.confirmation}</span></div>
                        </div>
                        <div className='next_previous clearfix continue'>
                          <Link to='/wizard/step-7'>
                            <button
                              type='button'
                              className='btn btn-primary pull-right next_btn'>{this.locale.wizard6.continue}</button>
                          </Link>
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
    );
  }
}


export const Step6Container = connect(({language, borrower, profile}) => {
  return {language, borrower, profile};
}, (dispatch) => {
  return {
    getLastActiveRequest: bindActionCreators(getLastActiveRequest, dispatch)
  };
})(Step6ContainerComponent);
