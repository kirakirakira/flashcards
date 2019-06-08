import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import API from './API';

import Home from './Components/Home';
import Cards from './Components/Cards';
import Card from './Components/Card';

import { DefaultCards } from './data/cards';

import NewCardForm from './Components/NewCardForm';
import EditCardForm from './Components/EditCardForm';

import AddTermForm from './Components/AddTermForm';
import EditTermForm from './Components/EditTermForm';
import TermList from './Components/TermList';

class App extends Component {

  constructor() {
    super();
    this.state = {
      terms: [],
      pendingTerm: '',
      pendingIndex: null,
      isEditing: false
    };
  }

  componentDidMount() {

  }

  addTerm = (term, index) => {
    term = this.state.pendingTerm;
    index = this.state.pendingIndex;
    const { terms } = this.state;

    if (this.state.isEditing) {
      terms.splice(index, 1, term);
    } else {
      terms.splice(index, 0, term);
    }

    API.add(terms);
  }

  deleteTerm (index) {
    const { terms } = this.state;
    terms.splice(index, 1);

    API.delete(terms);
  }

  editTerm (index) {
    console.log(index);
    this.setState({
      terms: this.state.terms,
      pendingTerm: this.state.terms[index],
      pendingIndex: index,
      isEditing: true
    })
  }

  updateTerm(value, index) {
    const newTerms = this.state.terms.slice();
    newTerms[index] = value;

    console.log(index, value);
    console.log(newTerms);
    console.log(this.state.terms);

    this.setState({
      isEditing: false,
      terms: newTerms
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Flashcard App!</h1>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cards" render={ ()=> <Cards data= { DefaultCards } />} />
            <Route path="/cards/:id/:card" component={Card} />
            <Route path="/new" component={NewCardForm} />
            <Route path="/edit/:id/:card" component={EditCardForm} />
          </Switch>

          {/* <TermList
            data={this.state.terms}
            editTerm={this.editTerm.bind(this)}
            deleteTerm={this.deleteTerm.bind(this)}
          />
          {this.state.isEditing ?
            <EditTermForm
              pendingIndex={this.state.pendingIndex}
              pendingTerm={this.state.pendingTerm}
              updateTerm={this.updateTerm.bind(this)}
            />
          :
            <AddTermForm
              addTerm={this.addTerm.bind(this)}
            />
          } */}
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
