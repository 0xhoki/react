import './menu-dropbox.styl';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class MenuDropboxComponent extends React.Component {
  constructor(props) {
    super(...props);

    this.state = {
      isFocus: false
    };

    this.dispatchAction = this.dispatchAction.bind(this);
  }

  static propTypes = {
    imgSrc: PropTypes.string,
    sourceList: PropTypes.array,
    tabIndex: PropTypes.number,
    dispatch: PropTypes.func
  };

  dispatchAction(action) {
    this.props.dispatch(action());
    this.setState({isFocus: false});
  }

  render() {
    const {dispatchAction} = this;
    const {isFocus} = this.state;
    const {imgSrc, sourceList, tabIndex} = this.props;
    const dropboxClass = classNames('menu-dropbox', {'menu-dropbox--focus': isFocus});

    return (
      <div
        className={dropboxClass}
        tabIndex={tabIndex}
        onFocus={() => {
          this.setState({'isFocus': true});
        }}
        onBlur={() => {
          this.setState({'isFocus': false});
        }}
        onClick={(e) => {
          e.preventDefault();
        }}
        onMouseDown={() => {
          this.setState({'isFocus': !this.state.isFocus});
        }}
      >
        <img className='menu-dropbox__user-img' src={imgSrc}/>
        <div className='menu-dropbox__arrow-container'>
          <i className='fa fa-chevron-down'/>
        </div>
        <ul className='menu-dropbox__list'>
          {
            sourceList.map((config, key) => (
              <li key={key} className='menu-dropbox__item'>
                {
                  config.to && <Link to={config.to} onMouseDown={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}>
                    {config.text}
                  </Link>
                }
                {
                  config.action && <span onMouseDown={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    dispatchAction(config.action);
                  }}>
                    {config.text}
                  </span>
                }
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export const MenuDropbox = connect(
  ({user: {userInfo: {pictureUrl}}}) => ({
    imgSrc: pictureUrl
  }), (dispatch) => ({
    dispatch
  })
)(MenuDropboxComponent);
