import React, { Component } from "react";

class FolderContentsToggle extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            showHideFiles: true,
        };
        this.toggleButton = this.ToggleButton.bind(this);
    }

    ToggleButton = (event) => {
       this.setState({ showHideFiles: !this.state.showHideFiles })
    }

    render() {
        return (
            <div className="info">
                <h1>Home</h1>
                    <div className="files">
                        {this.state.showHideFiles &&
                        <ul>
                            <li>File 1</li>
                            <li>File 2</li>
                            <li>File 3</li>
                        </ul>
                        }
                    </div>
                        
            <div className="toggle">
                    <button className="btn" onClick={this.toggleButton}>Toggle</button>
            </div>
            </div>
        )
    }
}

export default FolderContentsToggle;