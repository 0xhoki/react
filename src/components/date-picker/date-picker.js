import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);

    const dateValue = props.input.value || moment().format(props.format);
    const date = moment(dateValue, props.format);
    this.state = {
      date
    };

    this.onSelect = this.onSelect.bind(this);
  }

  static propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    placeholders: PropTypes.array,
    meta: PropTypes.object,
    format: PropTypes.string
  };

  static defaultProps = {
    format: 'YYYY-MM-DD'
  };

  componentWillReceiveProps (nextProps) {
    const dateValue = nextProps.input.value;
    if (dateValue) {
      const date = moment(dateValue, this.props.format);
      this.setState({date});
    }
  }

  onSelect(type) {
    return function (event) {
      const {date} = this.state;
      const {onChange} = this.props.input;
      const currentValue = date.clone().set(type, event.target.value);
      this.setState({'date': currentValue});
      if (onChange) {
        onChange(currentValue.format(this.props.format));
      }
    }.bind(this);
  }

  static getRangeDays(date) {
    const daysInMonth = +date.clone().endOf('month').format('D');
    return new Array(daysInMonth).fill(null).map((e, i) => i + 1);
  }

  static getYearRange() {
    const year = moment().year();
    return new Array(60).fill(null).map((e, i) => year - i);
  }

  static rangeMonths = moment.months();

  render() {
    const {onSelect} = this;
    const {date} = this.state;
    const {label} = this.props;
    const currentDate = date.date();
    const currentMonth = date.format('MMMM');
    const currentYear = date.year();
    const daysRange = DatePicker.getRangeDays(date);
    const monthsRange = DatePicker.rangeMonths;
    const yearsRange = DatePicker.getYearRange();

    return (
      <div className='common-form__group'>
        <div className='common-form__label'>
          {label}
        </div>
        <div className='row'>
          <div className='col-xs-4'>
            <select
              className='common-form__input'
              onChange={onSelect('date')}
              value={currentDate}
            >
              {
                daysRange.map((day, key) => {
                  return (<option key={key} value={day}>{day}</option>);
                })
              }
            </select>
          </div>
          <div className='col-xs-4'>
            <select
              className='common-form__input'
              onChange={onSelect('month')}
              value={currentMonth}
            >
              {
                monthsRange.map((month, key) => {
                  return (<option key={key} value={month}>{month}</option>);
                })
              }
            </select>
          </div>
          <div className='col-xs-4'>
            <select
              className='common-form__input'
              onChange={onSelect('year')}
              value={currentYear}
            >
              {
                yearsRange.map((year, key) => {
                  return (<option key={key} value={year}>{year}</option>);
                })
              }
            </select>
          </div>
        </div>
      </div>
    );
  }
}