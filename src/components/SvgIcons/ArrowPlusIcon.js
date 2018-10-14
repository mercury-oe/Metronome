// @flow
import React, { PureComponent } from 'react';
import classNames from 'classnames';

type Props = {
  className: string,
};

export default class PlusIcon extends PureComponent<Props> {
  render() {
    const { className } = this.props;
    return (
      <svg className={classNames('SvgIcon SvgIcon__arrow-plus', className)} viewBox="0 0 64 58">
        <g fill="none" fillRule="evenodd" strokeLinecap="round" transform="matrix(-1 0 0 1 63 1)">
          <g stroke="#E7ECED" transform="translate(34)">
            <path strokeWidth="2" d="M0 28L28 0M0 28l28 28" />
          </g>
          <g stroke="#23A24D" transform="translate(0 16)">
            <path strokeWidth="2" d="M12 0v24M0 12h24" />
          </g>
        </g>
      </svg>
    );
  }
}
