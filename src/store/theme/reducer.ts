import { themeActions, themeState } from "./types";
import { darkTheme, lightTheme } from '../../themes/index';

const initialState: themeState = {
  currentTheme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? darkTheme : lightTheme
}

function themeReducer(state = initialState, action: themeActions): themeState{
  switch(action.type){
    case 'setDarkTheme':
      return {...state, currentTheme: darkTheme }
    case 'setLightTheme':
      return {...state, currentTheme: lightTheme }
    default: 
      return state
  }
}

export default themeReducer