import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

function FileInput(props) {
  const onChange = (files) => {
    const {input} = props;
    input.onChange(files[0]);
  };

  return (
    <Dropzone onDrop={ onChange } {...this.props} />
  );
}

FileInput.propTypes = {
  input: PropTypes.object
};

export default FileInput;
