import React from 'react';
import {browserHistory} from 'react-router';
import {BorrowerAboutForm} from '../../../../../components/borrower-about-form/borrower-about-form.jsx';

export class Step7PersonalDetailContainer extends React.Component {

  onSuccess() {
    browserHistory.push('/wizard/step-7/contact');
  }

  render() {
    return (
      <BorrowerAboutForm onSuccess={this.onSuccess}/>
    );
  }
}
