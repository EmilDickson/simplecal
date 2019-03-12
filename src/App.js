import React, { Component } from 'react';
import Calendar from './components/Calendar';
import './App.css';
import axios from 'axios';
import * as cryptoJS from 'crypto-js';

class App extends Component {
  state = {
    calendarEvents: [{
      "database_id": 0,
      "date": "",
      "title": "",
      "description": "",
      "location": {
        "lat": "",
        "lng": ""
      },
      "attendents": [
        "",
        "",
        ""
      ]
    }],
    decryptionKey: ""
  }

  getData() {
    axios.get('https://projects.teamengine.com/calendar/events', {
      headers: {
        'x-teamengine-test': "YfKFyOBnLBvudfn"
      }
    })
      .then((response) => {
        let bytes = cryptoJS.AES.decrypt(response.data, this.state.decryptionKey);
        let decryptedData = JSON.parse(bytes.toString(cryptoJS.enc.Utf8));
        this.setState({
          calendarEvents: decryptedData.events
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({decryptionKey: e.target.decryptInputField.value});
  }

  renderDecryptBox() {
    if (this.state.decryptionKey === "") {
      return (
        <div id="decryptInputBox">
          <label>
            Input your decryption key:
              <form onSubmit={(e) => this.handleSubmit(e)}>
              <input
                id="decryptInputField"
                type="text"
                name="decryptionKey"
              />
            </form>
          </label>
        </div>
      );
    } else {
      return "";
    }
  }

  componentDidUpdate() {
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">calendar_today</span>
            <span>
              simple<b>cal</b>
            </span>
          </div>
          {this.renderDecryptBox()}
        </header>
        <main>
          <Calendar calendarEvents={this.state.calendarEvents} />
        </main>
      </div>
    );
  }
}

export default App;
