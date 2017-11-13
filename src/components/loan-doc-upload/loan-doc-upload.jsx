import './loan-doc-upload.styl';
import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import classNames from 'classnames';

const dropZoneStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  border: 'none'
};

function LoanDocUpload(props) {
  const onChange = (files) => {
    const {input} = props;
    input.onChange(files[0]);
  };

  const {input, label, exist} = props;
  input.type = 'file';
  const uploadClass = classNames('loan-doc-upload__col', {'loan-doc-upload--uploaded': !!input.value || exist});
  return (
    <div className={uploadClass}>
      <div className='loan-doc-upload__btn'>
        {label}
        <Dropzone
          {...props.input}
          onDrop={ onChange }
          style={dropZoneStyle}
          multiple={false}
        />
      </div>
    </div>
  );
}

LoanDocUpload.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  exist: PropTypes.bool
};

export default LoanDocUpload;
