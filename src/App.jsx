import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import React, { Component } from 'react';
import Home from './Home.jsx'
import About from './About.jsx'
import Animal from './Animal.jsx';
import Bird from './Bird.jsx';
import './App.css';


class App extends Component {
  render() {
    return (
        <BrowserRouter className="content">
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/animals'>Animals</Link>
                </li>
                <li>
                  <Link to='/birds'>Birds</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path='/' element= {<Home/>}>Home</Route>
              <Route  path='/animals' element= {<Animal/>}>Animals</Route>
              <Route path='/birds' element= {<Bird/>}>Birds</Route>
              <Route  path='/about' element= {<About/>}>About</Route>
            </Routes>
          </div>
        </BrowserRouter>
    )
  }
}

export default App;


/* 
- state in app.js
- handlers should be in same place where state is
- name, 
- data checks if it is animals or birds
*/