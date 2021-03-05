import React from 'react';
import cn from 'classnames';

import styles from './Badge.module.scss';

interface IProps {
  isNumber?: boolean;
}

const Badge: React.FC<IProps> = ({ isNumber = false, children }) => (
  <span className={cn(styles.badge, { [styles.badge_text]: !isNumber, [styles.badge_number]: isNumber })}>
    {children}
  </span>
);

export default Badge;
