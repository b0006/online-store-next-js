import React from 'react';
import cn from 'classnames';

import Container from 'src/modules/layout/components/Container';
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
      <Container className={styles['menu-mobile__header']}>
        <button className={styles['menu-mobile__back']} type="button" onClick={onBackClick}>
          <SvgIcon className={styles['menu-mobile__icon']} kind="chevron" />
        </button>
        <div>{currentTitle}</div>
      </Container>
      <ul className={styles['menu-mobile__list']}>
        {currentMenuList.map((menu) => {
          const hasChildren = menu.childList && menu.childList.length;

          return (
            <li key={menu.id}>
              <Container className={styles['menu-mobile__item']}>
                <div className={styles['menu-mobile__title']}>{menu.title}</div>
                {hasChildren && (
                  <button
                    className={styles['menu-mobile__button']}
                    key={menu.id}
                    onClick={() => onCategoryChange(menu.id)}
                  >
                    <SvgIcon
                      className={cn(styles['menu-mobile__icon'], styles['menu-mobile__icon_right'])}
                      kind="chevron"
                    />
                  </button>
                )}
              </Container>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HeaderMenuMobile;
