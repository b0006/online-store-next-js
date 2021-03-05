import React, { useMemo } from 'react';
import cn from 'classnames';

import Icon from '../Icon';

import styles from './Input.module.scss';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  error?: string;
}

const Input = React.forwardRef((props: IProps, ref: React.LegacyRef<HTMLInputElement>) => {
  const { icon, error, placeholder, required, className, value, ...rest } = props;

  const hasValue = useMemo(() => !!(value && value.toString().length > 0), [value]);

  return (
    <label className={cn(className, styles.wrapper)}>
      <input {...rest} className={styles.input} ref={ref} value={value} required={required} autoComplete="off" />
      <div className={cn(styles.title, { [styles.title_value]: hasValue, [styles.title_required]: required })}>
        {icon && <Icon className={cn(styles.icon, { [styles.icon_value]: hasValue })} type={icon} />}
        <span>{placeholder}</span>
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
});

Input.displayName = 'Input';

export default Input;
