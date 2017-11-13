import 'react-block-ui/style.css';
import React from 'react';
import PropTypes from 'prop-types';
import translate from 'counterpart';
import {connect} from 'react-redux';
import {ContactInfoForm} from '../../../../../components/contact-info-form/contact-info-form.jsx';

class Step7ContactInfoContainerComponent extends React.Component {

  constructor(props) {
    super(props);

    this.onSuccess = this.onSuccess.bind(this);
  }

  static propTypes = {
    currentAddress: PropTypes.object
  };

  locale = translate('wizards').contactinfo;


  onSuccess() {

  }

  render() {
    const {locale} = this;
    return (
      <div className='sideform'>
        <div className='side_notes'>
          <span>{locale.heading2}</span>
        </div>
        <div className='personal_details clearfix'>
          <h5>{locale.heading}</h5>
          <span>
            <i className='fa fa-circle-o'/>
            <i className='fa fa-circle'/>
            <i className='fa fa-circle-o'/>
          </span>
        </div>
        <div className='personal_form common_wizards'>
          <ContactInfoForm onSuccess={this.onSuccess}/>
        </div>
      </div>
    );
  }
}


export const Step7ContactInfoContainer = connect(
  ({borrower}) => ({currentAddress: borrower.currentAddress})
)(Step7ContactInfoContainerComponent);
