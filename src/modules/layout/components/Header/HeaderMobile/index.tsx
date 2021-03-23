import React from 'react';

import Logo from '../Logo';
import SvgIcon from '../../../../common/components/SvgIcon';

import styles from './HeaderMobile.module.scss';

const HeaderMobile: React.FC = () => {
  return (
    <div className={styles['header-mobile']}>
      <div className={styles['header-mobile__menu']}>
        <SvgIcon className={styles['header-mobile__icon']} kind="burger" />
      </div>
      <div className={styles['header-mobile__logo']}>
        <Logo />
      </div>
    </div>
  );
};

export default HeaderMobile;
