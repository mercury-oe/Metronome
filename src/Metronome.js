// @flow
import React, { Component } from 'react';
import { Bar, Bpm, PlayButton, VolumeBar } from './components';
import './Metronome.css';

type Props = {};

class Metronome extends Component<Props> {
  render() {
    return (
      <div className="Metronome">
        <Bpm />
        <Bar />
        <PlayButton />
        <VolumeBar />
      </div>
    );
  }
}

export default Metronome;
