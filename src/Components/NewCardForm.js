import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';

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
      <Container>
        <h2>You are creating a new card.</h2>

        <Form onSubmit={ (event) => {
          event.preventDefault();
          this.addTerm(this.state.termInput, this.state.definitionInput);
        }}>
          <Form.Group controlId="formTerm">
            <Form.Label>Term</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter term"
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

          <Form.Group controlId="formDefinition">
            <Form.Label>Definition</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter definition"
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

        <Card style={{ width: '18rem' }}>
          <Card.Title>Preview of your card</Card.Title>
          <Card.Text>Term: {this.state.termInput}</Card.Text>
          <Card.Text>Definition: {this.state.definitionInput}</Card.Text>
        </Card>

      </Container>
    )
  }
}

export default NewCardForm;
