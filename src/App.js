import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

let marked = require("marked");
const axios = require('axios').default;

export class App extends Component {
  state = {
    text: "",
    results: "",
  };
  updateSourceText = (e) => {
    this.setState({ text: e.target.value},()=>{this.crst()});
  };
  crst = () => {
    axios({
      method:'post',
      url:"http://localhost:5000/send",
      headers: {'content-type': 'application/json'},
      data:this.state
    })
        .then(result => {
          this.setState({results:result.data});
          // console.log(result.data)
        })
        .catch(error=> {
          console.log(error);
        })
  };
  render() {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true, gfm: true });
    const rsthtml = this.state.results;
    // const rst =
    return (
      <Router>
        <div className="container-fluid">
          {/* Markdown Router */}
          <Route
            path="/mdtohtml"
            render={(props) => (
              <React.Fragment>
                <h2 className="text-center m-4" id="title">
                  Convert your text to Markdown
                </h2>
                <div className="row ">
                  <div className="col-6 ">
                    <h2 className="text-center p-2" id="text-area-label">
                      Enter your text:
                    </h2>
                    <textarea
                      className="form-control"
                      id="editor"
                      value={text}
                      onChange={this.updateSourceText}
                    />
                  </div>
                  <div className="col-6" id="preview">
                    <h2 className="text-center p-2" id="text-area-label">
                      See the result:
                    </h2>
                    <div className="preview rounded">
                      <div dangerouslySetInnerHTML={{ __html: markdown }} />
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )}
          />
          <Route
            path="/rst2html"
            render={(props) => (
              <React.Fragment>
                <h2 className="text-center m-4" id="title">
                  Convert your text to ReStructured Text
                </h2>
                <div className="row ">
                  <div className="col-6 ">
                    <h2 className="text-center p-2" id="text-area-label">
                      Enter your text:
                    </h2>
                    <textarea
                      className="form-control"
                      id="editor"
                      value={text}
                      onChange={this.updateSourceText}
                    />
                  </div>
                  <div className="col-6" id="preview">
                    <h2 className="text-center p-2" id="text-area-label">
                      See the result:
                    </h2>
                    <div className="preview rounded">
                      <div dangerouslySetInnerHTML={{ __html: rsthtml }} />
                      <div></div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;