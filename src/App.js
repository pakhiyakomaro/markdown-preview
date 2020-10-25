import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ButtonGroup from "./components/ButtonGroup";
import PreviewBox from "./components/PreviewBox";

import "./App.css";

let marked = require("marked");
const axios = require("axios").default;

export class App extends Component {
  state = {
    text: "",
    results: "",
  };
  // Update Functions
  updateSourceText = (e) => {
    this.setState({ text: e.target.value }, () => {
      this.crst();
    });
  };
  crst = () => {
    axios({
      method: "post",
      url: "http://localhost:5000/send",
      headers: { "content-type": "application/json" },
      data: this.state,
    })
      .then((result) => {
        this.setState({ results: result.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true, gfm: true });
    const rsthtml = this.state.results;
    return (
      <Router>
        <div className="container-fluid">
          <ButtonGroup />
          {/* Markdown Router */}
          <Route
            path="/md2html"
            render={(props) =>
              PreviewBox({
                conversionheading: "Convert your text to Markdown",
                parsedText: markdown,
                updateSourceText: this.updateSourceText,
                text: text,
              })
            }
          />
          <Route
            path="/rst2html"
            render={(props) =>
              PreviewBox({
                conversionheading: "Convert your text to reStructred Text",
                parsedText: rsthtml,
                updateSourceText: this.updateSourceText,
                text: text,
              })
            }
          />
        </div>
      </Router>
    );
  }
}

export default App;
