// Import statements
import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Simple component for viewing one card
export default ({ card }) => (
  <Container>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Your card</Card.Title>
        <Card.Text>Term: {card.term}</Card.Text>
        <Card.Text>Definition: {card.definition}</Card.Text>
      </Card.Body>
    </Card>
    <Link to="/cards"><Button id="goToCardList">Go back to list</Button></Link>
  </Container>
);
