import { authActions, authState } from './types'

const initalState: authState = {
  auth: false,
  user: null,
  loading: false,
  checking: false,
  token: '',
  error: ''
}

function authReducer(state = initalState, action: authActions): authState {
  switch (action.type) {
    case 'authStart':
      return { ...state, loading: true }
    case 'login':
      return { ...state, auth: true, loading: false }
    case 'signup':
    case 'logout':
      return { ...state, auth: false, user: null, loading: false }
    case 'error':
      return {...state, auth: false, loading: false, error: action.payload}
    default:
      return state
  }
}

export default authReducer
