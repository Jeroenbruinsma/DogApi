import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from  'react-router-dom';
import DogListContainer from './components/DogListContainer';

import DogBreedImagesContainer from './components/DogBreedImagesContainer';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <Route exact path="/" component={DogListContainer} />
          <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
        </header>
      </div>
    );
  }
}


