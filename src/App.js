import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import TermList from './Components/TermList';

class App extends Component {

  constructor() {
    super();
    this.state = {
      terms: []
    };
  }

  componentDidMount() {
    axios.get('https://api.myjson.com/bins/125clh')
         .then(response => {
           this.setState({
              terms: response.data.terms
           })
         })
         .catch(error => {
           console.log('Error fetching and parsing data', error);
         })
  }

  render() {
    console.log(this.state.terms);
    return (
      <div>
        <h1>Flashcard App!</h1>
        <TermList data={this.state.terms} />
      </div>
    )
  }
}

export default App;
