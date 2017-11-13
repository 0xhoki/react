import React from 'react';
import {Link, browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import * as api from '../../../tools/apiConfig';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import InputElement from 'react-input-mask';
import '../shared/tap_events';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import PropTypes from 'prop-types';

const styles = {
  button: {
    margin: 12
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
  }
};

class loanapplicationstatus1 extends React.Component {
  static propTypes = {
    locale: PropTypes.object,
    setPercent: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      blocking: false,
      file: [],
      imgSrc: '',
      gen_data_status: 'Complete',
      gen_span_class: 'received',
      gen_status_class: 'fa fa-check',
      emp_data_status: 'Incomplete',
      emp_span_class: 'incomplete',
      emp_status_class: 'fa fa-times',
      bd_data_status: 'Incomplete',
      bd_span_class: 'incomplete',
      bd_status_class: 'fa fa-times',
      rel_data_status: 'Incomplete',
      rel_span_class: 'incomplete',
      rel_status_class: 'fa fa-times',
      face_upload_status: 'Incomplete',
      face_span_class: 'incomplete',
      face_status_class: 'fa fa-times',
      address_upload_status: 'Complete',
      address_span_class: 'received',
      address_status_class: 'fa fa-check',
      sal_upload_status: 'Incomplete',
      sal_span_class: 'incomplete',
      sal_status_class: 'fa fa-times',
      openDialog: false,
      bankData: {}
    };
    this.handleChangeforImage = this.handleChangeforImage.bind(this);
  }

  componentWillMount() {
    this.getDocuments();
    const filled_emp_data = localStorage.getItem('filled_emp_data');
    const filled_rel_data = localStorage.getItem('filled_rel_data');
    if (filled_emp_data) {
      this.setState({
        emp_data_status: 'Complete',
        emp_span_class: 'received',
        emp_status_class: 'fa fa-check'
      });
    }
    if (filled_rel_data) {
      this.setState({
        rel_data_status: 'Complete',
        rel_span_class: 'received',
        rel_status_class: 'fa fa-check'
      });
    }
  }

  handleStatus(data) {
    if (data.empstatus === 1) {
      this.setState({
        emp_data_status: 'Complete',
        emp_span_class: 'received',
        emp_status_class: 'fa fa-check'
      });
    }
    if (data.relative === 1) {
      this.setState({
        rel_data_status: 'Complete',
        rel_span_class: 'received',
        rel_status_class: 'fa fa-check'
      });
    }
    if (data.facepic === 1) {
      this.setState({
        face_upload_status: 'Complete',
        face_span_class: 'received',
        face_status_class: 'fa fa-check'
      });
    }
    if (data.salaryslip === 1) {
      this.setState({
        sal_upload_status: 'Complete',
        sal_span_class: 'received',
        sal_status_class: 'fa fa-check'
      });
    }
    if (data.bankdetails === 1) {
      this.setState({
        bd_data_status: 'Complete',
        bd_span_class: 'received',
        bd_status_class: 'fa fa-check'
      });
    }
    this.setState({
      blocking: false
    });
  }

  getDocuments() {
    let token = localStorage.getItem('token');
    let id = localStorage.getItem('id');
    $.ajax({
      type: 'GET',
      url: api.GET_DOCS,
      dataType: 'json',
      contentType: 'application/json',
      data: {
        user_id: id
      },
      headers: {
        Authorization: 'Bearer ' + token
      },
      success: function (response) {
        if (response.status === 'UNAUTHORIZED') {
          toastr.error('Your session has been expired,plese login again to continue.');
          localStorage.clear();
          browserHistory.push('/login');
        }
        else if (response.status === 'OK') {
          this.handleStatus(response.data);
        }
        else if (response.status === 'INTERNAL_ERROR') {
          toastr.warning('Some internal error occured');
        }
      }.bind(this),
      error: function () {
        localStorage.clear();
        toastr.error('Server error occured');
        browserHistory.push('/login');
      }.bind(this)
    });
  }

  handleChangeforDocs() {
    // Assuming only pdfs
    let file = this.refs.salary_slip.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onloadend = function () {
      this.setState({blocking: true});
    }.bind(this);
    let token = localStorage.getItem('token');
    const user_id = localStorage.getItem('id');
    let fd = new FormData();
    fd.append('file', file);
    fd.append('user_id', user_id);
    $.ajax({
      type: 'POST',
      url: api.UPLOAD_DOCS,
      contentType: false,
      processData: false,
      data: fd,
      headers: {
        Authorization: 'Bearer ' + token
      },
      success: function (response) {
        if (response.status === 'UNAUTHORIZED') {
          localStorage.clear();
          toastr.error('Your session has been expired,plese login again to continue.');
          browserHistory.push('/login');
        }
        else if (response.status === 'OK') {
          toastr.success(response.message);
          this.setState({
            blocking: false,
            sal_upload_status: 'Complete',
            sal_span_class: 'received',
            sal_status_class: 'fa fa-check'
          });
        }
        else if (response.status === 'INTERNAL_ERROR') {
          toastr.error('Some internal error occured.');
        }
        else {
          toastr.info(response.message);
          this.props.setPercent(100);
        }
      }.bind(this),
      error: function () {
        toastr.error('Server error occured');
      }.bind(this)
    });
  }

  handleChangeforImage() {
    // Assuming only image
    let file = this.refs.file.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onloadend = function (e) {
      this.setState({
        blocking: true,
        imgSrc: [reader.result]
      });
    }.bind(this);
    let token = localStorage.getItem('token');
    const user_id = localStorage.getItem('id');
    let fd = new FormData();
    fd.append('file', file);
    fd.append('user_id', user_id);
    $.ajax({
      type: 'POST',
      url: api.UPLOAD_IMAGE,
      contentType: false,
      processData: false,
      data: fd,
      headers: {
        Authorization: 'Bearer ' + token
      },
      success: (response) => {
        if (response.status === 'UNAUTHORIZED') {
          localStorage.clear();
          toastr.error('Your session has been expired,plese login again to continue.');
          browserHistory.push('/login');
        }
        else if (response.status === 'OK') {
          toastr.success(response.message);
          this.setState({
            blocking: false,
            face_upload_status: 'Complete',
            face_span_class: 'received',
            face_status_class: 'fa fa-check'
          });
        }
        else if (response.status === 'INTERNAL_ERROR') {
          toastr.error('Some internal error occured.');
        }
        else {
          toastr.info(response.message);
          this.props.setPercent(100);
        }
      },
      error: () => {
        toastr.error('Server error occured');
      }
    })
    ;
  }

  handleOpen() {
    this.getBankData();
    this.setState({openDialog: true});
    setTimeout(function () {
      validation.FormValidationMd.init();
    }, 3000);
  }

  handleClose() {
    this.setState({openDialog: false});
  }

  saveBankDetails(data) {
    let token = localStorage.getItem('token');
    $.ajax({
      type: 'POST',
      url: api.SAVE_BANKDETAILS,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      headers: {
        Authorization: 'Bearer ' + token
      },
      success: function (response) {
        if (response.status === 'UNAUTHORIZED') {
          this.props.setPercent(100);
          localStorage.clear();
          toastr.error('Your session has been expired,plese login again to continue.');
          browserHistory.push('/login');
        }
        else if (response.status === 'OK') {
          this.props.setPercent(100);
          localStorage.setItem('filled_bank_data', 1);
          this.handleClose();
          toastr.success(response.message);
        }
        else if (response.status === 'INTERNAL_ERROR') {
          this.props.setPercent(100);
          toastr.error('Some internal error occured.');
        }
        else {
          toastr.info(response.message);
          this.props.setPercent(100);
        }
      }.bind(this),
      error: function () {
        this.props.setPercent(100);
        localStorage.clear();
        toastr.error('Server error occured');
        browserHistory.push('/login');
      }.bind(this)
    });
  }

  getBankData() {
    let token = localStorage.getItem('token');
    let id = localStorage.getItem('id');
    $.ajax({
      type: 'GET',
      url: api.GET_BANKDETAILS,
      dataType: 'json',
      contentType: 'application/json',
      data: {
        user_id: id
      },
      headers: {
        Authorization: 'Bearer ' + token
      },
      success: (response) => {
        if (response.status === 'UNAUTHORIZED') {
          toastr.error('Your session has been expired,plese login again to continue.');
          localStorage.clear();
          browserHistory.push('/login');
        }
        else if (response.status === 'OK') {
          this.handleBankData(response.Data);
        }
        else if (response.status === 'INTERNAL_ERROR') {
          toastr.warning('Some internal error occured');
        }
      },
      error: () => {
        localStorage.clear();
        toastr.error('Server error occured');
        browserHistory.push('/login');
      }
    });
  }

  handleBankData(data) {
    this.setState({
      bankData: data
    });
  }

  handleBankFormSubmit(e) {
    validation.FormValidationMd.init();
    let form = jQuery('#bank_details');
    form.validate();
    if (form.valid()) {
      let data = {
        account_name: ReactDOM.findDOMNode(this.refs.acc_name).value,
        swift_code: ReactDOM.findDOMNode(this.refs.acc_swift_code).value,
        account_number: ReactDOM.findDOMNode(this.refs.acc_number).value,
        bank_name: ReactDOM.findDOMNode(this.refs.bank_name).value,
        user_id: localStorage.getItem('id')
      };
      this.saveBankDetails(data);
    }
    else {
      e.preventDefault();
    }
  }

  render() {
    const bankData = this.state.bankData;
    const actions = [
      <FlatButton
        label='Cancel'
        secondary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
      <FlatButton
        label='Submit'
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleBankFormSubmit.bind(this)}
      />
    ];
    let userName = localStorage.getItem('userName');
    let facePhoto;
    let preview = this.state.imgSrc;
    if (preview) {
      facePhoto = <img src={preview} style={{height: 60, width: 69, marginLeft: 50}}/>;
    }
    else {
      facePhoto = <img src={require('../../images/user.png')} style={{height: 60, width: 69, marginLeft: 50}}/>;
    }

    return (
      <MuiThemeProvider>
        <div className='container-fluid dashboard_wrap'>
          <div className='right_col dashboard' role='main'>
            <div className='dashboard_welcome'>
              <div className='text-center'>
                <h3>Welcome {userName}</h3>
                <p>Click below button to start your loan process</p>
                <div className='next_previous clearfix continue' style={{paddingTop: 0, marginBottom: 70}}>
                  <button type='button' className='btn btn-primary next_btn '>Start Loan process</button>
                </div>
              </div>
            </div>

            <div className='row top_tiles'>
            </div>
            <div className='row'>
              <div className='col-md-12 col-sm-12 col-xs-12'>
                <div className='dashboard_graph'>
                  <div className='row x_title'>
                    <div className='col-md-6'>
                      <h5>Loan Application Status:</h5>
                    </div>
                    <div className='col-md-6 text-right'>
                      <h5 className='complition'><span>50% Completed</span></h5>
                    </div>
                  </div>
                  <div className='col-md-12 col-sm-12 col-xs-12'>
                    <div id='chart_plot_01' className='loan_app'>
                      <div className='status'><strong>Status:</strong> <span>Incomplete</span></div>
                      <div><p>Complete and submit your loan application to receive a loan.</p>
                      </div>
                      <div className='documentstatus'>
                        <div className='loner_head'>
                        </div>
                        <div className='progress_bar'>
                          <ul className='progress-indicator'>
                            <li className='active'>
                              <span className='bubble'/> Incomplete <br/>
                              <small>(active)</small>
                            </li>
                            <li><span className='bubble'/> Processing</li>
                            <li><span className='bubble'/> Approved</li>
                            <li><span className='bubble'/> Disbursed</li>
                          </ul>
                        </div>
                        <BlockUi tag='div' blocking={this.state.blocking}>
                          <div className='table-responsive'>
                            <table className='table table-bordered'>
                              <thead>
                              <tr>
                                <th>Document name</th>
                                <th>Document status</th>
                                <th>Action</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td>General Information</td>
                                <td><span className={this.state.gen_span_class}>
                                  <i className={this.state.gen_status_class}/> {this.state.gen_data_status}</span></td>
                                <td>Verified</td>
                              </tr>
                              <tr>
                                <td>Employee info</td>
                                <td><span className={this.state.emp_span_class}>
                                  <i className={this.state.emp_status_class}/> {this.state.emp_data_status}</span></td>
                                <td><Link to='/empinfo'>
                                  <button className='btn upload_btn' type='button' name='Edit'>Edit</button>
                                </Link></td>
                              </tr>
                              <tr>
                                <td>Relative info</td>
                                <td><span className={this.state.rel_span_class}><i
                                  className={this.state.rel_status_class}/> {this.state.rel_data_status}</span></td>
                                <td><Link to='/relativeinfo'>
                                  <button className='btn upload_btn' type='button' name='Edit'>Edit</button>
                                </Link></td>
                              </tr>
                              <tr>
                                <td>Bank Details</td>
                                <td><span className={this.state.bd_span_class}><i
                                  className={this.state.bd_status_class}/> {this.state.bd_data_status}</span></td>
                                <td><RaisedButton label='Edit' className='mat_btn'
                                                  onTouchTap={this.handleOpen.bind(this)}/></td>
                              </tr>
                              <tr>
                                <td>Face photo</td>
                                <td><span className={this.state.face_span_class}><i
                                  className={this.state.face_status_class}/> {this.state.face_upload_status}</span>
                                </td>
                                <td>
                                  <span>
                                      <div
                                        className='upload_img'> {facePhoto} </div>
                                      <div className='fileupload_wrap'>
                                          <RaisedButton
                                            label='Choose an Image'
                                            labelPosition='before'
                                            style={styles.button}
                                            containerElement='label'
                                          >
                                              <input type='file' name='user[image]' ref='file'
                                                     accept='image/*' onChange={this.handleChangeforImage}
                                                     style={styles.exampleImageInput}/>
                                          </RaisedButton>
                                      </div>
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Address</td>
                                <td><span className={this.state.address_span_class}><i
                                  className={this.state.address_status_class}/>{this.state.address_upload_status}</span>
                                </td>
                                <td><span>Verified</span></td>
                              </tr>
                              <tr>
                                <td>Salary slip</td>
                                <td><span className={this.state.sal_span_class}><i
                                  className={this.state.sal_status_class}/>{this.state.sal_upload_status}</span></td>
                                <td>
                                  <span>
                                      <div className='fileupload_wrap'>
                                          <input
                                            ref='salary_slip'
                                            type='file'
                                            onChange={this.handleChangeforDocs.bind(this)}
                                            accept='application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf'
                                          />
                                          <button className='btn upload_btn'>Browse</button>
                                      </div>
                                  </span>
                                </td>
                              </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className='next_previous clearfix continue'>
                            <button type='button' className='btn btn-primary pull-right next_btn'>Continue Loan
                              process
                            </button>
                          </div>
                        </BlockUi>
                      </div>
                    </div>
                  </div>
                  <div className='clearfix'/>
                </div>
              </div>
            </div>
            <div>
              <Dialog
                className='mat_modal'
                title='Bank Details'
                actions={actions}
                modal={false}
                open={this.state.openDialog}
                onRequestClose={this.handleClose}
                autoScrollBodyContent={true}
              >
                <form id='bank_details' className='bank_form'>
                  <div className='modal-body'>
                    <div className='form-group'>
                      <label className='label-control'>Account holder's name</label>
                      <input type='text' className='form-control' id='acc_name'
                             placeholder={'Enter account holder\'s name'} name='account_holder' maxLength={45}
                             ref='acc_name' defaultValue={bankData ? bankData.account_name : ''}
                             key={bankData ? bankData.account_name : ''}/>
                    </div>

                    <div className='form-group'>
                      <label className='label-control'>Account number</label>
                      <InputElement id='acc_number' ref='acc_number' minLength={6} maxLength={16}
                                    placeholder='ENTER ACCOUNT NUMBER' name='acc_number'
                                    defaultValue={bankData ? bankData.account_number : ''}
                                    key={bankData ? bankData.account_number : ''} className='form-control'
                                    mask='9999999999999999' maskChar={null}/>
                    </div>
                    <div className='form-group'>
                      <label className='label-control'>Bank name</label>
                      <input type='text' className='form-control' id='bank_name' placeholder='Enter bank name'
                             name='bank_name' ref='bank_name' maxLength={45}
                             defaultValue={bankData ? bankData.name : ''} key={bankData ? bankData.name : ''}/>
                    </div>
                    <div className='form-group'>
                      <label className='label-control'>Swift Code</label>
                      <input type='text' className='form-control' id='acc_swift_code' placeholder='Enter swift code'
                             minLength={8} maxLength={11} name='acc_swift_code' ref='acc_swift_code'
                             defaultValue={bankData ? bankData.swift_code : ''}
                             key={bankData ? bankData.swift_code : ''}/>
                    </div>
                  </div>
                </form>
              </Dialog>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default loanapplicationstatus1;
