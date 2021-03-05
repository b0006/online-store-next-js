import React from 'react';
import cn from 'classnames';

import styles from './MenuDesktop.module.scss';

const MenuDesktop: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.list}>
        <button type="button" className={cn(styles.list__item, styles.list__item_active)}>
          Woman
        </button>
        <button type="button" className={styles.list__item}>
          Man
        </button>
        <button type="button" className={styles.list__item}>
          Kids
        </button>
      </nav>
    </div>
  );
};

export default MenuDesktop;
