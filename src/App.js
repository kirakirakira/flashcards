import React, { Component } from 'react';
import {
  BrowserRouter,
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

  componentDidMount() {
    if (this.state.cards.length > 0) {

    } else {
      axios.post('https://api.myjson.com/bins',
            {
              defaultCards
            })
            .then(response => {
              console.log(response);
              console.log(response.data.uri);
              this.setState({
                cards: defaultCards,
                uri: response.data.uri
              })
              console.log(this.state.uri);
              console.log(this.state.cards);
            })
            .catch(error => {
              console.log('Error posting data', error);
            })
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Flashcard App!</h1>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cards" render={() => <CardList cards={this.state.cards} />} />
            <Route path="/cards/:index" render={({ match }) => <Card card={this.state.cards[match.params.index]} />} />
            <Route path="/testall" render={() => <TestAll cards={this.state.cards} />} />
            <Route path="/testrandom" render={() => <TestRandom cards={this.state.cards} />} />
            <Route path="/new" component={NewCardForm} />
            <Route path="/edit/:index" component={EditCardForm} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
