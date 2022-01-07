import { DefaultTheme } from 'styled-components';
export interface themeState {
  currentTheme: DefaultTheme,
}

export type themeActions =
 | { type: 'setLightTheme' }
 | { type: 'setDarkTheme' }