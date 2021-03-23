import React from 'react';

import SvgIcon from '../../../../common/components/SvgIcon';

import styles from './CartMobile.module.scss';

const CartMobile: React.FC = () => {
  return (
    <div className={styles['cart-mobile']}>
      <button className={styles['cart-mobile__button']} type="button">
        <span className={styles['cart-mobile__span']}>
          <SvgIcon className={styles['cart-mobile__icon']} kind="cart" />
        </span>
      </button>
    </div>
  );
};

export default CartMobile;
