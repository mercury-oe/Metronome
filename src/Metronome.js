// @flow
import React, { Component } from 'react';
import './Metronome.css';
import { Bar, Bpm, PlayButton } from './components';

type Props = {};

class Metronome extends Component<Props> {
  render() {
    return (
      <div className="Metronome">
        <Bpm />
        <Bar />
        <PlayButton />
      </div>
    );
  }
}

export default Metronome;
