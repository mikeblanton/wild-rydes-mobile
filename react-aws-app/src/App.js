import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react'
import { API, graphqlOperation } from 'aws-amplify'

import logo from './logo.svg';
import './App.css';

const ListPets = `
  query {
    listPets {
      items {
        id
        name
      }
    }
  }
`

class App extends Component {
  state = {
    pets: []
  }

  async componentDidMount() {
    const pets = await API.graphql(graphqlOperation(ListPets))
    console.log('pets: ', pets) // optional, if you would like to view the shape of the data
    this.setState({ pets: pets.data.listPets.items })
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
            <h2 key={index}>{pet.name}</h2>
          ))
        }
      </div>
    );
  }
}

export default withAuthenticator(App)
