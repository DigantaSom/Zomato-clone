export const TOGGLE_NAV_MENU = 'TOGGLE_CART';
export const TOGGLE_AUTH_FORM = 'TOGGLE_AUTH_FORM';

export type OpenCloseType = 'Open' | 'Close';
export type LoginOrSignUpType = 'Login' | 'Sign Up' | 'for closing';

export interface IToggleNavMenu {
  type: typeof TOGGLE_NAV_MENU;
}

export interface IToggleAuthForm {
  type: typeof TOGGLE_AUTH_FORM;
  payload: {
    isAuthFormHidden: boolean; // to explicitely open or close
    loginOrSignup: LoginOrSignUpType;
  };
}

export type UiActionType = IToggleNavMenu | IToggleAuthForm;
