interface IState {
  categoryList: ICategoryItem[];
  currentCategoryId: number | null;
  currentMenuList: ICategoryItem[];
  currentTitle: string;
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
  CHANGE_CATEGORY,
}

interface IAction {
  type: ACTIONS;
  payload?: Partial<IState>;
}

export const initialState: IState = {
  categoryList: [],
  currentCategoryId: null,
  currentMenuList: [],
  breadcrumbList: [],
  isRoot: true,
  currentTitle: '',
};

export function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case ACTIONS.CHANGE_CATEGORY:
      return {
        ...state,
        currentCategoryId: action.payload?.currentCategoryId || null,
        currentMenuList: action.payload?.currentMenuList || [],
        breadcrumbList: action.payload?.breadcrumbList || [],
        isRoot: !!action.payload?.isRoot,
      };
    default:
      return initialState;
  }
}
