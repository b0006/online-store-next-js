import React from 'react';
import cn from 'classnames';

import styles from './HeaderMenuMobile.module.scss';

interface IProps {
  isShowedMenu: boolean;
  onClose: () => void;
}

const HeaderMenuMobile: React.FC<IProps> = ({ isShowedMenu, onClose }) => {
  return (
    <div
      className={cn(styles['menu-mobile'], {
        [styles['menu-mobile_show']]: isShowedMenu,
      })}
    >
      <div className={styles['menu-mobile__header']}>
        <button type="button" onClick={onClose}>
          X
        </button>
      </div>
      <div>items</div>
    </div>
  );
};

export default HeaderMenuMobile;
