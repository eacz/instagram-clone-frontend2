import { User } from '../../interfaces'

export interface authState {
  auth: boolean
  user: User | null
  loading: boolean
  checking: boolean
  token: string
  error: string
}

export type authActions =
  | { type: 'login'; payload: {} }
  | { type: 'signup'; payload: {} }
  | { type: 'authStart' }
  | { type: 'logout' }
  | { type: 'error'; payload: string }
