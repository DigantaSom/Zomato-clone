import {
  LoginOrSignUpType,
  TOGGLE_AUTH_FORM,
  TOGGLE_NAV_MENU,
  UiActionType,
} from './ui.types';

interface UIstate {
  isMenuHidden: boolean;
  authForm: {
    isAuthFormHidden: boolean;
    loginOrSignup: LoginOrSignUpType;
  };
}

const initialState: UIstate = {
  isMenuHidden: true,
  authForm: {
    isAuthFormHidden: true,
    loginOrSignup: 'Login',
  },
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

    case TOGGLE_AUTH_FORM:
      return {
        ...state,
        authForm: {
          ...state.authForm,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

export default uiReducer;
