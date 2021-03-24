import React from 'react';
import cn from 'classnames';

import { categoryMock } from '../../../../../../mock';

import styles from './HeaderMenuDesktop.module.scss';

const HeaderMenuDesktop: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.list}>
        {categoryMock.map((category, index) => (
          <button
            key={category.id}
            type="button"
            className={cn(styles.list__item, {
              [styles.list__item_active]: index === 0,
            })}
          >
            {category.title}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default HeaderMenuDesktop;
