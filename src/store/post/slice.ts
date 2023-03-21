import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { postState } from './types'
import { getFeed } from './actions'
import { IPost } from '../../interfaces'

const initialState: postState = {
  feedPosts: [],
  currentUserPosts: [],
  loading: false,
  error: null,
}

export const authSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFeed.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getFeed.fulfilled, (state, action: PayloadAction<IPost[]>) => {
      state.loading = false
      state.feedPosts = action.payload
    })
    builder.addCase(getFeed.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false
      state.error = action.payload?.message || 'Something went wrong, please try again'
    })
  },
})

export const {} = authSlice.actions

export default authSlice.reducer
