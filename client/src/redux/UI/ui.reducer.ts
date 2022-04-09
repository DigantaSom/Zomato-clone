import { TOGGLE_NAV_MENU, UiActionType } from './ui.types';

interface UIstate {
  isMenuHidden: boolean;
}

const initialState: UIstate = {
  isMenuHidden: true,
};

const uiReducer = (
  state: UIstate = initialState,
  action: UiActionType
): UIstate => {
  switch (action.type) {
    case TOGGLE_NAV_MENU:
      return {
        ...state,
        isMenuHidden: !state.isMenuHidden,
      };

    default:
      return state;
  }
};

export default uiReducer;
