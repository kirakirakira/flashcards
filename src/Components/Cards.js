import React from 'react';

const Cards = props => {
  let cards = props.data.map((card) => {
    return <li key={card.id}>{card.name}</li>
  });
  console.log(cards);

  return (
    <div>
      <h1>You have rendered the cards page.</h1>
      <ul>
        {cards}
      </ul>
    </div>
  )
}

export default Cards;
