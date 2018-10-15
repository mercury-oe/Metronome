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
      <svg className={classNames('SvgIcon SvgIcon__arrow-minus', className)} viewBox="0 0 30 30">
        <path
          fill="none"
          stroke="#D75A4A"
          strokeLinecap="round"
          strokeWidth="2"
          d="M1 1h24"
          transform="translate(2, 13)"
        />
      </svg>
    );
  }
}
