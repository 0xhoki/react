import './profile-header.styl';
import React from 'react';
import {Link} from 'react-router';
import translate from 'counterpart';
import {MenuDropbox} from '../menu-dropbox/menu-dropbox.jsx';
import {logoutWithRedirect} from '../../actions/user.actions';

const getMenuConfig = () => ([
  {action: logoutWithRedirect, text: 'Logout'},
  {to: '/profile', text: 'Profile'},
  {to: '/help', text: 'Help'}
]);

export function ProfileHeader() {
  const locale = translate('layout').menu;

  return (
    <div className='profile-header'>
      <div className='profile-header__middle'>
        <Link to='/' className='profile-header__logo'>
          <img src={require('../../images/danablue.png')} />
          <div>DanaKita</div>
        </Link>
        <div className='profile-header__links'>
          <Link
            to='/profile/dashboard'
            className='profile-header__link1'
          >
            {locale.dashboard}
          </Link>
          <Link
            to='/profile/loan-app'
            className='profile-header__link1'
          >
            {locale.loanApp}
          </Link>
          <Link
            to='/profile/my-loan'
            className='profile-header__link1'
          >
            {locale.myLoan}
          </Link>
        </div>
        <div className='profile-header__menu'>
          <MenuDropbox
            tabIndex={-1}
            sourceList={getMenuConfig({})}
          />
        </div>
      </div>
      <div className='profile-header__nav-container'>
        <div className='profile-header__middle'>
          <Link
            to='/profile'
            className='profile-header__link2'
          >
            {locale.personalProfile}
          </Link>
          <Link
            to='/profile/bank'
            className='profile-header__link2'
          >
            {locale.bankDetails}
          </Link>
          <Link
            to='/profile/employment-information'
            className='profile-header__link2'
          >
            {locale.employmentDetails}
          </Link>
          <Link
            to='/profile/spouse'
            className='profile-header__link2'
          >
            {locale.spouseDetails}
          </Link>
          <Link
            to='/profile/relative'
            className='profile-header__link2'
          >
            {locale.relativeDetails}
          </Link>
          <Link
            to='/profile/documents'
            className='profile-header__link2'
          >
            {locale.documents}
          </Link>
        </div>
      </div>

    </div>
  );
}
