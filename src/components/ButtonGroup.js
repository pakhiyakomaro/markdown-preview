import React, { Component } from 'react'

export class ButtonGroup extends Component {
    render() {
        return (
            <React.Fragment>
                <br/>
                <div class="btn-group float-right" role="group" aria-label="Basic example">
                    <a class="btn btn-secondary" href="/md2html">Markdown Previewer</a>
                    <a class="btn btn-secondary disabled" href="#"></a>
                    <a class="btn btn-secondary" href="/rst2html">RST Previewer</a>
                </div>
                <br/>
            </React.Fragment>
        )
    }
}

export default ButtonGroup
