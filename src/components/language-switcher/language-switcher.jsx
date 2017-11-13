import React from 'react';
import {connect} from 'react-redux';
import {setLanguage} from '../../actions/language.actions';
import {bindActionCreators} from 'redux';
import counterpart from 'counterpart';
import PropTypes from 'prop-types';

counterpart.registerTranslations('en', require('../../locales/en'));
counterpart.registerTranslations('id', require('../../locales/id'));

class LanguageSwitcherComponent extends React.Component {
  static propTypes = {
    language: PropTypes.object,
    setLanguage: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.setLanguage(e.target.checked ? 'id' : 'en');
  }

  render() {
    return (
      <div className='language'>
        <label className='switch' defaultValue={counterpart.getLocale()}>
          <input type='checkbox' defaultChecked={this.props.language.current === 'id'} onChange={this.handleChange}/>
          <div className='slider round'>
            <span value='id'>ID</span>
            <span value='en'>EN</span>
          </div>
        </label>
      </div>
    );
  }
}

export const LanguageSwitcher = connect(({language}) => {
  return {language};
}, (dispatch) => {
  return {
    setLanguage: bindActionCreators(setLanguage, dispatch)
  };
})(LanguageSwitcherComponent);
