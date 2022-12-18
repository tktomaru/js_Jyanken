import React, {Component} from 'react';
import JyankenBox from './JyankenBox'
import ScoreBox from './ScoreBox'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      human: null,
      computer: null
    }
  }
  pon(human_hand) {
    const computer_hand = Math.floor(Math.random() * 3)
    this.setState({human: human_hand, computer: computer_hand})
  }
  judge() {
    if (this.state.human == null) {
      return null
    } else {
      return (this.state.computer - this.state.human + 3) % 3
    }
  }
  render() {
    return (<div className="App">
      <h1>じゃんけん ポン！</h1>
      <JyankenBox actionPon={(te) => this.pon(te)}/>
      <ScoreBox human={this.state.human} computer={this.state.computer} judgment={this.judge()}/>
    </div>);
  }
}

//export default App;
