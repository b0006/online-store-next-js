import React, { useState } from 'react';

import Logo from '../Logo';
import SvgIcon from '../../../../common/components/SvgIcon';

import Menu from './HeaderMenuMobile';

import styles from './HeaderMobile.module.scss';

const HeaderMobile: React.FC = () => {
  const [isShowedMenu, setIsShowedMenu] = useState(false);

  const onOpenMenu = (): void => {
    setIsShowedMenu(true);
  };

  const onCloseMenu = (): void => {
    setIsShowedMenu(false);
  };

  return (
    <div className={styles['header-mobile']}>
      <button onClick={onOpenMenu} type="button" className={styles['header-mobile__button']}>
        <SvgIcon className={styles['header-mobile__icon']} kind="burger" />
      </button>
      <div className={styles['header-mobile__logo']}>
        <Logo />
      </div>
      <Menu isShowedMenu={isShowedMenu} onClose={onCloseMenu} />
    </div>
  );
};

export default HeaderMobile;
