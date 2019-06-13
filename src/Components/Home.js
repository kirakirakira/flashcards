import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => (
  <div>
    <h1>You have rendered the home page.</h1>
    <ul>
      <li><Link to="/cards">View flashcards</Link></li>
      <li><Link to="/testrandom">Test me with random cards</Link></li>
      <li><Link to="/testall">Test all cards in order</Link></li>
    </ul>
  </div>
)

export default Home;
