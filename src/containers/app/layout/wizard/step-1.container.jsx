import * as React from 'react';
import {KtpNumberForm} from '../../../../components/KTP-number-form/KTP-number-form.jsx';
import {connect} from 'react-redux';
import translate from 'counterpart';
import {browserHistory} from 'react-router';

class Step1ContainerComponent extends React.Component {
  locale = translate('wizards').wizard1;

  componentWillReceiveProps() {
    this.locale = translate('wizards').wizard1;
  }

  constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
  }

  onSuccess() {
    browserHistory.push('/wizard/step-2');
  }

  render() {
    return (<div>
      <div className='wrapperr row primary_step'>
        <div className='col-sm-12 col-xs12'><span className='notes'>{this.locale.heading}</span></div>
      </div>
      <div className='wrapper row'>
        <div className='col-sm-8 col-xs-12'>
          <KtpNumberForm onSuccess={this.onSuccess}/>
        </div>
        <div className='col-sm-4 col-xs-12 right_notifi step_notifi'>
          <h4>{this.locale.question}</h4>
          <p>{this.locale.answer}</p>
        </div>
      </div>
    </div>);
  }
}

export const Step1Container = connect(({language}) => {
  return {language};
}, () => {
  return {};
})(Step1ContainerComponent);
