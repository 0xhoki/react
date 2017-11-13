import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import translate from 'counterpart';
import {PinCodeForm} from '../../../../components/pin-code-form/pin-code-form.jsx';

// import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getLastActiveRequest} from '../../../../actions/borrower.actions';


class Step5ContainerComponent extends React.Component {
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

  onSuccess() {
    browserHistory.push('/wizard/step-6');
  }

  render() {
    const profile = this.props.profile.current;
    const borrower = this.props.borrower.current;
    return (
      <div>
        <div className='wrapperr row primary_step'>
          <div className='col-sm-12 col-xs12'>
            <div className='completed_fileds'>
              <div className='completed'>
                <Link to='/wizard' className='edit_link'>{this.locale.wizard5.heading1}
                  <span> {profile.ktp}</span>
                </Link></div>
              <div className='completed'>
                <Link to='/wizard/step-2' className='edit_link'>{this.locale.wizard5.heading2}
                  <span> RP {borrower.rp} </span>
                </Link></div>
              <div className='completed'>
                <Link to='/wizard/step-3' className='edit_link'>{this.locale.wizard5.heading3}
                  <span> {this.locale.wizard3[borrower.employmentStatus]} </span>
                </Link></div>
              <div className='completed'>
                <Link to='/wizard/step-4' className='edit_link'>{this.locale.wizard5.heading4}
                  <span> {borrower.phone && borrower.phone.phone} </span>
                </Link></div>
            </div>
          </div>
        </div>
        <div className='wrapper row'>
          <div className='col-sm-8 col-xs-12'>
            <PinCodeForm onSuccess={this.onSuccess}/>
          </div>
          <div className='col-sm-4 col-xs-12 right_notifi step_notifi'>
            <h4>{this.locale.wizard5.question}</h4>
            <p>{this.locale.wizard5.answer}</p>
          </div>
        </div>
      </div>
    );
  }
}

export const Step5Container = connect(({language, borrower, profile}) => {
  return {language, borrower, profile};
}, (dispatch) => {
  return {
    getLastActiveRequest: bindActionCreators(getLastActiveRequest, dispatch)
  };
})(Step5ContainerComponent);
