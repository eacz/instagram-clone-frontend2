import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/reducer';
//import themeReducer from './theme/reducer';
import themeReducer from './theme/slice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;