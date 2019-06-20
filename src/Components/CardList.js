import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default ({ cards }) => (
  <Container>
    <h2>Here are your cards.</h2>
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
    <Link to="/"><button>Go back home</button></Link>
  </Container>
);
