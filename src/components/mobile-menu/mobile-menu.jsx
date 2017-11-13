import './mobile-menu.styl';
import React from 'react';
import {Link} from 'react-router';
import translate from 'counterpart';

const getMenu = (locale) => ([
  {iconClass: 'fa fa-tachometer', text: locale.dashboard, to: '/dashboard'},
  {iconClass: 'fa fa-money', text: locale.myLoan, to: '/my-loan'},
  {iconClass: 'fa fa-files-o', text: locale.loanApp, to: '/profile/loan-app'},
  {iconClass: 'fa fa-user', text: locale.personalProfile, to: '/profile'},
  {iconClass: 'fa fa-black-tie', text: locale.employmentDetails, to: '/profile/employment-information'},
  {iconClass: 'fa fa-user', text: locale.spouseDetails, to: '/profile/spouse'},
  {iconClass: 'fa fa-file-o', text: locale.relativeDetails, to: '/profile/relative'},
  {iconClass: 'fa fa-file-archive-o', text: locale.documents, to: '/profile/documents'},
  {iconClass: 'fa fa-users', text: locale.ourTeam, to: '/our-team'},
  {iconClass: 'fa fa-info-circle', text: locale.faq, to: '/faq'},
  {iconClass: 'fa fa-exclamation-triangle', text: locale.termsOfService, to: '/terms'},
  {iconClass: 'fa fa-lock', text: locale.privacyPolicy, to: '/privacy'},
  {iconClass: 'fa fa-phone-square', text: locale.contactUs, to: '/contact-us'}
/*  {iconClass: 'fa fa-sign-out', text: locale.logout, to: ''}*/
]);

export function MobileMenu() {
  const locale = translate('layout').menu;
  const menu = getMenu(locale);

  return (
    <div className='mobile-menu'>
      {
        menu.map((section, key) =>
          <Link
            key={key}
            className='mobile-menu__link'
            to={section.to}
          >
            <div className='mobile-menu__icon'>
              <i className={section.iconClass} />
            </div>
            <div className='mobile-menu__text'>
              {section.text}
            </div>
          </Link>
        )
      }
    </div>
  );
}