import React, { Component } from 'react';
import { Container, Row, Tabs, Tab } from 'react-bootstrap';
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
        <Tabs
          activeKey={this.state.key}
          id="uncontrolled-tab-example"
          onSelect={key => this.setState({ key })}
          className="cardTabs"
        >
          <Tab eventKey="term" title="Term">
            <p className="term">{this.state.cards[this.state.currentIndex].term}</p>
          </Tab>
          <Tab eventKey="definition" title="Definition">
            <p className="definition">{this.state.cards[this.state.currentIndex].definition}</p>
          </Tab>
        </Tabs>

        <div className="nextButton">
          <button onClick={this.seeNext}>Next</button>
        </div>

        <Link to="/"><button>Go back home</button></Link>
      </Container>
    )
  }
}

export default TestAll;
