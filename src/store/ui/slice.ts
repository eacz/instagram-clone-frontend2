import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { menuItems, uiState } from './types'

const initialState: uiState = {
  isSidebarOpen: false,
  sidebarItemActive: 'home',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setIsSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload
    },
    setSidebarItemActive: (state, action: PayloadAction<menuItems>) => {
      state.sidebarItemActive = action.payload
    },
  },
})

export const { setIsSidebarOpen, setSidebarItemActive } = themeSlice.actions

export default themeSlice.reducer
