import React from 'react';
import BlockUi from 'react-block-ui';
import {connect} from 'react-redux';
import OfferedLoan from '../../../components/shared/offeredLoanSection.component.jsx';
import 'react-block-ui/style.css';
import translate from 'counterpart';
import {UserInfoForm} from '../../../components/user-info-form/user-info-form.jsx';
import PropTypes from 'prop-types';
import {getLastActiveRequest} from '../../../actions/borrower.actions';
import {getAllProvinces} from '../../../actions/region.actions';
import {bindActionCreators} from 'redux';

class UserInfoContainerComponent extends React.Component {
  locale = translate('wizards');

  static propTypes = {
    getLastActiveRequest: PropTypes.func,
    getAllProvinces: PropTypes.func
  };


  componentWillMount() {
    this.props.getLastActiveRequest();
    this.props.getAllProvinces();
  }

  render() {
    const {locale} = this;
    return (
      <div className='nav-md loan_wizard'>
        <div className='main_container'>
          <div className='container'>
            <div className='right_col' role='main'>
              <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12'>
                  <div className='wrapper row'>
                    <div className='col-sm-12 col-xs-12'>
                      {/* <h2 className='offered_title'>Offered Loan</h2> */}
                    </div>
                    <div className='col-sm-12 col-xs-12'>
                      <h5 className='text-center'><b>{locale.userinfo.heading_part1}</b></h5>
                    </div>
                    <div className='col-sm-12 col-xs-12'>
                      <OfferedLoan/>
                    </div>
                    <BlockUi tag='div' blocking={false}>
                      <UserInfoForm />
                    </BlockUi>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const UserInfoContainer = connect(
  ({}) => ({}), (dispatch) => {
    return {
      getLastActiveRequest: bindActionCreators(getLastActiveRequest, dispatch),
      getAllProvinces: bindActionCreators(getAllProvinces, dispatch)
    };
  }
)(UserInfoContainerComponent);

