import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class selectFields {
  static renderSelectField(field) {
    const {placeholder, meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''} `;
    return (
      <div className={className}>
        <Select
          {...field}
          clearable={false}
          searchable={false}
          value={field.input.value || ''}
          onChange={(value) => field.input.onChange(value)}
          options={field.options}
          placeholder={placeholder}
        />
        <div className='help-block help-block-error'>
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  static selectBox({input, options, placeholder, meta: {touched, error}, ...props}) {
    const handleInputChange = ({value}) => input.onChange(value);
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    // todo: after refactoring styles make top div as label

    return (
      <div className={className}>
        <Select
          clearable={false}
          searchable={false}
          options={options}
          placeholder={placeholder}
          {...input}
          {...props}
          onChange={handleInputChange}
        />
        <div className='help-block help-block-error'>
          {touched ? error : ''}
        </div>
      </div>
    );
  }
}

export default selectFields;
