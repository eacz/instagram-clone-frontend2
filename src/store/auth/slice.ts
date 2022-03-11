import { authState } from './types'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import authApi, { loginBody, signupBody } from './api'
import { loginResponse } from '../../interfaces/responses'

const initialState: authState = {
  auth: false,
  user: null,
  loading: false,
  checking: false,
  token: '',
  error: '',
}

export const signup = createAsyncThunk('auth/signup', async (signupBody: signupBody, thunkApi) => {
  const res = await authApi.signup(signupBody)
  return res
})

export const login = createAsyncThunk('auth/login', async (loginBody: loginBody, { rejectWithValue }) => {
  try {
    const res = await authApi.login(loginBody)
    return res
  } catch (error: any) {
    if(!error.response){
      throw error
    }
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
    logout: (state) => {
      state.auth = false
      state.user = null
      state.token = ''
      state.error = ''
    },
  },
  extraReducers: (builder) => {
    //builder.addCase(signup.fulfilled, (state, action) => {})
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
  },
})

export const { setLoading, logout } = authSlice.actions

export default authSlice.reducer
