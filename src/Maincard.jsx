import React from 'react';

const Maincard = (props) => {
    return (
        <div className='maincard' onClick={props.click}>
        <img src={`https://source.unsplash.com/500x400/?${props.name}`} alt= {props.name} />
        <h2>{props.name}</h2>
      </div>
    );
};

export default Maincard;