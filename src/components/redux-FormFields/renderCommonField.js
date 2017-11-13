import React from 'react';
import InputElement from 'react-input-mask';
import classNames from 'classnames';

class formFields {
  static renderTextbox(field) {
    const {type, maxLength, placeholder, meta: {asyncValidating, touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''} `;
    return (
      <div className={className}>
        <div className={asyncValidating ? 'async-validating' : ''}>
          <input
            {...field.input}
            className='form-control'
            type={type ? type : 'text'}
            maxLength={maxLength ? maxLength : 45}
            placeholder={placeholder}
          />
          <div className='help-block help-block-error'>
            {touched ? error : ''}
          </div>
        </div>
      </div>
    );
  }

  static renderTextArea(field) {
    const {type, placeholder, meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''} `;
    return (
      <div className={className}>
        <textarea
          {...field.input}
          className='form-control'
          type={type ? type : 'text'}
          rows='4' cols='4'
          maxLength='350'
          placeholder={placeholder}
        />
        <div className='help-block help-block-error'>
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  static renderZipField(field) {
    const {placeholder, meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''} `;
    return (
      <div className={className}>
        <InputElement
          {...field.input}
          mask='99999'
          className='form-control'
          placeholder={placeholder}
          maskChar={null}
        />
        <div className='help-block help-block-error'>
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  static renderCommonTextBox({input, label, meta: {touched, error}, ...props}) {
    const inputClassName = classNames('common-form__input', {'common-form--has-error': touched && error});

    return (
      <label className='common-form__group'>
        <div className='common-form__label'>
          {label}
        </div>
        <input className={inputClassName} {...props} {...input} />
        {
          touched && error &&
          <div className='common-form__error'>
            {error}
          </div>
        }
      </label>
    );
  }

  static renderCommonRadio({input, data, label}) {
    return (
      <fieldset className='common-form__group'>
        <div className='common-form__label'>
          {label}
        </div>
        {
          data.map((obj, key) => {
            return (
              <label key={key} className='common-form__radio-label'>
                <input
                  className='common-form__radio'
                  value={obj.value}
                  name={input.name}
                  checked={obj.value === input.value}
                  onChange={input.onChange}
                  type='radio'
                />
                {obj.text}
              </label>);
          })
        }
      </fieldset>
    );
  }

  static renderCommonTextArea({input, label, meta: {touched, error}, ...props}) {
    const inputClassName = classNames('common-form__input', {'common-form--has-error': touched && error});

    return (
      <label className='common-form__group'>
        <div className='common-form__label'>
          {label}
        </div>
        <textarea className={inputClassName} {...props} {...input} />
        {
          touched && error &&
          <div className='common-form__error'>
            {error}
          </div>
        }
      </label>
    );
  }

  static renderCommonSelect({input, data, label, meta: {touched, error}, ...props}) {
    const inputClassName = classNames('common-form__input', {'common-form--has-error': touched && error});
    return (
      <label className='common-form__group'>
        <div className='common-form__label'>
          {label}
        </div>
        <select className={inputClassName} {...props} {...input}>
          <option value='' disabled>Please select</option>
          {
            data.map((keyValuePair, key) => {
              return (
                <option
                  key={key}
                  value={keyValuePair.value}
                >
                  {keyValuePair.text}
                </option>);
            })
          }
        </select>
        {
          touched && error &&
          <div className='common-form__error'>
            {error}
          </div>
        }
      </label>
    );
  }
}

export default formFields;
