import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import './AccumulationEndDate.css'
import { action } from 'mobx';
import { inject, observer } from 'mobx-react';

@inject('store') @observer
class AccumulationEndDate extends Component {
  // Check if the day in state is selected
  @action isDaySelected(day) {
    return DateUtils.isSameDay(day, this.props.store.selected.day);
  }
  @action handleDayClick(e, day) {
    // this.setState({ selectedDay: day });
    this.props.store.selected.day = day
  }

  render() {
    const { selected } = this.props.store
    return (
      <div>
        <label className="label">Accumulation End Date:</label>
        <DayPicker
          onDayClick={ this.handleDayClick.bind(this) }
          selectedDays={ this.isDaySelected.bind(this) }
        />
        <p>
          The selected day is <strong className="primary-color">{ selected.day.toLocaleDateString() }</strong>
        </p>
      </div>
    )
  }
}

export default AccumulationEndDate
