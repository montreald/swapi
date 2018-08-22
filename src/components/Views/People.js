import React, { Component } from 'react'
import axios from 'axios'

export default class People extends Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    return axios
      .get('https://swapi.co/api/people/')
      .then(results => {
        return results
      })
      .then(respond => {
        let people = respond.data.results.map((p, i) => {
          return <li key={i}>{p.name}</li>
        })
        this.setState({ people: people })
        console.log('state', this.state.people)
      })
  }

  render() {
    return (
      <div className="contaiber">
        <div className="container-1">
          <h1>People</h1>
          <ul>{this.state.people}</ul>
        </div>
      </div>
    )
  }
}
