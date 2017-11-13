import * as React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import translate from 'counterpart';
import BlockUi from 'react-block-ui';
import NumberFormat from 'react-number-format';
import {bindActionCreators} from 'redux';
import {saveLastActiveRequest} from '../../actions/borrower.actions';

class IncomeFormComponent extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    saveLastActiveRequest: PropTypes.func,
    onSuccess: PropTypes.func,
    initialize: PropTypes.func,
    profile: PropTypes.object,
    valid: PropTypes.bool
  };

  static validate(values) {
    const errors = {};
    const locale = translate('wizards').wizard2;
    const rp = ('' + values.rp).replace(/\./g, '');
    if (!rp) {
      errors.rp = locale.requiredValidate;
    } else if (rp < 1000000) {
      errors.rp = locale.lengthValidate;
    }
    return errors;
  }

  locale = translate('wizards').wizard2;

  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(values) {
    const rp = ('' + values.rp).replace(/\./g, '');
    this.props.saveLastActiveRequest({rp})
      .then(() => this.props.onSuccess());
  }

  componentWillReceiveProps() {
    this.locale = translate('wizards').wizard2;
  }

  renderSalaryField(field) {
    const {meta: {touched, error}} = field;
    const className = `nombs form-group ${touched && error ? 'has-danger' : ''} `;
    return (
      <div className={className}>
        <NumberFormat
          {...field.input}
          allowNegative={false}
          thousandSeparator={'.'}
          decimalSeparator={','}
          className='form-control'
          maxLength={10}
        />
        <div className='help-block help-block-error'>
          {touched ? error : ''}
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
            <h3>{this.locale.label}</h3>
          </div>
          <div className='fields clearfix'>
            <div className='group_lable'><span>Rp</span></div>
            <Field component={this.renderSalaryField} name='rp'/>
          </div>
        </div>
        <div className='next_previous clearfix'>
          <button type='submit' className='btn btn-primary pull-right next_btn' disabled={!this.props.valid}>
            {this.locale.next}
          </button>
        </div>
      </BlockUi>
    </form>);
  }
}

const $IncomeFormComponen = reduxForm({
  form: 'income-form',
  enableReinitialize: true,
  validate: IncomeFormComponent.validate
})(IncomeFormComponent);

export const IncomeForm = connect(({language, profile, borrower}) => {
  return {language, profile, initialValues: {rp: borrower.current.rp}};
}, (dispatch) => {
  return {
    saveLastActiveRequest: bindActionCreators(saveLastActiveRequest, dispatch)
  };
})($IncomeFormComponen);
