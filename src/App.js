import React, { Component } from "react";
import FunctionalComp from "./compoments/functionalComp";

import "./App.css";
import functionalComp from "./compoments/functionalComp";

class App extends Component {
  state = {
    val: 1
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ val: 1 });
    }, 3000);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FunctionalComp val={this.state.val} />
        </header>
      </div>
    );
  }
}

export default App;
