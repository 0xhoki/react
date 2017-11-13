import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import translate from 'counterpart';
import {PhoneNumberFrom} from '../../../../components/phone-number-form/phone-number-form.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getLastActiveRequest} from '../../../../actions/borrower.actions';

class Step4ContainerComponent extends React.Component {
  static propTypes = {
    borrower: PropTypes.object,
    profile: PropTypes.object,
    handleSubmit: PropTypes.func,
    getLastActiveRequest: PropTypes.func,
    getPhone: PropTypes.func
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
      <div>
        <div className='wrapperr row primary_step'>
          <div className='col-sm-12 col-xs-12'>
            <div className='completed_fileds'>
              <div className='completed'>
                <Link to='/wizard' className='edit_link'>{this.locale.wizard4.heading1}
                  <span> {profile.ktp}</span>
                </Link></div>
              <div className='completed'>
                <Link to='/wizard/step-2' className='edit_link'>{this.locale.wizard4.heading2}
                  <span> RP {borrower.rp} </span>
                </Link></div>
              <div className='completed'>
                <Link to='/wizard/step-3' className='edit_link'>{this.locale.wizard4.heading3}
                  <span> {this.locale.wizard3[borrower.employmentStatus]} </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='wrapper row'>
          <div className='col-sm-8 col-xs-12'>
            <PhoneNumberFrom/>
          </div>
          <div className='col-sm-4 col-xs-12 right_notifi step_notifi'>
            <h4>{this.locale.wizard4.question}</h4>
            <p>{this.locale.wizard4.answer}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export const Step4Container = connect(({language, profile, borrower}) => {
  return {language, profile, borrower};
}, (dispatch) => {
  return {
    getLastActiveRequest: bindActionCreators(getLastActiveRequest, dispatch)
  };
})(Step4ContainerComponent);

