import React from 'react';
import { Container } from 'react-bootstrap';

export default ({ card }) => (
  <Container>
    <div>Term: {card.term}</div>
    <div>Definition: {card.definition}</div>
  </Container>
);
