import { authActions, authState } from './types';



const initalState: authState = {
  auth: true,
  user: null,
  loading: false,
  checking: false,
  token: ''
}

function authReducer(state = initalState, action: authActions): authState{
  switch(action.type){
    case 'signup':
    case 'login':
    case 'logout':
    case 'error':
    default:
      return state;
  }
}

export default authReducer;