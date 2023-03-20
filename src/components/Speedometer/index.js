import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}
  onAccelerate = () => {
    this.setState(prevState => ({speed: prevState.speed + 10}))
  }
  onBreak = () => {
    this.setState(prevState => ({speed: (prevState.speed = 0)}))
  }
  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="Speedometer"
        />
        <h4 className="sub-heading">Speed is {speed}mph</h4>
        <p className="description">Min limit is 0mph,Max limit is 200mph</p>
        <div>
          <button
            type="button"
            onClick={this.onAccelerate}
            className="speed-button"
          >
            Accelerate
          </button>
          <button type="button" onClick={this.onBreak} className="break-button">
            Apply Break
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
