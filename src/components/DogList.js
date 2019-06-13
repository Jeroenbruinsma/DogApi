import React, {Component} from 'react'


export default class DogsList extends Component {
    state = { dogBreeds: null }
    renderDogBreed(breed) {
        return <li key={breed}>{breed}</li>
      }
    
    render() {
        console.log("props", this.props)
    return (
        //const {dogBreeds} = this.props
      <div className="dogs-list">
        <h1>Dogs List</h1>
        {   
           
           this.props.dogBreeds !== null  && this.props.dogBreeds.map(breed => <li key={breed} >{breed}</li>)
        }

        { this.props.dogBreeds === null && 'Loading...' }
      </div>
    )
  }
}