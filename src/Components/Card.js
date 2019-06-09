import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import FlashCard from './FlashCard';

const Card = (props) => {
  // console.log("hi there");
  // let name = match.params.card;
  // let id = match.params.id;
  //
  // console.log(`id: ${id}, name: ${name}`);

  let index = props.index;
  let term = props.term;
  console.log("I rendered Card");

  return (
    <div>
      <li><NavLink to={`/cards/${index}/${term}`}>{term}</NavLink></li>


    </div>
  )
}

export default Card;
