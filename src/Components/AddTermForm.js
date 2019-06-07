import React, { Component } from 'react';

class AddTermForm extends Component {
  constructor() {
    super();
    this.state = {
      termInput: ''
    }
  }

  componentDidMount () {
    this.setState({
      termInput: this.props.pendingTerm
    })
  }

  render() {
    return (
      <form onSubmit={ (event) => {
        event.preventDefault();
        this.props.addTerm(this.state.termInput);
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

export default AddTermForm;
