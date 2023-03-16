import { createAsyncThunk } from "@reduxjs/toolkit"
import { setHeader, setItem } from "../../helpers"
import authApi, { loginBody } from './api'

export const tokenKeyName = 'token-ig'

export const login = createAsyncThunk('auth/login', async (loginBody: loginBody, { rejectWithValue }) => {
  try {
    const res = await authApi.login(loginBody)
    setItem(tokenKeyName, res.token)
    setHeader(tokenKeyName, res.token)
    return res
  } catch (error: any) {
    if(!error.response){
      throw error
    }
    return rejectWithValue(error.response.data)
  }
})

export const checkToken = createAsyncThunk('auth/checkToken', async (_, { rejectWithValue }) => {
  try {
    const res = await authApi.checkToken()
    return res;
  } catch (error: any) {
    return rejectWithValue(error.response.data)
  }
})