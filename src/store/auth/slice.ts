import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authState } from './types'
import { loginResponse } from '../../interfaces/responses'
import { deleteItem, deleteHeader } from '../../helpers'
import { checkToken, login, tokenKeyName } from './actions'

const initialState: authState = {
  auth: false,
  user: null,
  loading: false,
  checking: true,
  token: '',
  error: '',
}

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
export { checkToken, login, tokenKeyName }

export default authSlice.reducer
