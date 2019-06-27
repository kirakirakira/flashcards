import React, { Component } from 'react';

class EditCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      termInput: '',
      definitionInput: '',
      pendingIndex: 0
    }
  }

  componentDidMount() {
    let index = this.props.match.params.index;

    this.setState({
      termInput: this.props.cards[index].term,
      definitionInput: this.props.cards[index].definition,
      pendingIndex: index
    })
  }

  async updateTerm(term, definition, index) {
    console.log(this.props.uri);

    const { cards } = this.props;

    cards[index] = {
      id: this.props.cards[index].id,
      term,
      definition
    }

    await fetch(this.props.uri, {
      method: 'PUT',
      body: JSON.stringify(cards),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    this.props.history.push('/cards');
  }

  render() {
    return (
      <div>
        <h2>You are editing {this.state.termInput}.</h2>
        <form onSubmit={ (event) => {
          event.preventDefault();
          this.updateTerm(this.state.termInput, this.state.definitionInput, this.state.pendingIndex);
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
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditCardForm;
