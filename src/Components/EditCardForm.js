import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

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
        <Form onSubmit={ (event) => {
          event.preventDefault();
          this.updateTerm(this.state.termInput, this.state.definitionInput, this.state.pendingIndex);
        }}>
          <Form.Group controlId="formEditTerm">
            <Form.Label>Term: </Form.Label>
            <Form.Control
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
          </Form.Group>

          <Form.Group controlId="formEditDefinition">
            <Form.Label>Definition: </Form.Label>
            <Form.Control
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
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default EditCardForm;
