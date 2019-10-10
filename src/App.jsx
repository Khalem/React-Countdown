import React, { Component } from "react";
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2019',
      newDeadline: ''
    };

  }

  changeDeadline() {
    if (this.state.newDeadline == '') {
      return false;
    } else {
      this.setState({
        deadline: this.state.newDeadline
      });
    }
  }

  render() {
    return(
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline}/>
        <Form inline className="Deadline-input">
          <FormControl placeholder="New Date" onChange={e => this.setState({newDeadline: e.target.value})} type="date" required/>
          <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default App;
