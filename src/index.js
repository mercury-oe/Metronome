import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Metronome from './Metronome';

const root = document.getElementById('root');

if (root !== null) {
  ReactDOM.render(<Metronome />, root);

  if (module.hot) {
    module.hot.accept('./Metronome', () => {
      const NextApp = require('./Metronome').default;
      ReactDOM.render(<NextApp />, root);
    });
  }
}
