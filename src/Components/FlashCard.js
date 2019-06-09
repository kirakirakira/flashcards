import React from 'react';
import { NavLink, Redirect, Route } from 'react-router-dom';

import FlashCardFront from './FlashCardFront';
import FlashCardBack from './FlashCardBack';

const FlashCard = ({match}) => {
  console.log("I rendered FlashCard");
  return (
    <div>
      <div>
        <h3>You rendered a flashcard</h3>
        <ul className="flashcard-nav">
          <li><NavLink to={`${match.url}/front`}>Front</NavLink></li>
          <li><NavLink to={`${match.url}/back`}>Back</NavLink></li>
        </ul>
      </div>

      <Route path={`${match.path}/front`}
        render={ () => <FlashCardFront /> } />
      <Route path={`${match.path}/back`}
        render={ () => <FlashCardBack /> } />
    </div>
  )
}

export default FlashCard;
