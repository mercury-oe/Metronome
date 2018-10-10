// @flow
import React, { Component } from 'react';
import './Bar.css';

type Props = {};

export default class Bar extends Component<Props> {
  render() {
    return (
      <div className={'Bar'}>
        <span className={'Bar__value'}>1/4</span>
      </div>
    );
  }
}
