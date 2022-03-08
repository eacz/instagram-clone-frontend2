import { PayloadAction } from "@reduxjs/toolkit"
import { authState } from "./types"

export const setLoading = (state: authState, action: PayloadAction<boolean>) => {
  state.loading = action.payload
}

export {}