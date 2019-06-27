import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';

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
      <Container>
        <h3 className="catchyPhrase">I'm going to try to trip you up.</h3>
        <div id="testRandomBlock">
          Term: {this.state.cards[this.state.randomIndex].term}
          {this.state.showDefinition ?
            <div>
              <p className="definition">Definition: {this.state.cards[this.state.randomIndex].definition}</p>
            </div> :
            null
          }
          <div className="testButtons">
            <Button onClick={this.seeDefinition} id="seeDefButton">See Definition</Button>
            <Button onClick={this.randomizeTerms}>Randomize</Button>
          </div>
        </div>
      </Container>
    )
  }
}

export default TestRandom;
