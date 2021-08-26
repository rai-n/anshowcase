import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LocalIssues from "./Components/Issues/GetIssue";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css"
        />
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></script>
     
        <LocalIssues></LocalIssues>
      </div>
    );
  }
}

export default App;
