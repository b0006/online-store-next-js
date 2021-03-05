import React from 'react';

import Icon from '../../../../common/components/Icon';

import styles from './MenuMobile.module.scss';

const MenuMobile: React.FC = () => {
  return (
    <div className={styles.menu}>
      <button className={styles.menu__button} type="button">
        <Icon className={styles.menu__icon} type="home" />
        <span>Home</span>
      </button>
      <button className={styles.menu__button} type="button">
        <Icon className={styles.menu__icon} type="menu" />
        <span>Menu</span>
      </button>
      <button className={styles.menu__button} type="button">
        <Icon className={styles.menu__icon} type="favorite" />
        <span>Wishlist</span>
      </button>
      <button className={styles.menu__button} type="button">
        <Icon className={styles.menu__icon} type="person" />
        <span>Account</span>
      </button>
    </div>
  );
};

export default MenuMobile;
