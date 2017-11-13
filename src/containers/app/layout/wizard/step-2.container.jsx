import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import translate from 'counterpart';
import {IncomeForm} from '../../../../components/income-form/income-form.jsx';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import {getLastActiveRequest} from '../../../../actions/borrower.actions';

class Step2ContainerComponent extends React.Component {
  static propTypes = {
    locale: PropTypes.object,
    profile: PropTypes.object,
    handleSubmit: PropTypes.func,
    getLastActiveRequest: PropTypes.func
  };

  locale = translate('wizards').wizard2;

  constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
  }

  componentWillMount() {
    this.props.getLastActiveRequest();
  }

  componentWillReceiveProps() {
    this.locale = translate('wizards').wizard2;
  }

  onSuccess() {
    browserHistory.push('/wizard/step-3');
  }

  render() {
    return (
      <div>
        <div className='wrapperr row primary_step'>
          <div className='col-sm-12 col-xs-12'>
            <div className='completed_fileds'>
              <div className='completed'><Link to='/wizard' className='edit_link'>
                {this.locale.heading} <span>{this.props.profile.current.ktp}</span></Link></div>
            </div>
          </div>
        </div>
        <div className='wrapper row'>
          <div className='col-sm-8 col-xs-12'>
            <IncomeForm onSuccess={this.onSuccess}/>
          </div>
          <div className='col-sm-4 col-xs-12 right_notifi step_notifi'>
            <h4>{this.locale.question}</h4>
            <p>{this.locale.answer} </p>
          </div>
        </div>
      </div>
    );
  }
}

export const Step2Container = connect(({language, profile}) => {
  return {language, profile};
}, (dispatch) => {
  return {
    getLastActiveRequest: bindActionCreators(getLastActiveRequest, dispatch)
  };
})(Step2ContainerComponent);
