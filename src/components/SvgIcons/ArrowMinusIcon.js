// @flow
import React, { Component } from 'react';
import classNames from 'classnames';

type Props = {
  className?: string,
};

export default class ArrowMinusIcon extends Component<Props> {
  render() {
    const { className } = this.props;

    return (
      <svg className={classNames('SvgIcon SvgIcon__arrow-minus', className)} viewBox="0 0 64 58">
        <g fill="none" fillRule="evenodd" strokeLinecap="round" transform="translate(1 1)">
          <g stroke="#E7ECED" strokeWidth="2" transform="translate(34)">
            <path d="M0 28L28 0M0 28l28 28" />
          </g>
          <path stroke="#D75A4A" strokeWidth="2" d="M0 28h24" />
        </g>
      </svg>
    );
  }
}
