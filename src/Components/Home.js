import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => (
  <div>
    <h1></h1>
    <h2>I don't usually use flash cards when I study</h2>
    <ul>
      <li><Link to="/cards">View flashcards</Link></li>
      <li><Link to="/testrandom">Test me with random cards</Link></li>
      <li><Link to="/testall">Test all cards in order</Link></li>
    </ul>
    <h2>but when I do, I use this app.</h2>
  </div>
)

export default Home;
