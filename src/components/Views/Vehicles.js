import React, { Component } from 'react'
import axios from 'axios'

export default class Vehicles extends Component {
  constructor() {
    super()
    this.state = {
      vehicles: []
    }
  }

  componentDidMount() {
    return axios
      .get('https://swapi.co/api/vehicles/')
      .then(results => {
        return results
      })
      .then(respond => {
        let vehicles = respond.data.results.map((p, i) => {
          return <li key={i}>{p.name}</li>
        })
        this.setState({ vehicles: vehicles })
        console.log('state', this.state.vehicles)
      })
  }

  render() {
    return (
      <div className="contaiber">
        <div className="container-1">
          <h1>Vehicles</h1>
          <ul>{this.state.vehicles}</ul>
        </div>
      </div>
    )
  }
}
