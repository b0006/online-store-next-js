interface IState {
  categoryList: ICategoryItem[];
  currentCategoryId: number | null;
  currentMenuList: ICategoryItem[];
  breadcrumbList: IBreadcrumb[];
  isRoot: boolean;
}

export interface IBreadcrumb {
  id: number;
  title: string;
}

export interface ICategoryItem {
  id: number;
  title: string;
  childList?: ICategoryItem[];
}

export enum ACTIONS {
  NEXT,
  JUMP,
  PREV,
}

export const initialState: IState = {
  categoryList: [],
  currentCategoryId: null,
  currentMenuList: [],
  breadcrumbList: [],
  isRoot: true,
};

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

const addToHistory = <T = number>(list: T[], target: T): T[] => {
  const cloneList = [...list];
  cloneList.push(target);
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

const removeAfterCategoryId = (list: IBreadcrumb[], afterId: number): IBreadcrumb[] => {
  const cloneList = [...list];
  const findIndex = list.findIndex((item) => item.id === afterId);
  if (findIndex > -1) {
    cloneList.length = findIndex + 1;
  }
  return cloneList;
};

type Action =
  | {
      type: ACTIONS.NEXT;
      payload: {
        currentCategoryId: number;
      };
    }
  | {
      type: ACTIONS.PREV;
    }
  | {
      type: ACTIONS.JUMP;
      payload: {
        currentCategoryId: number;
      };
    };

export function reducer(state: IState, action: Action): IState {
  switch (action.type) {
    case ACTIONS.NEXT: {
      const categoryId = action.payload.currentCategoryId;
      const { list, title } = getCategoryDataById(state.categoryList, categoryId);

      return {
        ...state,
        currentCategoryId: categoryId,
        currentMenuList: list || [],
        breadcrumbList: addToHistory(state.breadcrumbList, { id: categoryId, title: title || '' }),
        isRoot: false,
      };
    }
    case ACTIONS.PREV: {
      const newBreadcrumbList = removeFromDataList(state.breadcrumbList, state.currentCategoryId);
      const categoryId = newBreadcrumbList[newBreadcrumbList.length - 1]?.id || null;

      const { list } = getCategoryDataById(state.categoryList, categoryId);

      return {
        ...state,
        currentCategoryId: categoryId,
        currentMenuList: list || [],
        breadcrumbList: newBreadcrumbList,
        isRoot: categoryId === null ? true : false,
      };
    }
    case ACTIONS.JUMP: {
      const categoryId = action.payload.currentCategoryId;
      const { list } = getCategoryDataById(state.categoryList, categoryId);
      const newBreadcrumbList = removeAfterCategoryId(state.breadcrumbList, categoryId);

      return {
        ...state,
        currentCategoryId: action.payload.currentCategoryId,
        currentMenuList: list || [],
        breadcrumbList: newBreadcrumbList,
        isRoot: newBreadcrumbList.length <= 0,
      };
    }
    default:
      return initialState;
  }
}
