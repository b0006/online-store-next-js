import React from 'react';
import cn from 'classnames';

import Icon from '../Icon';

import styles from './CircleClose.module.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'big' | 'small';
  'data-count'?: string;
}

const CircleClose: React.FC<IProps> = ({ size = 'big', disabled, className, ...rest }) => {
  return (
    <button
      className={cn(className, styles.close, styles[`close_${size}`], {
        [styles.close_disable]: disabled,
        [styles.close_badge]: rest['data-count'],
      })}
      disabled={disabled}
      {...rest}
    >
      <Icon className={styles.close__icon} type="close" />
    </button>
  );
};

export default CircleClose;
