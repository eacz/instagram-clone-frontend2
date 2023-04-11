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

export const like = createAsyncThunk('posts/like', async (id: number, { rejectWithValue }) => {
  try {
    const res = await postApi.likePost(id)
    return res
  } catch (error: any) {
    if (!error.response) {
      throw error
    }
    return rejectWithValue(error.response.data)
  }
})

export const dislike = createAsyncThunk('posts/dislike', async (id: number, { rejectWithValue }) => {
  try {
    const res = await postApi.dislikePost(id)
    return res
  } catch (error: any) {
    if (!error.response) {
      throw error
    }
    return rejectWithValue(error.response.data)
  }
})
