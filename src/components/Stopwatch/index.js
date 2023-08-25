// Write your code here
import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {seconds: 0, isTimerStarted: false}

  resetTimer = () => {
    clearInterval(this.timerID)
    this.setState({seconds: 0, isTimerStarted: false})
  }

  changeTimerStatus = () => {
    const {isTimerStarted} = this.state

    if (isTimerStarted) {
      clearInterval(this.timerID)
    } else {
      this.timerID = setInterval(this.tick, 1000)
    }
    this.setState(prevState => ({isTimerStarted: !prevState.isTimerStarted}))
  }

  tick = () => {
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
  }

  render() {
    const {seconds, isTimerStarted} = this.state
    const sec = Math.floor(seconds % 60)
    const min = Math.floor(seconds / 60)
    const stringSec = sec > 9 ? sec : `0${sec}`
    const stringMin = min > 9 ? min : `0${min}`

    return (
      <div className="bg-container">
        <h1 className="main-head">Stopwatch</h1>
        <div className="card-container">
          <div className="top-head">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-img"
            />
            <p className="para">Timer</p>
          </div>
          <h1 className="card-head">
            {stringMin}:{stringSec}
          </h1>
          <div className="button-card">
            <button
              type="button"
              onClick={this.changeTimerStatus}
              className="start-btn"
              disabled={isTimerStarted}
            >
              Start
            </button>
            <button
              type="button"
              onClick={this.changeTimerStatus}
              className="stop-btn"
            >
              Stop
            </button>
            <button
              type="button"
              onClick={this.resetTimer}
              className="reset-btn"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
