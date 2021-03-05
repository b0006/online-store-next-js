import React from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'secondary' | 'light' | 'outlined' | 'text';
}

const Button: React.FC<IProps> = ({ className, disabled, theme = 'primary', children, ...rest }) => {
  return (
    <button
      className={cn(className, styles.button, styles[`button_${theme}`], {
        [styles.button_disable]: disabled,
      })}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
