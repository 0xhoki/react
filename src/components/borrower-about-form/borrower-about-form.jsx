import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import translate from 'counterpart';
import BlockUi from 'react-block-ui';
import moment from 'moment';
import renderFields from '../redux-FormFields/renderCommonField';
import renderDatepickerField from '../redux-FormFields/renderDatepickerField';
import renderSelectFields from '../redux-FormFields/renderSelectField';
import {bindActionCreators} from 'redux';
import {saveProfile} from '../../actions/profile.actions';
import {
  getGenderSelectOptions,
  getMaritalStatusOptions
} from '../user-info-form/user-info-form.enum';

class BorrowerAboutFormComponent extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    saveProfile: PropTypes.func,
    onSuccess: PropTypes.func,
    initialValues: PropTypes.object,
    user: PropTypes.object,
    borrower: PropTypes.object,
    valid: PropTypes.bool
  };

  static validate(values) {
    const errors = {};
    const locale = translate('wizards').wizard7;
    if (!values.fullname) {
      errors.fullname = locale.requirednameMessage;
    } else if (!/^[ A-Za-z0-9./']*$/i.test(values.fullname)) {
      errors.fullname = locale.invalidCharacters;
    }
    if (!values.dob) {
      errors.dob = locale.requireddobMessage;
    }
    return errors;
  }

  locale = translate('wizards').wizard7;

  state = {
    blocking: false,
    dob: null
  };

  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }


  componentWillReceiveProps() {
    this.locale = translate('wizards').wizard7;
  }

  // componentWillMount() {
  //   this.setState({blocking: true});
  //   this.props.getKtpCurrentUser()
  //     .then((user) => {
  //       const dob = moment(new Date(user.birthdate), 'DD-MM-YYYY');
  //       this.props.initialize({
  //         fullname: user.fullname,
  //         gender: user.gender,
  //         dob,
  //         maritalstatus: user.marital_status
  //       });
  //       this.setState({
  //         dob
  //       });
  //       return new Promise(resolve => {
  //         this.props.setCurrent(user).then(() => {
  //           resolve(user);
  //         });
  //       });
  //     })
  //     .then(() => this.setState({blocking: false}));
  // }

  submitHandler(values) {
    const body = {...values};
    this.props.saveProfile(body)
      .then(() => {
        this.props.onSuccess();
      });
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.submitHandler)}>
        <div className='sideform'>
          <div className='side_notes'>
            <span>{this.locale.heading2}</span>
          </div>
          <div className='personal_details clearfix'>
            <h5>{this.locale.label}</h5>
            <span>
              <i className='fa fa-circle' />
              <i className='fa fa-circle-o' />
              <i className='fa fa-circle-o' />
            </span>
          </div>
          <BlockUi tag='div' blocking={this.state.blocking}>
            <div className='personal_form common_wizards'>
              <div className='row'>
                <div className='col-sm-12 col-xs-12'>
                  <div className='form-group'>
                    <label className='label-control'>
                      {this.locale.fullname}
                    </label>
                    <br/>
                    <Field
                      name='fullName'
                      component={renderFields.renderTextbox}
                      placeholder={this.locale.placeholder1}
                    />
                  </div>
                </div>
                <div className='col-sm-12 col-xs-12'>
                  <div className='form-group'>
                    <label className='label-control'>{this.locale.dob}</label>
                    <br/>
                    <Field
                      name='dateOfBirth'
                      component={renderDatepickerField.renderdatePicker}
                      dateFormat='DD-MM-YYYY'
                      maxDate={moment().subtract(18, 'years')}
                      placeholder={this.locale.placeholder2}
                    />
                  </div>
                </div>
                <div className='col-sm-6 col-xs-12'>
                  <div className='form-group'>
                    <label className='label-control'>{this.locale.gender}</label>
                    <div className='fields clearfix'>
                      <Field
                        name='gender'
                        component={renderSelectFields.selectBox}
                        options={getGenderSelectOptions(this.locale)}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-xs-12'>
                  <div className='form-group'>
                    <label className='label-control'>{this.locale.maritalStatus}</label>
                    <div className='fields clearfix'>
                      <Field
                        name='maritalStatus'
                        component={renderSelectFields.selectBox}
                        options={getMaritalStatusOptions(this.locale)}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-sm-12 col-xs-12'>
                  <div className='continue next_previous clearfix'>
                    <button
                      type='submit'
                      className='btn btn-primary pull-right next_btn'>{this.locale.next}</button>
                  </div>
                </div>
              </div>
            </div>
          </BlockUi>
        </div>
      </form>
    );
  }
}

const $BorrowerAboutForm = reduxForm({
  form: 'BorrowerAboutForm',
  enableReinitialize: true,
  validate: BorrowerAboutFormComponent.validate
})(BorrowerAboutFormComponent);

export const BorrowerAboutForm = connect(({language, user, borrower, profile}) => {
  return {
    language, user, borrower, profile, initialValues: profile.current
  };
}, (dispatch) => {
  return {
    saveProfile: bindActionCreators(saveProfile, dispatch)
  };
})($BorrowerAboutForm);
