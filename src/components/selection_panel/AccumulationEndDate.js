import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import './AccumulationEndDate.css'

class AccumulationEndDate extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.isDaySelected = this.isDaySelected.bind(this);

    this.state = {
      selectedDay: new Date(),
    }
  }
  // Check if the day in state is selected
  isDaySelected(day) {
    return DateUtils.isSameDay(day, this.state.selectedDay);
  }
  handleDayClick(e, day) {
    this.setState({ selectedDay: day });
  }
  render() {
    return (
      <div>
        <DayPicker
          onDayClick={ this.handleDayClick }
          selectedDays={ this.isDaySelected }
        />
        <p>
          The selected day is <strong className="primary-color">{ this.state.selectedDay.toLocaleDateString() }</strong>
        </p>
      </div>
    )
  }
}

export default AccumulationEndDate
