import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default ({ cards }) => (
  <div>
    <h1>You have rendered the cards page.</h1>
    <Link to="/new"><button>Add a new card</button></Link>
    <ul>
      {cards.map((card, index) =>
        <li key={card.id}>
          <NavLink to={`/cards/${index}`}>{card.term}</NavLink>
          <NavLink to={`/edit/${index}`}><button>Edit</button></NavLink>
          <NavLink to={`/delete/${index}`}><button>Delete</button></NavLink>
        </li>
      )}
    </ul>
  </div>
);
