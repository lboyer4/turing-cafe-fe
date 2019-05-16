import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer.js';
import Form from './Form.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []

    }
  }

  componentDidMount = () => {
    const url = 'http://localhost:3001/api/v1/reservations' ;
    const reservations = fetch(url)
    .then(response => response.json())
    .then(results => this.setReservations(results))
    .catch(error => console.log('error fetching reservations'))
  }

 setReservations = (reservations) => {
   this.setState({reservations})
    
  }






  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <CardContainer reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
