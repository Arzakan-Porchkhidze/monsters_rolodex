import React from 'react';
import Card from "../card/card";
import "./cardlist.css";


const  CardLIst = ({monsters}) => {

    return(
        <div className='card-list'>
            {monsters.map( monster => <Card key={monster.id} monster={monster}/> )}
        </div>
    )
}

export default CardLIst;