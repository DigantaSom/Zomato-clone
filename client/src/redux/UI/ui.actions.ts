import {
  IToggleNavMenu,
  IToggleAuthForm,
  TOGGLE_NAV_MENU,
  TOGGLE_AUTH_FORM,
  OpenCloseType,
  LoginOrSignUpType,
} from './ui.types';

export const toggleNavMenu = (): IToggleNavMenu => ({
  type: TOGGLE_NAV_MENU,
});

export const toggleAuthForm = (
  action: OpenCloseType,
  loginOrSignup: LoginOrSignUpType
): IToggleAuthForm => ({
  type: TOGGLE_AUTH_FORM,
  payload: {
    isAuthFormHidden: action === 'Open' ? false : true,
    loginOrSignup,
  },
});
