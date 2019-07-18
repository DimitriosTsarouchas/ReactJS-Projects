import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from './helpers';

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: "head", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { side: "tails", imgSrc: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg" }
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      curCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState(st => {
      return {
        curCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === "head" ? 1 : 0),
        nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
      }
    });
  }
  handleClick(e) {
    this.flipCoin();
  }
  render() {
    return (
      <div className="CoinContainer">
        <h1>Lets flip a coin</h1>
        {this.state.curCoin && <Coin info={this.state.curCoin} />}
        <button onClick={this.handleClick}>Flip Me!</button>
        <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails.</p>
      </div>
    );
  }
}
export default CoinContainer;
