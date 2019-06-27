import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';

export default ({ cards }) => (
  <Container>
    <h3 id="cardListTitle">Here are your cards.</h3>
    <ul>
      {cards.map((card, index) =>
        <li key={card.id}>
          <Row>
            <Col><NavLink to={`/cards/${index}`} className="term">{card.term}</NavLink></Col>
            <Col><NavLink to={`/edit/${index}`} className="term"><Button>Edit</Button></NavLink></Col>
            <Col><NavLink to={`/delete/${index}`} className="term"><Button>Delete</Button></NavLink></Col>
          </Row>
        </li>
      )}
    </ul>
    <Row>
      <Link to="/" id="goHomeButton"><Button>Go back home</Button></Link>
      <Link to="/new"><Button>Add a new card</Button></Link>
    </Row>
  </Container>
);
