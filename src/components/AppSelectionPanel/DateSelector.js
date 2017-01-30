import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import './DateSelector.css'
import { action } from 'mobx';
import { inject, observer } from 'mobx-react';

@inject('store') @observer
export default class DateSelector extends Component {

  @action handleDayClick = (e, endDate) => {
    this.props.store.selected.endDate = endDate
    const startDate = `01/01/${endDate.getFullYear()}`
    this.props.store.selected.startDate = startDate
  }

  render() {
    const { selected } = this.props.store
    return (
      <div>
        <label className="label">Accumulation End Date:</label>
        <DayPicker
          onDayClick={ this.handleDayClick }
          selectedDays={ this.isDaySelected }
        />
        <p>
          The selected date is
          <strong className="primary-color">
            { selected.endDate.toLocaleDateString()}
          </strong>
        </p>
      </div>
    )
  }
}
