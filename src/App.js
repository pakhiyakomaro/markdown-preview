import React, { Component } from "react";

import "./App.css";

let marked = require("marked")

export class App extends Component {
  state = {
    text: "",
  };
  updateMarkdown = (e) => {
    this.setState({ text: e.target.value });
  };
  render() {
    const { text } = this.state;
    const markdown = marked(text, {breaks:true, gfm:true});
    return (
        <div className="container-fluid">
          <div>
            <h2 className="text-center m-4" id="title">Convert your text</h2>
            <div className="row ">
              <div className="col-6 ">
                <h2 className="text-center p-2" id="text-area-label">Enter your text:</h2>
                <textarea className="form-control" id="editor" value={text} onChange={this.updateMarkdown}/>
              </div>
              <div className="col-6" id="preview">
                <h2 className="text-center p-2" id="text-area-label">See the result:</h2>
                <div className="preview rounded">
                <div dangerouslySetInnerHTML={{__html: markdown }}/>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
