// @flow
import React, { Component } from 'react';

import { ArrowPlusIcon, ArrowMinusIcon } from '../SvgIcons';
import './Bpm.css';

type Props = {};

type State = {
  bpm: number,
};

const MIN_BPM_VALUE = 40;
const MAX_BPM_VALUE = 280;

export default class Bpm extends Component<Props, State> {
  state = {
    bpm: 120,
  };

  render() {
    return (
      <div className={'Bpm'}>
        <button onClick={this.onMinusClick} className={'BpmButton BpmButton--minus'}>
          <ArrowMinusIcon className={'BpmButton__icon'} />
        </button>
        <span className={'Bpm__rate'}>{this.state.bpm}</span>
        <button onClick={this.onPlusClick} className={'BpmButton BpmButton--plus'}>
          <ArrowPlusIcon className={'BpmButton__icon'} />
        </button>
      </div>
    );
  }

  onMinusClick = () => {
    const { bpm } = this.state;
    if (bpm > MIN_BPM_VALUE) {
      this.setState({ bpm: bpm - 1 });
    }
  };

  onPlusClick = () => {
    const { bpm } = this.state;
    if (bpm < MAX_BPM_VALUE) {
      this.setState({ bpm: bpm + 1 });
    }
  };
}
