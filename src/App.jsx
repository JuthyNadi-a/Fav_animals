import React, { Component } from 'react';
import './App.css';
import animals from './animals.jsx'
import Card from './Card';

class App extends Component {
  state = {
    animals: animals,
    search: '',
  };
  removeHandler = (nameIClicked) => {
    /* 
    state of animals takes the animal i clicked and filtered by checking if the animal is not in the list and returned the updated array without the animal i clicked
    */
    const updatedArray = this.state.animals.filter((thisisfilteredelement) => thisisfilteredelement.name !== nameIClicked );
    /* Upadtes the state of animals */
    this.setState({animals: updatedArray});
  };
  addHandler = (name) => { 
    /* 
    takes the initial state of animals and maps through them to see which one was clicked.
    if the name matches the one clicked then it opens the array and then add likes.otherwise it returns the animal.
    then it updates the array.
    */
    this.setState(state => {
      const updatedArray = state.animals.map(animal => {
        if(animal.name === name) {
          return {...animal, likes: animal.likes + 1};
        } else { return animal; }
      });
      return {
        animals: updatedArray,
      };
    });
  };
  removeLikeHandler = (name) => {
    this.setState(state => {
      const updatedArray = state.animals.map(animal => {
        if (animal.name === name && animal.likes >= 1) {
          return {...animal, likes: animal.likes - 1};
        } else { return animal;}
      });
      return {
        animals: updatedArray,
      };
    });
  }
  searchHandler = (e) => {
    this.setState({search: e.target.value});
  }
  render() {
    const animalFilter = this.state.animals.filter(animal => {
      return animal.name
      .toLowerCase()
      .includes(this.state.search.toLowerCase())
    });
    const animalsList = animalFilter.map((animal) => {
      return (
      <Card
      key= {animal.name} 
      name={animal.name} 
      likes={animal.likes} 
      removeCard={() => this.removeHandler(animal.name)} 
      addLikes={() => this.addHandler(animal.name)}
      removeLikes={() => this.removeLikeHandler(animal.name)}
      />
      )
    });
    return (
      <div className="content">
        <h1>{this.state.animals.length} Animals</h1>
        <div className="input">
          <input type="search" id="searchAnimals" onChange={this.searchHandler}/>
          <label htmlFor="searchAnimals">Search</label>
        </div>
        <div className="cards">
        {animalsList}
      </div>
      </div>
    )
  }
}

export default App;
