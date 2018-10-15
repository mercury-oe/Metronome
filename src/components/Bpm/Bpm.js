// @flow
import React, { Component, createRef } from 'react';

import findParentNode from 'helpers/find-parent-node';

import { ArrowPlusIcon, ArrowMinusIcon } from '../SvgIcons';
import './Bpm.css';

type Props = {};

type State = {
  bpm: number,
};

const MIN_BPM_VALUE = 40;
const MAX_BPM_VALUE = 280;

export default class Bpm extends Component<Props, State> {
  plus: { current: null | HTMLButtonElement } = createRef();
  minus: { current: null | HTMLButtonElement } = createRef();
  changeValueInterval: IntervalID;

  static onSetClass(target: EventTarget) {
    const node = findParentNode(target, 'BUTTON');
    node.classList.add('BpmButton--active');
  }

  state = {
    bpm: 120,
  };

  componentDidMount() {
    document.addEventListener('mouseup', this.onMouseUp);
    document.addEventListener('touchend', this.onMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('touchend', this.onMouseUp);
  }

  render() {
    return (
      <div className={'Bpm'}>
        <button
          ref={this.minus}
          onClick={this.onMinusClick}
          onMouseDown={this.onMinusDown}
          onTouchStart={this.onMinusDown}
          className={'BpmButton BpmButton--minus'}
        >
          <ArrowMinusIcon className={'BpmButton__icon'} />
        </button>
        <span className={'Bpm__rate'}>{this.state.bpm}</span>
        <button
          ref={this.plus}
          onClick={this.onPlusClick}
          onMouseDown={this.onPlusDown}
          onTouchStart={this.onPlusDown}
          className={'BpmButton BpmButton--plus'}
        >
          <ArrowPlusIcon className={'BpmButton__icon'} />
        </button>
      </div>
    );
  }

  onMinusDown = ({ target }: { target: EventTarget }) => {
    Bpm.onSetClass(target);
    this.changeValueInterval = setInterval(this.onMinusClick, 200);
  };

  onPlusDown = ({ target }: { target: EventTarget }) => {
    Bpm.onSetClass(target);
    this.changeValueInterval = setInterval(this.onPlusClick, 200);
  };

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

  onMouseUp = () => {
    if (this.minus.current) {
      this.minus.current.classList.remove('BpmButton--active');
    }
    if (this.plus.current) {
      this.plus.current.classList.remove('BpmButton--active');
    }
    clearInterval(this.changeValueInterval);
  };
}
