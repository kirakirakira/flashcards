import React, { Component } from 'react';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.cards,
      randomIndex: 0,
      showDefinition: false,
      currentIndex: 0
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

export default Test;
