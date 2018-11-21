import React, { Component } from "react";
import LifeCycle from "./components/lifecycle";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.launhClock();
    this.state = {
      count: 0,
      time: new Date().toLocaleString()
    };
  }
  launhClock() {
    setInterval(() => {
      let counter = this.state.count;
      this.setState({
        count: ++counter,
        time: new Date().toLocaleString()
      });
    }, 1000);
  }
  render() {
    if (this.counter > 2) return;
    return <LifeCycle time={this.state.time} />;
  }
}

export default App;
