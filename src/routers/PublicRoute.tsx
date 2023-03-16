import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/index'

interface Props {
  Component?: any
  children?: JSX.Element
}

const PublicRoute = ({ children, Component }: Props) => {
  const auth = useAppSelector((s) => s.auth.auth)

  if (auth) {
    return <Navigate to='/' replace />
  }

  if (Component) {
    return <Component />
  }

  if (children) {
    return children
  }
  
  return <></>
}

export default PublicRoute
