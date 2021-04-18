interface IState {
  categoryList: ICategoryItem[];
  currentCategoryId: number | null;
  currentMenuList: ICategoryItem[];
  currentTitle: string;
  historyTitleList: string[];
  isRoot: boolean;
  historyMenuId: number[];
}

export interface ICategoryItem {
  id: number;
  title: string;
  childList?: ICategoryItem[];
}

export enum ACTIONS {
  NEXT_CATEGORY,
  BACK_CATEGORY,
}

interface IAction {
  type: ACTIONS;
  payload?: Partial<IState>;
}

export const initialState: IState = {
  categoryList: [],
  currentCategoryId: null,
  currentMenuList: [],
  historyTitleList: [],
  isRoot: true,
  historyMenuId: [],
  currentTitle: '',
};

const addHistoryTitle = (list: string[], title: string): string[] => {
  if (title.length <= 0) {
    return list;
  }

  const cloneList = [...list];
  cloneList.push(title);
  return cloneList;
};

const removeHistoryTitle = (list: string[]): string[] => {
  const cloneList = [...list];
  cloneList.splice(-1, 1);
  return cloneList;
};

export function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case ACTIONS.NEXT_CATEGORY:
      return {
        ...state,
        currentCategoryId: action.payload?.currentCategoryId || null,
        currentMenuList: action.payload?.currentMenuList || [],
        historyMenuId: action.payload?.historyMenuId || [],
        isRoot: !!action.payload?.isRoot,
        historyTitleList: addHistoryTitle(state.historyTitleList, action.payload?.currentTitle || ''),
      };
    case ACTIONS.BACK_CATEGORY:
      return {
        ...state,
        currentCategoryId: action.payload?.currentCategoryId || null,
        currentMenuList: action.payload?.currentMenuList || [],
        historyMenuId: action.payload?.historyMenuId || [],
        isRoot: !!action.payload?.isRoot,
        historyTitleList: removeHistoryTitle(state.historyTitleList),
      };
    default:
      return initialState;
  }
}
