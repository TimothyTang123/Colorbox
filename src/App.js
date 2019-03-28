import React, { Component } from 'react';
import './App.css';
import ColorBox from './colorbox.js'

class App extends Component {
  constructor(props) {
    super (props)
    this.state = {
      color: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
      count: 0
    }
  }

handleClick = () => {
  let {color, count} = this.state
  if (count < color.length - 1) {
    this.setState({count: count + 1})
  } else {
    this.setState({count: 0})
  }
}
  render() {
    let {color,count} = this.state
    return (
      <div>
      <ColorBox
      colorChange = {this.handleClick}
      nameChange = {color[count]}
      />
      </div>
    );
  }
}

export default App;
