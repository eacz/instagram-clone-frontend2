import { DefaultTheme } from 'styled-components'

export type themeTypes = 'light' | 'dark'

declare module "styled-components" {
  export interface DefaultTheme {
    type: themeTypes, 
    background: string;
    primaryColor: string;
    fontColor:  string;
    backgroundContrast: string;
    error: string;
    //secondaryColor: string;
    //backgroundContrast: string;
  }
}

export const lightTheme : DefaultTheme = {
  type: 'light',
  background: '#ffffff',
  primaryColor: '#0095f6',
  fontColor: '#262626',
  backgroundContrast: '#dbdbdb',
  error: '#ff3749'
}

export const darkTheme : DefaultTheme = {
  type: 'dark',
  background: '#1f1f1f',
  primaryColor: '#0095f6',
  fontColor: '#ffffff',
  backgroundContrast: '#dbdbdb',
  error: '#ff3749'
}
