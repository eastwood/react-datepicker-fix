import React, { Component } from 'react';
import moment from 'moment';
import logo from './logo.svg';
import DatePicker from 'react-datepicker';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';

class App extends Component {
  componentWillMount() {
    this.setState({selected: moment().utcOffset(10)});
  }

  handleChange(date) {
    this.setState({selected: date})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-intro">
          <DatePicker
            utcOffset={10}
            selected={this.state.selected}
            minDate={moment().utcOffset(10)}
            maxDate={moment().add(1, 'week')}
            onChange={this.handleChange.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
