import React, { Component } from 'react';
import birds from './birds.jsx';
import Card from './Card';
import './App.css';

class Bird extends Component {
    state = {
        birds: birds,
        search: '',
      };
      removeHandler = (nameIClicked) => {
        const updatedArray = this.state.birds.filter((thisisfilteredelement) => thisisfilteredelement.name !== nameIClicked );
        /* Upadtes the state of birds */
        this.setState({birds: updatedArray});
      };
      likeHandler = (name) => { 
        
        this.setState(state => {
          const updatedArray = state.birds.map(bird => {
            if(bird.name === name) {
              return {...bird, likes: bird.likes + 1};
            } else { return bird; }
          });
          return {
            birds: updatedArray,
          };
        });
      };
      removeLikeHandler = (name) => {
        this.setState(state => {
          const updatedArray = state.birds.map(bird => {
            if (bird.name === name) {
              return {...bird, likes: bird.likes - 1};
            } else { return bird;}
          });
          return {
            birds: updatedArray,
          };
        });
      }
      searchHandler = (e) => {
        this.setState({search: e.target.value});
      }
    render() {
        const birdFilter = this.state.birds.filter(bird => {
            return bird.name
            .toLowerCase()
            .includes(this.state.search.toLowerCase())
          });
          const birdsList = birdFilter.map((bird) => {
            return (
            <Card
            key= {bird.name} 
            name={bird.name} 
            likes={bird.likes} 
            removeCard={() => this.removeHandler(bird.name)} 
            addLikes={() => this.likeHandler(bird.name)}
            removeLikes={() => this.removeLikeHandler(bird.name)}
            />
            )
          });
        return (
            <div>
                <h1>{this.state.birds.length} Birds</h1>
                <div className="input">
                <input type="search" id="searchBirds" onChange={this.searchHandler}/>
                <label htmlFor="searchBirds">Search</label>
                </div>
                <div className="cards">
                {birdsList}
                </div>
            </div>
        );
    }
}

export default Bird;