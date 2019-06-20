import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';

class NewCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      termInput: '',
      definitionInput: ''
    }
  }

  async addTerm(term, definition) {

    const { cards } = this.props;

    let card = {
      id: uuidv1(),
      term,
      definition
    }

    cards.push(card);

    console.log(cards);

    await fetch(this.props.uri, {
      method: 'PUT',
      body: JSON.stringify(cards),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.props.history.push('/cards');
  }

  render() {
    return (
      <div>
        <h2>You are creating a new card.</h2>
        <form onSubmit={ (event) => {
          event.preventDefault();
          this.addTerm(this.state.termInput, this.state.definitionInput);
        }}>
          <label>Term: </label>
          <input
            type="text"
            id="term"
            value={this.state.termInput}
            onChange={ (event) => {
              event.preventDefault();
              this.setState({
                termInput: event.target.value
              })
            }}
          />
          <label>Definition: </label>
          <input
            type="text"
            id="definition"
            value={this.state.definitionInput}
            onChange={ (event) => {
              event.preventDefault();
              this.setState({
                definitionInput: event.target.value
              })
            }}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default NewCardForm;
