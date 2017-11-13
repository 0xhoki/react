import './profile-progress.styl';
import React from 'react';
import PropTypes from 'prop-types';

const ProfileProgress = ({count, total}) => {
  return (
    <div className='profile-progress'>
      <div className='profile-progress__text'>
        {
          count + '/' + total + ' Completed'
        }
      </div>
      <div className='profile-progress__line'>
        <div
          className='profile-progress__line-inner'
          style={{width: `${count * 100 / total}%`}}
        />
      </div>
    </div>
  );
};

ProfileProgress.propTypes = {
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export {ProfileProgress};
