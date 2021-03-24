import React, { useState } from 'react';
import cn from 'classnames';

import SvgIcon from 'src/modules/common/components/SvgIcon';
import { categoryMock } from 'src/mock';

import styles from './HeaderMenuMobile.module.scss';
import useCategories from '../useCategories';

interface IProps {
  isShowedMenu: boolean;
  onClose: () => void;
}

const HeaderMenuMobile: React.FC<IProps> = ({ isShowedMenu, onClose }) => {
  const { currentTitle, currentMenuList, onBackHistory, onCategoryChange } = useCategories(categoryMock);

  const onBackClick = (): void => {
    onBackHistory(onClose);
  };

  return (
    <div
      className={cn(styles['menu-mobile'], {
        [styles['menu-mobile_show']]: isShowedMenu,
      })}
    >
      <div className={styles['menu-mobile__header']}>
        <button type="button" onClick={onBackClick}>
          <SvgIcon style={{ width: '20px' }} kind="chevron" />
        </button>
        <div>{currentTitle}</div>
      </div>
      <ul>
        {currentMenuList.map((menu) => {
          const hasChildren = menu.childList && menu.childList.length;

          if (hasChildren) {
            return (
              <li key={menu.id}>
                <span>{menu.title}</span>
                <button key={menu.id} onClick={() => onCategoryChange(menu.id)}>
                  <SvgIcon style={{ width: '20px' }} kind="chevron" />
                </button>
              </li>
            );
          }

          return (
            <li key={menu.id}>
              <span>{menu.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HeaderMenuMobile;
