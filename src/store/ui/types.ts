export interface uiState {
  isSidebarOpen: boolean
  sidebarItemActive: menuItems
}

export type menuItems =
  | 'home'
  | 'search'
  | 'explore'
  | 'reels'
  | 'messages'
  | 'notifications'
  | 'create'
  | 'profile'
  | 'more'

export type themeActions =
  | { type: 'setIsSidebarOpen'; payload: boolean }
  | { type: 'setSidebarItemActive'; payload: menuItems }
