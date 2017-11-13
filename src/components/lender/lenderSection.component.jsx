import React from 'react';
import '../../images/danablue.gif';
import PropTypes from 'prop-types';

class LenderSection extends React.Component {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    return (
      <div>

        {this.props.children}
      </div>
    );
  }
}

export default LenderSection;
