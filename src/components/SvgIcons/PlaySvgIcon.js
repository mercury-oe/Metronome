// @flow
import React, { Component } from 'react';
import classNames from 'classnames';

type Props = {
  className?: string,
};

export default class PlaySvgIcon extends Component<Props> {
  render() {
    const { className } = this.props;
    return (
      <svg className={classNames('SvgIcon SvgIcon__play', className)} viewBox="0 0 38 52">
        <polygon
          fill="#EBBA16"
          stroke="#424A60"
          strokeWidth="6"
          points="29.071 20.713 .071 40.713 .071 21.077 .071 .713"
          transform="translate(3 5)"
        />
      </svg>
    );
  }
}
