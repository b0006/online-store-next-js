interface IState {
  categoryList: ICategoryItem[];
  currentCategoryId: number | null;
  currentMenuList: ICategoryItem[];
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
  CHANGE_CATEGORY,
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
};

export function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case ACTIONS.CHANGE_CATEGORY:
      return {
        ...state,
        currentCategoryId: action.payload?.currentCategoryId || null,
        currentMenuList: action.payload?.currentMenuList || [],
        historyMenuId: action.payload?.historyMenuId || [],
        isRoot: !!action.payload?.isRoot,
      };
    case ACTIONS.BACK_CATEGORY:
      return {
        ...state,
        currentCategoryId: action.payload?.currentCategoryId || null,
        currentMenuList: action.payload?.currentMenuList || [],
        historyMenuId: action.payload?.historyMenuId || [],
        isRoot: !!action.payload?.isRoot,
      };
    default:
      return initialState;
  }
}
