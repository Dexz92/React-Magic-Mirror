import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    }
  }

  componentDidMount() {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({
          message: responseJson.message
        })
      })
  }
  
  render() {
    //onsole.log(this.state.message);
    return(
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          API Message: <b> {this.state.message}</b>
        </p>
      </div>
    );
  }
}

export default App;
