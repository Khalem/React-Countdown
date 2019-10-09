import React, { Component } from "react";
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <div className="App-title">Countdown to 25 December, 2019</div>
        <div>
          <div className="Clock-days Inline"> 14 Days </div>
          <div className="Clock-hours Inline"> 30 Hours </div>
          <div className="Clock-minutes Inline"> 15 Minutes </div>
          <div className="Clock-seconds Inline"> 20 Seconds </div>
        </div>
        <div>
          <input placeholder="New Date"/>
          <button>Submit</button>
        </div>
      </div>
    )
  }
}

export default App;
