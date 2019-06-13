import React, { Component } from 'react';

class TestRandom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.cards,
      randomIndex: 0,
      showDefinition: false,
    }
  }

  randomizeTerms = () => {
    let randomIndex = Math.floor(Math.random() * this.state.cards.length);
    this.setState({
      randomIndex,
      showDefinition: false
    })
  }

  seeDefinition = () => {
    this.setState({
      showDefinition: true
    })
  }

  render() {
    return (
      <div>
        Term: {this.state.cards[this.state.randomIndex].term}
        {this.state.showDefinition ?
          <div>
            <p>Definition: {this.state.cards[this.state.randomIndex].definition}</p>
          </div> :
          null
        }
        <div>
          <button onClick={this.seeDefinition}>See Definition</button>
          <button onClick={this.randomizeTerms}>Randomize</button>
        </div>
      </div>
    )
  }
}

export default TestRandom;
