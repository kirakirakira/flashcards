import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import AddTermForm from './Components/AddTermForm';
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

  addTerm = (term) => {
    const { terms } = this.state;

    terms.push(term);

    axios.put('https://api.myjson.com/bins/125clh',
          { "terms": terms })
         .then(response => {
           this.setState({
             terms: response.data.terms
           })
         })
         .catch(error => {
           console.log('Error putting and fetching data', error);
         })
  }

  render() {
    console.log(this.state.terms);
    return (
      <div>
        <h1>Flashcard App!</h1>
        <TermList data={this.state.terms} />
        <AddTermForm addTerm={this.addTerm.bind(this)} />
      </div>
    )
  }
}

export default App;
