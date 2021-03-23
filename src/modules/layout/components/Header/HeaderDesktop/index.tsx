import React from 'react';

import SvgIcon from '../../../../common/components/SvgIcon';
import Logo from '../Logo';
import Menu from './HeaderMenuDesktop';

import styles from './HeaderDesktop.module.scss';

const HeaderDesktop: React.FC = () => {
  return (
    <div className={styles.inner}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.menu}>
          <Menu />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.icons}>
          <SvgIcon className={styles.icon} kind="person" />
          <SvgIcon className={styles.icon} kind="favorite" />
          <SvgIcon className={styles.icon} kind="cart" />
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
