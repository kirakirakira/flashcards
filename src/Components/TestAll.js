import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';

class TestAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.cards,
      showDefinition: false,
      currentIndex: 0,
      key: 'term'
    }
  }

  seeDefinition = () => {
    this.setState({
      showDefinition: true
    })
  }

  seeNext = () => {
    if (this.state.currentIndex < this.state.cards.length - 1) {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
        showDefinition: false,
        key: 'term'
      })
    } else {
      this.setState({
        currentIndex: 0,
        showDefinition: false,
        key: 'term'
      })
    }
  }

  render() {
    return (
      <Container>
        <h3 className="catchyPhrase">Let's review everything. <span>Card: {this.state.currentIndex+1} of {this.state.cards.length}</span></h3>

        <div id="testRandomBlock">
          Term: {this.state.cards[this.state.currentIndex].term}
          {this.state.showDefinition ?
            <div>
              <p className="definition">Definition: {this.state.cards[this.state.currentIndex].definition}</p>
            </div> :
            null
          }
          <div className="testButtons">
            <Button onClick={this.seeDefinition} id="seeDefButton">See Definition</Button>
            <Button onClick={this.seeNext}>Next</Button>
          </div>
        </div>
      </Container>
    )
  }
}

export default TestAll;
