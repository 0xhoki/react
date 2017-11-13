import React from 'react';
import * as script from '../../js/custom.min.js';

class loanapplicationstatus2 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    script.layout.init();
  }

  render() {
    return (
      <div className='container-fluid dashboard_wrap'>
        <div className='right_col dashboard' role='main'>
          <div className='dashboard_welcome'>
            <div className='text-center'>
              <h3>Welcome Huge Doe</h3>
              <p>Click below button to start your loan process</p>
              <div className='next_previous clearfix continue' style={{paddingTop: 0, marginBottom: 70}}>
                <button type='button' className='btn btn-primary next_btn '>Start Loan process</button>
              </div>
            </div>
          </div>
          <div className='row top_tiles' />
          <div className='row'>
            <div className='col-md-12 col-sm-12 col-xs-12'>
              <div className='dashboard_graph'>
                <div className='row x_title'>
                  <div className='col-md-6'>
                    <h5>Loan Application Status:</h5>
                  </div>
                  <div className='col-md-6 text-right'>
                    <h5 className='complition'><span>100% Completed</span></h5>
                  </div>

                </div>
                <div className='col-md-12 col-sm-12 col-xs-12'>
                  <div id='chart_plot_01' className='loan_app'>
                    <div className='status'><strong>Status:</strong> <span>Processing</span></div>
                    <div>
                      <p>We are processing your loan!</p>
                    </div>
                    <div className='documentstatus'>
                      <div className='loner_head'>

                      </div>
                      <div className='progress_bar'>
                        <ul className='progress-indicator'>
                          <li className='completed'><span className='bubble'/> Incomplete</li>
                          <li className='active'><span className='bubble'/> Processing <br/>
                            <small>(active)</small>
                          </li>
                          <li><span className='bubble'/> Approved</li>
                          <li><span className='bubble'/> Disbursed</li>
                        </ul>
                      </div>
                      <div className='table-responsive'>
                        <table className='table table-bordered'>
                          <thead>
                          <tr>
                            <th>Document name</th>
                            <th>Documnet status</th>
                            <th>Action</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td>Check permission</td>
                            <td><span className='received'><i className='fa fa-check'/> Received</span> <span
                              className='date'>on 09/18/2017</span></td>
                            <td>None</td>
                          </tr>
                          <tr>
                            <td>Id card</td>
                            <td><span className='received'><i className='fa fa-check'/> Received</span> <span
                              className='date'>on 09/18/2017</span></td>
                            <td>None</td>
                          </tr>
                          <tr>
                            <td>Family card</td>
                            <td><span className='received'><i className='fa fa-check'/> Received</span> <span
                              className='date'>on 09/18/2017</span></td>
                            <td>None</td>
                          </tr>
                          <tr>
                            <td>Face photo</td>
                            <td><span className='incomplete'><i className='fa fa-times'/> Incomplete</span></td>
                            <td><a href=''>Upload photo</a></td>
                          </tr>
                          <tr>
                            <td>Letter of employer</td>
                            <td><span className='incomplete'><i className='fa fa-times'/> Incomplete</span></td>
                            <td>Verify</td>
                          </tr>
                          <tr>
                            <td>Address</td>
                            <td><span className='pending'>...Pending</span></td>
                            <td><span>Please wait while we confirm your address</span></td>
                          </tr>
                          <tr>
                            <td>Salary slip</td>
                            <td><span className='incomplete'>Incomplete</span></td>
                            <td><span><a href=''>Upload salary slip</a></span></td>
                          </tr>
                          <tr>
                            <td>Certificate</td>
                            <td><span className='incomplete'>Incomplete</span></td>
                            <td><span><a href=''>Upload certificate</a></span></td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className='next_previous clearfix continue'>
                        <button type='button' className='btn btn-primary pull-right next_btn'>Continue Loan process
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
                <div className='clearfix'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default loanapplicationstatus2;
