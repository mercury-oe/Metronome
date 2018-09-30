// @flow
import React, { Component } from 'react';
import './App.css';
import { Bpm } from './components';

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <Bpm />
      </div>
    );
  }
}

export default App;
