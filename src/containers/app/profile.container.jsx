import React from 'react';
import PropTypes from 'prop-types';
import translate from 'counterpart';
import {UserCard} from '../../components/profile-card/profile-card.jsx';
import {ProfileProgress} from '../../components/profile-progress/profile-progress.jsx';
import {PersonalForm} from '../../components/personal-form/personal-form.jsx';
import {ContactInformationForm} from '../../components/contact-information-form/contact-information-form.jsx';
import {HomeAddressForm} from '../../components/home-address-form/home-address-form.jsx';
import {EducationForm} from '../../components/education-form/education-form.jsx';
import {BPJSInformationForm} from '../../components/BPJS-information-form/BPJS-information-form.jsx';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {submitProfileDetails, initializeProfilePage} from '../../actions/profile.actions';

class ProfileContainerComponent extends React.Component {
  static propTypes = {
    submitProfileDetails: PropTypes.func,
    initializeProfilePage: PropTypes.func,
    progress: PropTypes.object,
    userInfo: PropTypes.object,
    address: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.saveProfile = this.saveProfile.bind(this);
  }

  locale = translate('layout').profile;

  componentWillMount() {
    this.props.initializeProfilePage();
  }

  saveProfile() {
    const request = this.props.submitProfileDetails();
    if (request) {
      request.then((response) => {
        if (response) {
          toastr.success(this.locale.successUpdate);
        } else {
          toastr.error(this.locale.failUpdate);
        }
      });
    }
  }

  render() {
    const {locale} = this;
    const {progress, userInfo: {name, pictureUrl}, address} = this.props;

    return (
      <div>
        <div className='middle middle--630'>
          <UserCard name={name} pictureUrl={pictureUrl} address={address}/>
          <div className='profile-progress-wrapper'>
            <ProfileProgress {...progress}/>
          </div>
          <div className='form-caption'>
            {locale.personal.index}
          </div>
          <PersonalForm />
          <div className='form-caption'>
            {locale.contact.index}
          </div>
          <ContactInformationForm />
          <div className='form-caption'>
            {locale.homeAddress.index}
          </div>
          <HomeAddressForm />
          <div className='form-caption'>
            {locale.education.index}
          </div>
          <EducationForm />
          <div className='form-caption'>
            {locale.BPJS.index}
          </div>
          <BPJSInformationForm />
          <div
            className='common-form__submit'
            onClick={() => this.saveProfile()}
          >
            {locale.save}
          </div>
        </div>
      </div>
    );
  }
}

export const ProfileContainer = connect(({
  profile: {progress, current: {address}},
  user: {userInfo}
}) => ({
  progress,
  userInfo,
  address: `${address.region1}, ${address.region2}, ${address.region3}, ${address.region4}`
}), (dispatch) => ({
  submitProfileDetails: bindActionCreators(submitProfileDetails, dispatch),
  initializeProfilePage: bindActionCreators(initializeProfilePage, dispatch)
}))(ProfileContainerComponent);
