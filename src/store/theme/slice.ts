import { createSlice } from "@reduxjs/toolkit";
import { darkTheme, lightTheme } from "../../themes";
import { themeState } from './types';
import { RootState } from '../index';

const initialState: themeState = {
  currentTheme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? darkTheme : lightTheme
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLightTheme: state => {
      state.currentTheme = lightTheme 
    },
    setDarkTheme: state => {
      state.currentTheme = darkTheme
    }
  }
})

export const { setDarkTheme, setLightTheme } = themeSlice.actions

export const selectCurrentTheme = (state: RootState) => state.theme.currentTheme

export default themeSlice.reducer