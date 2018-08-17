import React, { Component } from 'react';
import axios from 'axios';
import List from './List'
import './App.css';

const dataStars = {
    films: "https://swapi.co/api/films/",
    people: "https://swapi.co/api/people/",
    planets: "https://swapi.co/api/planets/",
    species: "https://swapi.co/api/species/",
    starships: "https://swapi.co/api/starships/",
    vehicles: "https://swapi.co/api/vehicles/"
}

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            films: [],
            people: [],
            planets: [],
            species: [],
            starships: [],
            vehicles: [],
        }

        this.getPeople = this.getPeople.bind(this);
    }

    getPeople(){
        return axios.get('https://swapi.co/api/people')
            .then((respond) =>{
               this.setState( {people: respond.data.results} )
            })
    }

    componentDidMount(){
        this.getPeople()
    }

    render() {
        const {people} = this.state;
    return (
      <div className="App">
          <List people={people}/>
      </div>
    );
  }
}

export default App;
