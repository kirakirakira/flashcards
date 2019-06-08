import React, { Component } from 'react';

class EditTermForm extends Component {
  constructor(props) {
    console.log('creating edit term form');
    console.log(props.pendingTerm);
    super();
    this.state = {
      termInput: props.pendingTerm
    }
  }

  render() {
    return (
      <form onSubmit={ (event) => {
        event.preventDefault();
        this.props.updateTerm(this.state.termInput, this.props.pendingIndex);
        this.setState({termInput: ''})
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
        <input type="submit" />
      </form>
    )
  }
}

export default EditTermForm;
