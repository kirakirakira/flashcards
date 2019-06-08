import React from 'react';

const Card = ({match}) => {
  console.log("hi there");
  let name = match.params.card;
  let id = match.params.id;

  console.log(`id: ${id}, name: ${name}`);

  return (
    <div>
      <p>{name} and {id}</p>
    </div>
  )
}

export default Card;
