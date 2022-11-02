import React from 'react';
import './card.css';
const Card = (props) =>{
    return (
        <div className='card'>
            <img src={`https://source.unsplash.com/500x400/?${props.name}`} alt= {props.name} />
            <button onClick={props.removeCard} className='remove'>x</button>
            <h1>{props.name}</h1>
            <div className='likes'>
                <p id='like'> ♥️ {props.likes}</p>
                <button onClick={props.addLikes} className='addlikes btn'><span class="material-symbols-outlined">thumb_up</span></button>
                <button onClick={props.removeLikes} className='removelikes btn'><span class="material-symbols-outlined">thumb_down</span></button>
            </div>
        </div>
    )
}
export default Card;