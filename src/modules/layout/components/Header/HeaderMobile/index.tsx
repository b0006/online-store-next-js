import React, { useState } from 'react';

import Logo from '../Logo';
import SvgIcon from '../../../../common/components/SvgIcon';

import Menu from './HeaderMenuMobile';

import styles from './HeaderMobile.module.scss';

const HeaderMobile: React.FC = () => {
  const [isShowedMenu, setIsShowedMenu] = useState(false);

  const onMenuClick = (): void => {
    setIsShowedMenu(!isShowedMenu);
  };

  const onClose = (): void => {
    setIsShowedMenu(false);
  };

  return (
    <div className={styles['header-mobile']}>
      <button onClick={onMenuClick} type="button" className={styles['header-mobile__button']}>
        <SvgIcon className={styles['header-mobile__icon']} kind="burger" />
      </button>
      <div className={styles['header-mobile__logo']}>
        <Logo />
      </div>
      <Menu isShowedMenu={isShowedMenu} onClose={onClose} />
    </div>
  );
};

export default HeaderMobile;
