// @flow
import React, { PureComponent } from 'react';
import classNames from 'classnames';

type Props = {
  className?: string,
};

export default class StopSvgIcon extends PureComponent<Props> {
  render() {
    const { className } = this.props;
    return (
      <svg className={classNames('SvgIcon SvgIcon__stop', className)} viewBox="0 0 40 40">
        <g fill="none">
          <path fill="#424A60" d="M40 40H0V0h40v40zM6 34h28V6H6v28z" />
          <rect width="28" height="28" x="6" y="6" fill="#D75A4A" />
        </g>
      </svg>
    );
  }
}
