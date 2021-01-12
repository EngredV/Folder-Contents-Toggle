import React, { Component } from "react";
import FolderContentsToggle from "./FolderContentsToggle";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="Container">
      <FolderContentsToggle name="Home"/>
    </div>
  );
  }
}

export default App;
