import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ cards }) => (
  <div>
    <h1>You have rendered the cards page.</h1>
    <ul>
      {cards.map((card, index) =>
        <li key={card.id}>
          <NavLink to={`/cards/${index}`}>{card.term}</NavLink>
        </li>
      )}
    </ul>
  </div>
);
