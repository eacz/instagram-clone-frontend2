import { authState } from './types'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import authApi, { loginBody, signupBody } from './api'
import { loginResponse } from '../../interfaces/responses'
import { setItem, deleteItem, setHeader, deleteHeader } from '../../helpers'

const initialState: authState = {
  auth: false,
  user: null,
  loading: false,
  checking: true,
  token: '',
  error: '',
}

const tokenKeyName = 'token-ig'

//TODO: move all asyncs thunks to a separated file
export const signup = createAsyncThunk('auth/signup', async (signupBody: signupBody) => {
  const res = await authApi.signup(signupBody)
  return res
})

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

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setChecking: (state, action: PayloadAction<boolean>) => {
      state.checking = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    logout: (state) => {
      deleteItem(tokenKeyName)
      deleteHeader(tokenKeyName)
      state.auth = false
      state.user = null
      state.token = ''
      state.error = ''
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action: PayloadAction<loginResponse>) => {
      state.auth = true
      state.user = action.payload.user
      state.token = action.payload.token
      state.loading = false
      state.error = ''
    })
    builder.addCase(login.rejected, (state, action: PayloadAction<any>) => {
      state.error = action.payload.message || 'Something went wrong, please try again'
      state.loading = false
    })
    builder.addCase(login.pending, (state) => {
      state.loading = true
    })
    builder.addCase(checkToken.fulfilled, (state, action: PayloadAction<loginResponse>) => {
      state.auth = true
      state.checking = false
      state.token = action.payload.token
      state.user = action.payload.user
    })
    builder.addCase(checkToken.rejected, (state) => {
      state.checking = false
    })
  },
})

export const { setLoading, logout, setError } = authSlice.actions

export default authSlice.reducer
