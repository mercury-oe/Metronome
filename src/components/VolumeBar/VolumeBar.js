// @flow
import React, { Component, createRef } from 'react';
import './VolumeBar.css';

declare type InputType = 'full' | 'half' | 'empty';

type Props = {};

type State = {
  volume: string,
  left: number | string,
  type: InputType,
};

export default class VolumeBar extends Component<Props, State> {
  state = {
    volume: '100',
    left: 0,
    type: 'full',
  };

  input: { current: null | HTMLInputElement } = createRef();

  render() {
    return (
      <div className={'VolumeBar'}>
        <input
          className={`VolumeBar__range VolumeBar__range--${this.state.type}`}
          type="range"
          ref={this.input}
          value={this.state.volume}
          onChange={this.onChange}
        />
      </div>
    );
  }

  onChange = ({ target }: { target: HTMLInputElement }) => {
    const value: string = target.value;

    let type: InputType = 'full';
    if (Number(value) <= 50 && Number(value) > 0) {
      type = 'half';
    } else if (Number(value) === 0) {
      type = 'empty';
    }

    this.setState({
      volume: value,
      type,
    });
  };
}
