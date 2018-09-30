// @flow
import React, { Component } from 'react';

import { ArrowPlusIcon, ArrowMinusIcon } from '../SvgIcons';
import './Bpm.css';

type Props = {};

export default class Bpm extends Component<Props> {
  render() {
    return (
      <div className={'Bpm'}>
        <ArrowMinusIcon className={'Bpm__arrow Bpm__arrow--minus'} />
        <span className={'Bpm__rate'}>120</span>
        <ArrowPlusIcon className={'Bpm__arrow Bpm__arrow--plus'} />
      </div>
    );
  }
}
