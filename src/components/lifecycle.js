import React, { Component } from "react";
import ReactDOM from "react-dom";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log(`Constructor`);
  }
  componentWillMount() {
    console.log(`componentWillMount is triggered`);
  }
  componentDidMount() {
    console.log(`componentDidMount is triggered`);
    console.log(`DOM node: ${ReactDOM.findDOMNode(this)}`);
  }
  componentWillReceiveProps(newProps) {
    console.log(`componentWillReceiveProps is triggered`);
    console.log(`newProps: ${newProps}`);
  }
  shouldComponentUpdate() {
    console.log(`shouldComponentUpdate is triggered`);
    return true;
  }
  componentWillUpdate() {
    console.log(`componentWillUpdate is triggered`);
  }
  componentDidUpdate() {
    console.log(`componentDidUpdate is triggered`);
  }
  componentDIdUnmount() {
    console.log(`componentDidUnmount is triggered`);
  }
  render() {
    return <h1>{this.props.time}</h1>;
  }
}

export default LifeCycle;
