import React, { Component } from 'react'
// import { Link } from 'react-router'

import PestSelector from './PestSelector'
import StateSelector from './StateSelector'
import StationSelector from './StationSelector'
import DateSelector from './DateSelector'
import { inject, observer } from 'mobx-react'
import { action } from 'mobx'
import axios from "axios"

@inject('store') @observer
class SelectionPanel extends Component {

  @action updateData = (d) => {
    this.props.store.ACISData = d
  }

    @action degreeDays = () => {
    const acis = this.props.store.ACISData.data.data
    const min = acis.map(day => Math.min(...day[1]))
    const max = acis.map(day => Math.max(...day[1]))
    const avg = min.map((val, i) => (Math.round((val + max[i])/2)))
    const base = 50
    const dd = avg.map(val => {
      if (val-base > 0) {
        return val - base
      } else {
        return 0
      }
    })
    dd.reduce((prev, curr, i) => this.props.store.accdd[i] = prev + curr, 0)
    this.props.store.dd = dd
  }

  @action getACISdata = () => {
    const { station, endDate } = this.props.store.selected
    const params = {
      sid: `${station.id} ${station.network}`,
      sdate: `${endDate.getFullYear()}-01-01`,
      edate: endDate.toISOString().split('T')[0],
      elems: "23"
    }
    return axios
    .post(" http://data.test.rcc-acis.org/StnData", params)
    .then(res => {
      this.updateData(res)
      this.degreeDays()
      this.context.router.transitionTo('/results')
      console.log('getACISdata Added to store!')
      // console.log(mobx.toJS(this.props.store.ACISData.data.data))
    })
    .catch(err => {
      console.log(err)
      // console.log(`Request Error: ${err.response.data || err.response.statusText}`)
      this.updateData = {}
    })
  }

  render () {
    // console.log(this.props.store.dd.slice())
    return (
      <div className='tile is-parent is-4'>
        <div className='tile is-child box' >
          <PestSelector />
          <br />
          <StateSelector />
          <br />
          <StationSelector />
          <br />
          <DateSelector />
          <br />
          <a
            onClick={this.getACISdata}
            className='button is-primary is-outlined'>
            Calculate
          </a>
        </div>
      </div>
    )
  }
}

SelectionPanel.wrappedComponent.contextTypes = {
  router: React.PropTypes.object
}

export default SelectionPanel
