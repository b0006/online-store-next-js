import { useState } from 'react';
import { usePrevious } from 'src/hooks/usePrevious';

// TODO: remove any
const getCategoryListById = (categoryList: any[], categoryId: number | null): { title: string; list: any[] } => {
  if (categoryId === null) {
    return {
      title: 'Menu',
      list: categoryList,
    };
  }

  return categoryList.reduce((acc, category) => {
    const hasChildren = category.childList && category.childList.length;
    if (category.id !== categoryId && hasChildren) {
      return categoryId
        ? { ...acc, ...getCategoryListById(category.childList, categoryId) }
        : getCategoryListById(category.childList, categoryId);
    }
    return hasChildren
      ? {
          ...acc,
          title: category.title,
          list: category.childList,
        }
      : acc;
  }, {});
};

const removeFromHistory = (list: number[], target: number | null): number[] => {
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

const addToHistory = (target: number) => (list: number[]): number[] => {
  const cloneList = [...list];
  cloneList.push(target);
  return cloneList;
};

// TODO: remove any
const useCategories = (categoryList: any[]) => {
  const [currentCategoryId, setCurrentCategoryId] = useState<number | null>(null);
  const [historyMenu, setHistoryMenu] = useState<number[]>([]);

  const onBackHistory = (callback?: () => void): void => {
    const newHistory = removeFromHistory(historyMenu, currentCategoryId);
    setHistoryMenu(newHistory);
    if (currentCategoryId !== null) {
      setCurrentCategoryId(newHistory[newHistory.length - 1] || null);
    } else {
      callback && callback();
    }
  };

  const onCategoryChange = (menuId: number): void => {
    setCurrentCategoryId(menuId);
    setHistoryMenu(addToHistory(menuId));
  };

  const { title, list } = getCategoryListById(categoryList, currentCategoryId);

  const prevList = usePrevious(list);
  const prevTitle = usePrevious(title);

  return {
    prevMenuList: prevList,
    prevTitle: prevTitle,
    currentTitle: title,
    currentMenuList: list,
    onBackHistory,
    onCategoryChange,
  };
};

export default useCategories;
