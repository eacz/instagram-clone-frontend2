import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/index'

interface Props {
  Component?: any
  children?: JSX.Element
}

const RequireAuth = ({ children, Component }: Props) => {
  const auth = useAppSelector((s) => s.auth.auth)
  if (!auth) {
    //TODO: use location.state to preserve the previous location of an user
    return <Navigate to='/accounts/login' replace />
  }
  if(Component){
    return <Component />
  }
  if(children){
    return children
  }
  return <></>
}

export default RequireAuth
