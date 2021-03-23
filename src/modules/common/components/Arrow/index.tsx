import React from 'react';
import cn from 'classnames';

import SvgIcon from '../SvgIcon';

import styles from './Arrow.module.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'left' | 'right';
  theme?: 'default' | 'transparent' | 'long' | 'rounded';
}

const Arrow: React.FC<IProps> = ({ theme = 'default', direction, ...rest }) => {
  return (
    <button className={cn(styles.arrow, styles[`arrow_${theme}`])} {...rest}>
      <SvgIcon className={cn(styles['arrow-icon'], styles[`arrow-icon_${direction}`])} kind="arrow-left" />
    </button>
  );
};

export default Arrow;
