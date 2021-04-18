import { useReducer } from 'react';
import { initialState, reducer, ACTIONS, ICategoryItem, IBreadcrumb } from './reducer';

interface IReturn {
  breadcrumbList: IBreadcrumb[];
  currentMenuList: ICategoryItem[];
  isRoot: boolean;
  onBackHistory: () => void;
  onCategoryChange: (categoryId: number) => void;
  onJumpCategory: (categoryId: number) => void;
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

const removeAfterCategoryId = (list: IBreadcrumb[], afterId: number): IBreadcrumb[] => {
  const cloneList = [...list];
  const findIndex = list.findIndex((item) => item.id === afterId);
  if (findIndex > -1) {
    cloneList.length = findIndex + 1;
  }
  return cloneList;
};

const removeFromDataList = (list: IBreadcrumb[], targetId: number | null): IBreadcrumb[] => {
  if (typeof targetId !== 'number') {
    return list;
  }

  const cloneList = [...list];

  const findIndex = list.findIndex((item) => item.id === targetId);
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
    const newBreadcrumbList = removeFromDataList(state.breadcrumbList, state.currentCategoryId);
    const categoryId = newBreadcrumbList[newBreadcrumbList.length - 1]?.id || null;
    const { list } = getCategoryDataById(state.categoryList, categoryId);

    dispatch({
      type: ACTIONS.CHANGE_CATEGORY,
      payload: {
        currentCategoryId: categoryId,
        currentMenuList: list,
        breadcrumbList: newBreadcrumbList,
        isRoot: categoryId === null ? true : false,
      },
    });
  };

  const onCategoryChange = (categoryId: number): void => {
    const { list, title } = getCategoryDataById(state.categoryList, categoryId);

    dispatch({
      type: ACTIONS.CHANGE_CATEGORY,
      payload: {
        currentCategoryId: categoryId,
        currentMenuList: list,
        breadcrumbList: addToHistory(state.breadcrumbList, { id: categoryId, title: title || '' }),
        isRoot: false,
      },
    });
  };

  const onJumpCategory = (categoryId: number): void => {
    const { list } = getCategoryDataById(state.categoryList, categoryId);
    const newBreadcrumbList = removeAfterCategoryId(state.breadcrumbList, categoryId);

    dispatch({
      type: ACTIONS.CHANGE_CATEGORY,
      payload: {
        currentCategoryId: categoryId,
        currentMenuList: list,
        breadcrumbList: newBreadcrumbList,
        isRoot: newBreadcrumbList.length <= 0,
      },
    });
  };

  console.log(state);

  return {
    breadcrumbList: state.breadcrumbList,
    currentMenuList: state.currentMenuList,
    isRoot: state.isRoot,
    onBackHistory,
    onCategoryChange,
    onJumpCategory,
  };
};

export default useCategories;
