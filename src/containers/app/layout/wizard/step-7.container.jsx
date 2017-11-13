import React from 'react';
import translate from 'counterpart';
import OfferedLoan from '../../../../components/shared/offeredLoanSection.component.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {getLastActiveRequest} from '../../../../actions/borrower.actions';
import {getAllProvinces} from '../../../../actions/region.actions';

class Step7ContainerComponent extends React.Component {

  static propTypes = {
    getLastActiveRequest: PropTypes.func,
    children: PropTypes.any,
    getAllProvinces: PropTypes.func
  };

  locale = translate('wizards').wizard7;

  componentWillReceiveProps() {
    this.locale = translate('wizards').wizard7;
  }

  componentWillMount() {
    this.props.getLastActiveRequest();
    this.props.getAllProvinces();
  }

  render() {
    return (
      <div>
        <div className='wrapper row'>
          <div className='col-sm-12 col-xs-12'>
            <h2 className='offered_title'>{this.locale.heading1}</h2>
          </div>
          <div className='col-sm-8 col-xs-12'>
            <OfferedLoan/>
          </div>
          <div className='col-sm-4 col-xs-12'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export const Step7Container = connect(({language}) => {
  return {language};
}, (dispatch) => {
  return {
    getLastActiveRequest: bindActionCreators(getLastActiveRequest, dispatch),
    getAllProvinces: bindActionCreators(getAllProvinces, dispatch)
  };
})(Step7ContainerComponent);
