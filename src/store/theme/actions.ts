import { darkTheme, lightTheme } from "../../themes"
import { themeState } from "./types"

export const setLightTheme = (state: themeState) => {
  state.currentTheme= lightTheme 
}

export const setDarkTheme = (state: themeState) => {
  state.currentTheme = darkTheme
}