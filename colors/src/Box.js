import React, { Component } from 'react';
import { choice } from './helpers';
import './Box.css';

class Box extends Component {
  static defaultProps = {
    allColors: ["yellow", "purple", "red", "purple", "green", "blue", "magenta", "tomato", "orange", "black", "lightgreen", "lightblue", "crimson"]
  };
  constructor(props) {
    super(props);
    this.state = { color: choice(this.props.allColors) };
    this.handleClick = this.handleClick.bind(this);
  }
  randomColor() {
    let newColor;
    do {
      newColor = choice(this.props.allColors);
    } while (newColor === this.state.color);
    this.setState({ color: newColor });
  }
  handleClick() {
    this.randomColor();
  }
  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}
export default Box;
