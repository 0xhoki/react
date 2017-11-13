import './profile-card.styl';
import React from 'react';
import {isMobile} from '../../helpers.js';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class UserCard extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    pictureUrl: PropTypes.string,
    address: PropTypes.string
  };

  isMobile = isMobile();

  render() {
    const {pictureUrl, name, address} = this.props;
    const profileClass = classNames('profile-card', {'profile-card--mobile': this.isMobile});

    return (
      <div className={profileClass}>
        <div className='profile-card__photo'>
          <img src={pictureUrl} />
        </div>
        <div className='profile-card__right-part'>
          <div className='profile-card__name'>
            {name}
          </div>
          <div className='profile-card__detail'>
            <div className='profile-card__detail-row'>
              <div className='profile-card__detail-cell profile-card__detail-cell--icon'>
                <i className='fa fa-map-pin' />
              </div>
              <div className='profile-card__detail-cell'>
                {address}
              </div>
            </div>
            {/*
              <div className='profile-card__detail-row'>
                <div className='profile-card__detail-cell profile-card__detail-cell--icon'>
                  <i className='fa fa-credit-card' />
                </div>

                  <div className='profile-card__detail-cell'>
                    Member since
                  </div>
              </div>
            */}
          </div>
        </div>
      </div>
    );
  }
}

export {UserCard};
