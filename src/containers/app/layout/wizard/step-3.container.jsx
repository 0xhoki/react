import React from 'react';
import {Link} from 'react-router';
import BlockUi from 'react-block-ui';
import PropTypes from 'prop-types';
import translate from 'counterpart';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getLastActiveRequest, saveLastActiveRequest} from '../../../../actions/borrower.actions';
import {browserHistory} from 'react-router';

class Step3ContainerComponent extends React.Component {
  static propTypes = {
    locale: PropTypes.object,
    initialize: PropTypes.func,
    handleSubmit: PropTypes.func,
    getLastActiveRequest: PropTypes.func,
    saveLastActiveRequest: PropTypes.func,
    borrower: PropTypes.object,
    profile: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  locale = translate('wizards').wizard3;

  componentWillReceiveProps() {
    this.locale = translate('wizards').wizard3;
  }

  componentWillMount() {
    this.props.getLastActiveRequest();
  }

  handleChange(e) {
    this.props.saveLastActiveRequest({employmentStatus: e.target.value});
  }

  submitHandler() {
    browserHistory.push('/wizard/step-4');
  }

  render() {
    const profile = this.props.profile;
    return (
      <div>
        <div className='wrapperr row primary_step'>
          <div className='col-sm-12 col-xs-12'>
            <div className='completed_fileds'>
              <div className='completed'>
                <Link to='/wizard' className='edit_link'>
                  {this.locale.heading1} <span> {profile.current.ktp}</span>
                </Link>
              </div>
              <div className='completed'>
                <Link to='/wizard/step-2' className='edit_link'>
                  {this.locale.heading2} <span>RP {this.props.borrower.current.rp} </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='wrapper row'>
          <div className='col-sm-8 col-xs-12'>
            <div className='process active_field'>
              <BlockUi tag='div' blocking={!profile.current.id || isNaN(profile.current.id)}>
                <div className='active_lable'>
                  <h3>
                    {this.locale.label}
                  </h3>
                </div>
                <div className='fields clearfix sub_field_group'>
                  <select onChange={this.handleChange} value={this.props.borrower.current.employmentStatus}>
                    <option value={1}>
                      {this.locale.permanent}
                    </option>
                    <option value={2}>
                      {this.locale.contract}
                    </option>
                  </select>
                </div>
              </BlockUi>
            </div>
            <div className='next_previous clearfix'>
              <button
                type='button'
                onClick={this.submitHandler}
                className='btn btn-primary pull-right next_btn'
              >
                {this.locale.next}
              </button>
            </div>
          </div>
          <div className='col-sm-4 col-xs-12 right_notifi step_notifi'>
            <h4>
              {this.locale.question}
            </h4>
            <p>
              {this.locale.answer}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export const Step3Container = connect(({language, profile, borrower}) => {
  return {language, profile, borrower};
}, (dispatch) => {
  return {
    saveLastActiveRequest: bindActionCreators(saveLastActiveRequest, dispatch),
    getLastActiveRequest: bindActionCreators(getLastActiveRequest, dispatch)
  };
})(Step3ContainerComponent);
