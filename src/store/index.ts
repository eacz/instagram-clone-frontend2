import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/slice'
import themeReducer from './theme/slice'
import postsReducer from './post/slice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    posts: postsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
