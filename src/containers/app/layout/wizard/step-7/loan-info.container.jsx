import React from 'react';
import {connect} from 'react-redux';
import translate from 'counterpart';
import {LoanInfoForm} from '../../../../../components/loan-info-form/loan-info-form.jsx';


class Step7LoanInfoContainerComponent extends React.Component {
  locale = translate('wizards').loaninfo;

  render() {
    const {locale} = this;
    return (
      <div className='sideform'>
        <div className='side_notes'>
          <span>{locale.heading2}</span>
        </div>
        <div className='personal_details clearfix'>
          <h5>{locale.heading3}</h5>
          <span>
            <i className='fa fa-circle-o'/>
            <i className='fa fa-circle-o'/>
            <i className='fa fa-circle' />
          </span>
        </div>
        <div className='personal_form common_wizards'>
          <LoanInfoForm />
        </div>
      </div>
    );
  }
}

export const Step7LoanInfoContainer = connect(
  ({}) => ({}), () => {
    return {

    };
  }
)(Step7LoanInfoContainerComponent);
