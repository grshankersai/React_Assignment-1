import React from 'react';
import ReactDOM from 'react-dom';

interface Props{
    id:number,
    name:string,
    phno:number
}


function Card(props:Props){
    return(
        <div>
            <h1>{props.name}</h1>
            <h2>{props.id}</h2>
            <h3>{props.phno}</h3>

        </div>
    )
}

export default Card;