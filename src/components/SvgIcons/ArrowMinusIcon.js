// @flow
import React, { PureComponent } from 'react';
import classNames from 'classnames';

type Props = {
  className?: string,
};

export default class ArrowMinusIcon extends PureComponent<Props> {
  render() {
    const { className } = this.props;

    return (
      <svg className={classNames('SvgIcon SvgIcon__arrow-minus', className)} viewBox="0 0 59 58">
        <g fill="none" fillRule="evenodd" strokeLinecap="round" transform="translate(1 1)">
          <g stroke="#E7ECED" strokeWidth="2" transform="translate(29)">
            <path d="M0 28L28 0M0 28l28 28" />
          </g>
          <path className={'SvgIcon__sign'} stroke="#D75A4A" strokeWidth="2" d="M0 28h24" />
        </g>
      </svg>
    );
  }
}
