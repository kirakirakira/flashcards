import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

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
        <h1>Would you like to delete this term?</h1>
        <Form onSubmit={ (event) => {
          event.preventDefault();
          this.deleteTerm(this.state.termInput, this.state.definitionInput, this.state.pendingIndex);
        }}>
          <Form.Group controlId="formDelete">
            <div>
              <Form.Label>Term: {this.state.termInput}</Form.Label>
            </div>
            <div>
              <Form.Label>Definition: {this.state.definitionInput}</Form.Label>
            </div>
            <Button variant="primary" type="submit">
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </Form.Group>
        </Form>
        <Form onSubmit={ (event) => {
          event.preventDefault();
          this.cancel();
        }}>
          <Button variant="primary" type="submit">
            Cancel
          </Button>
        </Form>
      </div>
    )
  }
}

export default DeleteCardForm;
