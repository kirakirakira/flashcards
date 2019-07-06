import React, { Component } from 'react';

class DeleteCardForm extends Component {
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

  async deleteTerm(term, definition, index) {
    console.log(this.props.uri);

    const { cards } = this.props;

    cards.splice(index, 1);

    await fetch(this.props.uri, {
      method: 'PUT',
      body: JSON.stringify(cards),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    this.props.history.push('/cards');
  }

  cancel() {
    console.log("i clicked cancel");
    this.props.history.push('/cards');
  }

  render() {
    return (
      <div>
        <h1>You have rendered the delete card form page.</h1>
        <form onSubmit={ (event) => {
          event.preventDefault();
          this.deleteTerm(this.state.termInput, this.state.definitionInput, this.state.pendingIndex);
        }}>
          <label>Term: </label>
          <p>{this.state.termInput}</p>
          <label>Definition: </label>
          <p>{this.state.definitionInput}</p>
          <input type="submit" value="Delete"/>
        </form>
        <form onSubmit={ (event) => {
          event.preventDefault();
          this.cancel();
        }}>
          <input type="submit" value="Cancel"/>
        </form>
      </div>
    )
  }
}

export default DeleteCardForm;
