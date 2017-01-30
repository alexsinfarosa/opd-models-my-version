import React from 'react'
import { Link, Match } from 'react-router'

import TheMap from '../../pages/TheMap/TheMap'
import Results from '../../pages/Results/Results'
import MoreInfo from '../../pages/MoreInfo/MoreInfo'

const AppDisplayPanel = () => {
  return (
    <div className='tile is-parent is-8'>
      <div className='tile is-child box'>
        <div className='tabs'>
          <ul>
            <li><Link to='/map' activeClassName='is-active'>Map</Link></li>
            <li><Link to='/results' activeClassName='is-active'>Results</Link></li>
            <li><Link to='moreinfo' activeClassName='is-active'>More Info</Link></li>
          </ul>
        </div>
        <div className='tile is-child' >
          <Match pattern='/map' component={TheMap} />
          <Match pattern='/results' component={Results} />
          <Match pattern='/moreinfo' component={MoreInfo} />
        </div>
      </div>
    </div>
  )
}

export default AppDisplayPanel
