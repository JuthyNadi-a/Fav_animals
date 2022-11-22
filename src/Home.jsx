/* import {BrowserRouter, Routes, Route} from 'react-router-dom'; */
import React from 'react';
/* import Animal from './Animal.jsx';
import Bird from './Bird.jsx'; */
import Maincard from './Maincard';
import './App.css';

const Home = () => {
    return (
        <div>
           <div className='mainCards'>
       {/* <BrowserRouter>
          <Routes>
            <Route  path='/animals' element= {<Animal/>}>Animals</Route>
            <Route path='/birds' element= {<Bird/>}>Birds</Route>
          </Routes>
        </BrowserRouter>  */}
          <Maincard name={'Animals'}></Maincard>
          <Maincard name={'Birds'}></Maincard>
        </div> 
        </div>
    );
};

export default Home;