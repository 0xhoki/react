import React from 'react';

class loanapplicationstatus4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='container-fluid dashboard_wrap'>
        <div className='container-fluid dashboard_wrap'>
          <div className='right_col dashboard' role='main'>
            <div className='dashboard_welcome'>
              <div className='text-center'>
                <h3>Welcome Huge Doe</h3>
              </div>
            </div>
            <div className='row top_tiles'>
              <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12'>
                  <div className='dashboard_graph'>
                    <div className='row x_title'>
                      <div className='col-md-12 text-center'>
                        <h5>You have no active loans or loan applications. Click here to start new loan
                          application.</h5>
                      </div>
                    </div>
                    <div className='col-md-12 col-sm-12 col-xs-12'>
                      <div className='next_previous clearfix continue text-center newloan_btn'>
                        <button type='button' className='btn btn-primary next_btn '>Start Loan process</button>
                      </div>
                      <div id='chart_plot_01' className='loan_app'>
                        <div className='documentstatus repaid_doc'>
                          <div className='loner_head' />
                          <div className='table-responsive repaid_table'>
                            <table className='table table-bordered'>
                              <thead>
                              <tr>
                                <th>Date</th>
                                <th>Loan Amount</th>
                                <th>Principal Intrest</th>
                                <th>Total</th>
                                <th>Status</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td><span className='date'>09/18/2017</span></td>
                                <td><span className=''>Rp. 1.000.000</span></td>
                                <td><span className=''>10%</span></td>
                                <td><span className=''>Rp. 1.000.000</span></td>
                                <td>None</td>
                              </tr>
                              <tr>
                                <td><span className='date'>09/18/2017</span></td>
                                <td><span className=''>Rp. 1.000.000</span></td>
                                <td><span className=''>10%</span></td>
                                <td><span className=''>Rp. 1.000.000</span></td>
                                <td>None</td>
                              </tr>
                              <tr>
                                <td><span className='date'>09/18/2017</span></td>
                                <td><span className=''>Rp. 1.000.000</span></td>
                                <td><span className=''>10%</span></td>
                                <td><span className=''>Rp. 1.000.000</span></td>
                                <td>None</td>
                              </tr>
                              <tr>
                                <td><span className='date'>09/18/2017</span></td>
                                <td><span className=''>Rp. 1.000.000</span></td>
                                <td><span className=''>10%</span></td>
                                <td><span className=''>Rp. 1.000.000</span></td>
                                <td>None</td>
                              </tr>
                              <tr>
                                <td><span className='date'>09/18/2017</span></td>
                                <td><span className=''>Rp. 1.000.000</span></td>
                                <td><span className=''>10%</span></td>
                                <td><span className=''>Rp. 1.000.000</span></td>
                                <td>None</td>
                              </tr>
                              <tr>
                                <td><span className='date'>09/18/2017</span></td>
                                <td><span className=''>Rp. 1.000.000</span></td>
                                <td><span className=''>10%</span></td>
                                <td><span className=''>Rp. 1.000.000</span></td>
                                <td>None</td>
                              </tr>
                              <tr>
                                <td><span className='date'>09/18/2017</span></td>
                                <td><span className=''>Rp. 1.000.000</span></td>
                                <td><span className=''>10%</span></td>
                                <td><span className=''>Rp. 1.000.000</span></td>
                                <td>None</td>
                              </tr>
                              <tr>
                                <td><span className='date'>09/18/2017</span></td>
                                <td><span className=''>Rp. 1.000.000</span></td>
                                <td><span className=''>10%</span></td>
                                <td><span className=''>Rp. 1.000.000</span></td>
                                <td>None</td>
                              </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className='next_previous clearfix continue' />
                        </div>
                      </div>
                    </div>
                    <div className='clearfix' />
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

export default loanapplicationstatus4;
