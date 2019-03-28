import React, { Component } from 'react'
import './Square.css'

class ColorBox extends Component {
    render() {
      return (
        <div className = {this.props.nameChange}
        onClick = {this.props.colorChange}>
        <h1>{this.props.nameChange}</h1>
        </div>
    )
  }
}
export default ColorBox
