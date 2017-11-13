import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class datePickerField {
  static renderdatePicker(field) {
    const {placeholder, meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''} `;

    const value = field.input.value && typeof (field.input.value) === 'string' ?
      moment(field.input.value, field.dateFormat) : field.input.value;

    const onChangeHandler = (e) => {
      field.input.onChange(e.format(field.dateFormat));
    };

    return (
      <div className={className}>
        <DatePicker
          dateFormat={field.dateFormat}
          maxDate={field.maxDate}
          selected={field.input.value ? moment(value, field.dateFormat) : null}
          onChange={onChangeHandler}
          placeholderText={placeholder}
          showMonthDropdown
          showYearDropdown
          scrollableYearDropdown
        />
        <div className='help-block help-block-error'>
          {touched ? error : ''}
        </div>
      </div>
    );
  }
}

export default datePickerField;
