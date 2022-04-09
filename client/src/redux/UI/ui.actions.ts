import { IToggleNavMenu, TOGGLE_NAV_MENU } from './ui.types';

export const toggleNavMenu = (): IToggleNavMenu => ({
  type: TOGGLE_NAV_MENU,
});
