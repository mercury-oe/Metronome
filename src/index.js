// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Metronome from './Metronome';

const root = document.getElementById('root');

if (root !== null) {
  ReactDOM.render(<Metronome />, root);
}
