import React, { Component } from 'react';
import { Button, Container, Row, Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
