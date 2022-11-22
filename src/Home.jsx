import {Link} from 'react-router-dom';
import React from 'react';
/* import Animal from './Animal.jsx';
import Bird from './Bird.jsx'; */
import Maincard from './Maincard';
import './App.css';

const Home = () => {
    return (
        <div className='mainCards'>
            <Link to="/animals">
                <Maincard name={'Animals'}></Maincard>
            </Link>
            <Link to="/birds">
                <Maincard name={'Birds'}></Maincard>
            </Link>  
        </div> 
        
    );
};

export default Home;