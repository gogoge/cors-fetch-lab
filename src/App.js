import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    result: {},
  };
  fetch = async () => {
    const url = "http://localhost:1234/test";
    const options = {
      method: "POST",
      mode: "cors",
      credentials: "include",
    };
    const response = await fetch(url, options);
    const json = await response.json();

    this.setState({ result: json });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>{JSON.stringify(this.state.result)}</div>
          <button onClick={this.fetch}>Fetch()</button>
        </header>
      </div>
    );
  }
}

export default App;
