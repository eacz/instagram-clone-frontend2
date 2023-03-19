import { createAsyncThunk } from '@reduxjs/toolkit'
import postApi from './api'

export const tokenKeyName = 'token-ig'

export const getFeed = createAsyncThunk('posts/feed', async (_, { rejectWithValue }) => {
  try {
    const res = await postApi.getFeed()
    return res
  } catch (error: any) {
    if (!error.response) {
      throw error
    }
    return rejectWithValue(error.response.data)
  }
})
