import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import './AccumulationEndDate.css'
import { action } from 'mobx';
import { inject, observer } from 'mobx-react';

@inject('store') @observer
class AccumulationEndDate extends Component {
  // Check if the day in state is selected
  @action isDaySelected = (endDate) => {
    return DateUtils.isSameDay(endDate, this.props.store.selected.endDate);
  }
  @action handleDayClick = (e, endDate) => {
    // this.setState({ selectedDay: endDate });
    this.props.store.selected.endDate = endDate
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
          The selected <strong>Date</strong> is <strong className="primary-color">{ selected.endDate.toLocaleDateString() }</strong>
        </p>
      </div>
    )
  }
}

export default AccumulationEndDate
