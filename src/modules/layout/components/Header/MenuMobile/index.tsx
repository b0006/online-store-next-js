import React from 'react';
import cn from 'classnames';

import SvgIcon from '../../../../common/components/SvgIcon';

import styles from './MenuMobile.module.scss';

const MenuMobile: React.FC = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__items}>
        <button className={styles.menu__button} type="button">
          <SvgIcon className={styles.menu__icon} kind="home" />
          <span>Home</span>
        </button>
        <button className={cn(styles.menu__button, styles.menu__button_active)} type="button">
          <SvgIcon className={styles.menu__icon} kind="menu" />
          <span>Menu</span>
        </button>
        <button className={styles.menu__button} type="button">
          <SvgIcon className={styles.menu__icon} kind="favorite" />
          <span>Wishlist</span>
        </button>
        <button className={styles.menu__button} type="button">
          <SvgIcon className={styles.menu__icon} kind="person" />
          <span>Account</span>
        </button>
      </div>
      <button className={styles.menu__cart} type="button">
        <span className={styles['menu__cart-icon']}>
          <SvgIcon className={styles.menu__icon} kind="cart" />
        </span>
        <span>Cart</span>
      </button>
    </div>
  );
};

export default MenuMobile;
