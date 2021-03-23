import React, { useMemo } from 'react';
import cn from 'classnames';

import SvgIcon, { ICON_LIST } from '../SvgIcon';

import styles from './Input.module.scss';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: keyof typeof ICON_LIST;
  error?: string;
}

const Input = React.forwardRef((props: IProps, ref: React.LegacyRef<HTMLInputElement>) => {
  const { icon, error, placeholder, required, className, value, ...rest } = props;

  const hasValue = useMemo(() => !!(value && value.toString().length > 0), [value]);

  return (
    <label className={cn(className, styles.wrapper)}>
      <input
        {...rest}
        className={cn(styles.input, {
          [styles.input_error]: error,
        })}
        ref={ref}
        value={value}
        required={required}
        autoComplete="off"
      />
      <div className={cn(styles.title, { [styles.title_value]: hasValue, [styles.title_required]: required })}>
        {icon && <SvgIcon className={cn(styles.icon, { [styles.icon_value]: hasValue })} kind={icon} />}
        <span>{placeholder}</span>
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
});

Input.displayName = 'Input';

export default Input;
