import React, { useState } from 'react';
import cn from 'classnames';

import SvgIcon from 'src/modules/common/components/SvgIcon';
import { categoryMock } from 'src/mock';

import styles from './HeaderMenuMobile.module.scss';

interface IProps {
  isShowedMenu: boolean;
  onClose: () => void;
}

// TODO: remove any
const getCategoryListById = (categoryList: any[], categoryId: number | null | undefined): any[] => {
  if (categoryId === null || categoryId === undefined) {
    return categoryList;
  }

  return categoryList.reduce((acc, category) => {
    const hasChildren = category.childList && category.childList.length;
    if (category.id !== categoryId && hasChildren) {
      return categoryId
        ? [...acc, ...getCategoryListById(category.childList, categoryId)]
        : getCategoryListById(category.childList, categoryId);
    }
    return hasChildren ? [...acc, ...category.childList] : acc;
  }, []);
};

const removeFromHistory = (list: number[], target: number | null | undefined): number[] => {
  if (typeof target !== 'number') {
    return list;
  }

  const cloneList = [...list];

  const findIndex = list.indexOf(target);
  if (findIndex > -1) {
    cloneList.splice(findIndex, 1);
  }

  return cloneList;
};

const HeaderMenuMobile: React.FC<IProps> = ({ isShowedMenu, onClose }) => {
  const [currentCategory, setCurrentCategory] = useState<number | null | undefined>(null);
  const [historyMenu, setHistoryMenu] = useState<number[]>([]);

  const currentMenuList = getCategoryListById(categoryMock, currentCategory);

  const onBackClick = (): void => {
    const newHistory = removeFromHistory(historyMenu, currentCategory);
    setHistoryMenu(newHistory);
    if (currentCategory !== null) {
      setCurrentCategory(newHistory[newHistory.length - 1] || null);
    } else {
      onClose();
    }
  };

  const onCategoryChange = (menuId: number): void => {
    setCurrentCategory(menuId);
    setHistoryMenu((prevList) => {
      const list = [...prevList];
      list.push(menuId);
      return list;
    });
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
