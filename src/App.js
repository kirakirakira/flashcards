import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import Home from './Components/Home';
import Card from './Components/Card';
import CardList from './Components/CardList';
import TestAll from './Components/TestAll';
import TestRandom from './Components/TestRandom';

import defaultCards from './data/cards';

import NewCardForm from './Components/NewCardForm';
import EditCardForm from './Components/EditCardForm';
import DeleteCardForm from './Components/DeleteCardForm';

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }

  constructor(props) {
    super(props);

    const { cookies } = props;

    this.state = {
      cards: [],
      uri: cookies.get('uri') || '',
      lastId: 102
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

      const { cookies } = this.props;
      cookies.set('uri', json.uri, { path: '/' })
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
        <h1>Flash cards - Let's study!</h1>

        {this.state.got &&
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cards" render={() => <CardList cards={this.state.cards} />} />
            <Route path="/cards/:index" render={({ match }) => <Card card={this.state.cards[match.params.index]} />} />
            <Route path="/testall" render={() => <TestAll cards={this.state.cards} />} />
            <Route path="/testrandom" render={() => <TestRandom cards={this.state.cards} />} />
            <Route path="/new" render={() => <NewCardForm cards={this.state.cards} lastId={this.state.lastId} history={this.props.history} uri={this.state.uri} />} />
            <Route path="/edit/:index" render={({ match }) => <EditCardForm history={this.props.history} cards={this.state.cards} match={match} uri={this.state.uri} />} />
            <Route path="/delete/:index" render={({ match }) => <DeleteCardForm history={this.props.history} cards={this.state.cards} match={match} uri={this.state.uri} />} />
          </Switch>
        }
      </div>
    )
  }
}

export default withCookies(App);
