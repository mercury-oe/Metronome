// @flow
import React, { PureComponent } from 'react';
import classNames from 'classnames';

type Props = {
  className?: string,
};

export default class PlusIcon extends PureComponent<Props> {
  render() {
    const { className } = this.props;
    return (
      <svg className={classNames('SvgIcon SvgIcon__arrow-plus', className)} viewBox="0 0 30 30">
        <g
          fill="none"
          fillRule="evenodd"
          stroke="#23A24D"
          strokeLinecap="round"
          strokeWidth="2"
          transform="translate(3, 3)"
        >
          <path d="M12 0v24M0 12h24" />
        </g>
      </svg>
    );
  }
}
