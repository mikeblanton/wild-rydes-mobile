import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react'
import { API } from 'aws-amplify'

import logo from './logo.svg';
import './App.css';

let apiName = 'PetAPI';
let path = '/pets';

class App extends Component {
  state = {
    pets: []
  }

  async componentDidMount() {
    const data = await API.get(apiName, path)
    console.log('data: ', data)
    this.setState({
      pets: data.data
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {
          this.state.pets.map((pet, index) => (
            <h2 key={index}>{pet}</h2>
          ))
        }
      </div>
    );
  }
}

export default withAuthenticator(App)
