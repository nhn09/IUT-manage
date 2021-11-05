import React from 'react'
import './DynamicProgress.css'

const DynamicProgressBar = (props) => {

    const {reading} = props
    return (
        <div className="progress-bar">
        <div className="value">
          <div style={{'color': reading.color, 'width': reading.value + '%'}}>
            <span>{reading.value}%</span>
          </div>
        </div>
        <div className="scale">
          <div className="graduation" style={{'color': reading.color, 'width': reading.value + '%'}}>
            <span>|</span>
          </div>
        </div>
        <div className="bar">
          <div style={{'backgroundColor':reading.color, 'width': reading.value + '%'}}>
          </div>
          <div style={{'backgroundColor': '#d3d3d3', 'width': (100-reading.value) + '%'}}>
          </div>
        </div>
        <div className="legend">
          <div>
            <span className="dot" style={{'color': reading.color}}>●</span>
            <span className="label">{reading.name}</span>
          </div>
        </div>
      </div>
    )
}

export default DynamicProgressBar
