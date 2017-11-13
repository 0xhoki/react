import './footer.styl';
import React from 'react';
import translate from 'counterpart';
import {Link} from 'react-router';

export const Footer = () => {
  const locale = translate('layout').footer;

  return (
    <div className='footer'>
      {
        locale && locale.links.map((hrefTextPair, key) =>
          <Link key={key} className='footer__link' to={hrefTextPair.href}>
            {hrefTextPair.text}
          </Link>
        )
      }
    </div>
  );
};
