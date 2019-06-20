import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
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
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Flash cards - Let's study!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/cards">My Cards</Nav.Link>
              <Nav.Link href="/new">Add A Card</Nav.Link>
              <Nav.Link href="/testall">Test All</Nav.Link>
              <Nav.Link href="/testrandom">Test Random</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


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
