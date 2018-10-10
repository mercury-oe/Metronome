// @flow
import React, { Component } from 'react';
import { PlaySvgIcon, StopSvgIcon } from 'components/SvgIcons';
import './PlayButton.css';

type Props = {};

type State = {
  play: boolean,
};

export default class PlayButton extends Component<Props, State> {
  constructor() {
    super();

    this.state = {
      play: false,
    };
  }

  render() {
    return (
      <button className={'PlayButton'} onClick={this.onTogglePlay}>
        {this.state.play ? (
          <StopSvgIcon className={'PlayButton__icon'} />
        ) : (
          <PlaySvgIcon className={'PlayButton__icon'} />
        )}
      </button>
    );
  }

  onTogglePlay = () => {
    this.setState({ play: !this.state.play });
  };
}
