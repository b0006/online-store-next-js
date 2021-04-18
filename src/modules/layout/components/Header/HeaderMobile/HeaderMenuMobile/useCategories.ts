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

const useCategories = (categoryList: ICategoryItem[]): IReturn => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    currentMenuList: categoryList,
    categoryList,
  });

  const onBackHistory = (): void => {
    dispatch({ type: ACTIONS.PREV });
  };

  const onCategoryChange = (categoryId: number): void => {
    dispatch({
      type: ACTIONS.NEXT,
      payload: { currentCategoryId: categoryId },
    });
  };

  const onJumpCategory = (categoryId: number): void => {
    dispatch({
      type: ACTIONS.JUMP,
      payload: { currentCategoryId: categoryId },
    });
  };

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
