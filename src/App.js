import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import API from './API';
import axios from 'axios';

import Home from './Components/Home';
import Card from './Components/Card';
import CardList from './Components/CardList';
import FlashCard from './Components/FlashCard';
import TestAll from './Components/TestAll';
import TestRandom from './Components/TestRandom';

import defaultCards from './data/cards';

import NewCardForm from './Components/NewCardForm';
import EditCardForm from './Components/EditCardForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      uri: ''
    };
  }

  async componentDidMount() {
    if (this.state.uri === '') {
      const response = await fetch('https://api.myjson.com/bins', {
        method: 'POST',
        body: JSON.stringify(defaultCards),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const json = await response.json();
      this.setState({ uri: json.uri });

      this.get();
    } else {
      this.get();
    }
  }

  async get() {
    const response = await fetch(this.state.uri);
    const json = await response.json();
    this.setState({ cards: json, got:true });
  }

  render() {
    return (
      <div>
        <h1>Flashcard App!</h1>

        {this.state.got &&
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cards" render={() => <CardList cards={this.state.cards} />} />
            <Route path="/cards/:index" render={({ match }) => <Card card={this.state.cards[match.params.index]} />} />
            <Route path="/testall" render={() => <TestAll cards={this.state.cards} />} />
            <Route path="/testrandom" render={() => <TestRandom cards={this.state.cards} />} />
            <Route path="/new" component={NewCardForm} />
            <Route path="/edit/:index" render={({ match }) => <EditCardForm history={this.props.history} cards={this.state.cards} match={match} uri={this.state.uri} />} />
          </Switch>
        }
      </div>
    )
  }
}

export default App;
