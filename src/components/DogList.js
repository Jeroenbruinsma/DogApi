import React, {Component} from 'react'
import * as request from 'superagent'


export default class DogsList extends Component {
    state = { dogBreeds: null }
    
    componentDidMount() {
        request
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => response.body.message)
      .then(resp => Object.keys(resp))
      .then(data => this.updateBreeds(data))
      .catch(console.error)
    }
    updateBreeds = (data) =>  {
        
        this.setState({
            dogBreeds: data
        })
    }  


    render() {
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>
        {   
           
           this.state.dogBreeds !== null  && this.state.dogBreeds.map(breed => <li key={breed} >{breed}</li>)
        }

        { this.state.dogBreeds === null && 'Loading...' }
      </div>
    )
  }
}