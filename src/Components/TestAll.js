import React, { Component } from 'react';

class TestAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.cards,
      showDefinition: false,
      currentIndex: 0
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
        currentIndex: this.state.currentIndex += 1,
        showDefinition: false
      })
    } else {
      this.setState({
        currentIndex: 0,
        showDefinition: false
      })
    }
  }

  render() {
    return (
      <div>
        Term: {this.state.cards[this.state.currentIndex].term}
        {this.state.showDefinition ?
          <div>
            <p>Definition: {this.state.cards[this.state.currentIndex].definition}</p>
          </div> :
          null
        }
        <div>
          <button onClick={this.seeDefinition}>See Definition</button>
          <button onClick={this.seeNext}>Next</button>
        </div>
      </div>
    )
  }
}

export default TestAll;
