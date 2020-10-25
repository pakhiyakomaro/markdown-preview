import React, { Component } from 'react'

export class TextBox extends Component {
    render() {
        return (
            <React.Fragment>
                <textarea
                      className="form-control"
                      id="editor"
                      value={this.props.text}
                      onChange={this.props.updateSourceText}
                    />
            </React.Fragment>
        )
    }
}

export default TextBox
