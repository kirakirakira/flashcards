import React from 'react';

const Cards = props => {
  console.log(props.data);
  let cards = props.data.map((card) => {
    return <li key={card.id}>{card.term}</li>
  });

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
