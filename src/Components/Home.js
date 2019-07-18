// Import statements
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

// Home page
const Home = props => (
  <div>
    <div className="homeLinks">
      <Link to="/cards"><Button size="lg" block className="homeButtonLink">View flashcards</Button></Link>
      <Link to="/testrandom"><Button size="lg" block className="homeButtonLink">Test me with random cards</Button></Link>
      <Link to="/testall"><Button size="lg" block className="homeButtonLink">Test all cards in order</Button></Link>
    </div>
    <Card className="testimonial">
      <Card.Header>Testimonial</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            I don't usually use flash cards when I study, but when I do, I use this app.
          </p>
          <footer className="blockquote-footer">
            Bob Dole
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  </div>
)

export default Home;
