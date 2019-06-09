import React from 'react';
import Card from './Card';

const Cards = props => {
  console.log(props.data);
  let cards = props.data.map((card) => {
    return <Card key={card.id} index={card.id} term={card.term} definition={card.definition}/>
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
