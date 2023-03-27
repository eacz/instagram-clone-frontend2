import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/slice'
import themeReducer from './theme/slice'
import postsReducer from './post/slice'
import uiReducer from './ui/slice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    posts: postsReducer,
    ui: uiReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
