import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Hello World</h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
          <a className="button">Button</a>
        </div>
      </section>
    );
  }
}

export default App;
