import React from 'react';
import PropTypes from 'prop-types';
import ReduxToastr from 'react-redux-toastr';
import LoadingBar from 'react-redux-loading-bar';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'react-block-ui/style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/css/custom.min.css';
import '../styles/css/sidebar.css';
import '../styles/css/progress-wizard.min.css';
import '../styles/index.styl';

export class AppContainer extends React.Component {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    return (
      <div>
        <LoadingBar style={{backgroundColor: '#29D', height: '3px', position: 'fixed', left: 0, top: 0, zIndex: 9999}}/>
        <ReduxToastr
          timeOut={1000}
          newestOnTop={false}
          preventDuplicates
          position='top-right'
          transitionIn='fadeIn'
          transitionOut='fadeOut'/>
        {this.props.children}
      </div>
    );
  }
}
