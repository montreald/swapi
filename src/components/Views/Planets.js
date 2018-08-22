import React, { Component } from 'react'
import axios from 'axios'

export default class Planets extends Component {
  constructor() {
    super()
    this.state = {
      planets: []
    }
  }

  componentDidMount() {
    return axios
      .get('https://swapi.co/api/planets/')
      .then(results => {
        return results
      })
      .then(respond => {
        let planets = respond.data.results.map((p, i) => {
          return <li key={i}>{p.name}</li>
        })
        this.setState({ planets: planets })
        console.log('state', this.state.planets)
      })
  }

  render() {
    return (
      <div className="contaiber">
        <div className="container-1">
          <h1>Planets</h1>
          <ul>{this.state.planets}</ul>
        </div>
      </div>
    )
  }
}
