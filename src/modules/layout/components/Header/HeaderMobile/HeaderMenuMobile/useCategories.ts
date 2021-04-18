import { useReducer } from 'react';
import { initialState, reducer, ACTIONS, ICategoryItem } from './reducer';

interface IReturn {
  historyTitleList: string[];
  currentMenuList: ICategoryItem[];
  isRoot: boolean;
  onBackHistory: () => void;
  onCategoryChange: (categoryId: number) => void;
}

const getCategoryDataById = (
  categoryList: ICategoryItem[],
  categoryId?: number | null
): {
  title?: string;
  list?: ICategoryItem[];
} => {
  if (categoryId === null) {
    return {
      title: 'Menu',
      list: categoryList,
    };
  }

  return categoryList.reduce((acc, category) => {
    if (category.id !== categoryId && category.childList) {
      return categoryId
        ? { ...acc, ...getCategoryDataById(category.childList, categoryId) }
        : getCategoryDataById(category.childList, categoryId);
    }
    return category.childList
      ? {
          ...acc,
          title: category.title,
          list: category.childList,
        }
      : acc;
  }, {});
};

const removeFromHistoryById = (list: number[], targetId: number | null): number[] => {
  if (typeof targetId !== 'number') {
    return list;
  }

  const cloneList = [...list];

  const findIndex = list.indexOf(targetId);
  if (findIndex > -1) {
    cloneList.splice(findIndex, 1);
  }

  return cloneList;
};

const addToHistory = <T = number>(list: T[], target: T): T[] => {
  const cloneList = [...list];
  cloneList.push(target);
  return cloneList;
};

const useCategories = (categoryList: ICategoryItem[]): IReturn => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    currentMenuList: categoryList,
    categoryList,
  });

  const onBackHistory = (): void => {
    const newHistory = removeFromHistoryById(state.historyMenuId, state.currentCategoryId);
    const categoryId = newHistory[newHistory.length - 1] || null;
    const { list } = getCategoryDataById(state.categoryList, categoryId);

    dispatch({
      type: ACTIONS.BACK_CATEGORY,
      payload: {
        currentCategoryId: categoryId,
        currentMenuList: list,
        historyMenuId: newHistory,
        isRoot: categoryId === null ? true : false,
      },
    });
  };

  const onCategoryChange = (categoryId: number): void => {
    const { list, title } = getCategoryDataById(state.categoryList, categoryId);

    dispatch({
      type: ACTIONS.NEXT_CATEGORY,
      payload: {
        currentCategoryId: categoryId,
        currentMenuList: list,
        currentTitle: title,
        historyMenuId: addToHistory(state.historyMenuId, categoryId),
        isRoot: false,
      },
    });
  };

  return {
    historyTitleList: state.historyTitleList,
    currentMenuList: state.currentMenuList,
    isRoot: state.isRoot,
    onBackHistory,
    onCategoryChange,
  };
};

export default useCategories;
