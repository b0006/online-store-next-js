import React from 'react';
import cn from 'classnames';

import Icon from '../../../../common/components/Icon';

import styles from './MenuMobile.module.scss';

const MenuMobile: React.FC = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__items}>
        <button className={styles.menu__button} type="button">
          <Icon className={styles.menu__icon} type="home" />
          <span>Home</span>
        </button>
        <button className={cn(styles.menu__button, styles.menu__button_active)} type="button">
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
      <button className={styles.menu__cart} type="button">
        <span className={styles['menu__cart-icon']}>
          <Icon className={styles.menu__icon} type="cart" />
        </span>
        <span>Cart</span>
      </button>
    </div>
  );
};

export default MenuMobile;
