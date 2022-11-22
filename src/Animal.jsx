import React, { Component } from 'react';
import animals from './animals.jsx'
import Card from './Card';

class Animal extends Component {
    state = {
        animals: animals,
        search: '',
      };
      removeHandler = (nameIClicked) => {
        const updatedArray = this.state.animals.filter((thisisfilteredelement) => thisisfilteredelement.name !== nameIClicked );
        /* Upadtes the state of animals */
        this.setState({animals: updatedArray});
      };
      likeHandler = (name) => { 
        
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
            if (animal.name === name) {
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
            addLikes={() => this.likeHandler(animal.name)}
            removeLikes={() => this.removeLikeHandler(animal.name)}
            />
            )
          });
        return (
            <div>
                <h1>{this.state.animals.length} Animals</h1>
                <div className="input">
                <input type="search" id="searchAnimals" onChange={this.searchHandler}/>
                <label htmlFor="searchAnimals">Search</label>
                </div>
                <div className="cards">
                {animalsList}
                </div>
            </div>
        );
    }
}

export default Animal;