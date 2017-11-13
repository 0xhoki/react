import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import translate from 'counterpart';
import BlockUi from 'react-block-ui';
import InputElement from 'react-input-mask';
import {bindActionCreators} from 'redux';
import {saveKtp} from '../../actions/profile.actions';

class KtpNumberFormComponent extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    getCurrentProfile: PropTypes.func,
    saveKtp: PropTypes.func,
    onSuccess: PropTypes.func,
    initialize: PropTypes.func,
    user: PropTypes.object,
    profile: PropTypes.object,
    initialValues: PropTypes.object,
    valid: PropTypes.bool
  };

  static validate(values) {
    const errors = {};
    const locale = translate('wizards').wizard1;
    if (!values.ktp) {
      errors.ktp = locale.requiredValidate;
    }
    // else if (!/^\d{0}([1][1-9]+)|^\d{0}([2][1]+)|^\d{0}([3][1-6]+)|^\d{0}([5][1-3]+)|^\d{0}([6][1-4]+)|^\d{0}([7][1-6]+)|^\d{0}([8][1-2]+)|^\d{0}([9][1]+)|^\d{0}([9][4]+)/i.test(values.KTP)) {
    //   errors.KTP = locale.validateKtp;
    // }
    else if (values.ktp.replace(/ /g, '').length < 16) {
      errors.ktp = locale.lengthValidate;
    }
    else if (values.ktp.replace(/ /g, '') === '0000000000000000') {
      errors.ktp = locale.validateKtp;
    }
    return errors;
  }

  locale = translate('wizards');

  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentWillReceiveProps() {
    this.locale = translate('wizards');
  }

  async submitHandler(values) {
    await this.props.saveKtp(values.ktp);
    this.props.onSuccess();
  }

  renderKTPField(field) {
    const {meta: {touched, error}} = field;
    const className = `nombs form-group  wizard1_input ${touched && error ? 'has-danger ' : ''} `;
    return (
      <div className={className}>
        <div>
          <InputElement
            {...field.input}
            mask='999999 999999 9999'
            className='form-control'
            maskChar=''
          />
          <div className='clearfix sisteen'/>
          <div className='help-block help-block-error'>
            {touched ? error : ''}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const profile = this.props.profile;
    return (<form onSubmit={this.props.handleSubmit(this.submitHandler)}>
      <BlockUi tag='div' blocking={!profile.current.id || isNaN(profile.current.id)}>
        <div className='process active_field'>
          <div className='active_lable'>
            <h3>{this.locale.wizard1.label}</h3>
          </div>
          <div className='fields clearfix'>
            <Field name='ktp' component={this.renderKTPField}/>
          </div>
        </div>
        <div className='next_previous clearfix'>
          <button type='submit' className='btn btn-primary pull-right next_btn' disabled={!this.props.valid}>
            {this.locale.wizard1.next}
          </button>
        </div>
      </BlockUi>
    </form>);
  }
}

const $KtpNumberForm = reduxForm({
  form: 'ktp-number-form',
  enableReinitialize: true,
  validate: KtpNumberFormComponent.validate
})(KtpNumberFormComponent);

export const KtpNumberForm = connect(({language, user, profile}) => {
  return {language, user, profile, initialValues: {ktp: profile.current.ktp}};
}, (dispatch) => {
  return {
    saveKtp: bindActionCreators(saveKtp, dispatch)
  };
})($KtpNumberForm);
