import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
    this.getCars = this.getCars.bind(this)
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
      .then(res => {
        this.setState({
          cars: res.data
        })
      })
  }

  render() {
    let myCars = this.state.cars.map((car, index) => {
      return (
        <div index={car.id} >
          <p className="AppP">{car.color} {car.year} {car.make} {car.model} </p>
        </div>
      )
    })

    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {myCars}
      </div>
    );
  }
}

export default App;
