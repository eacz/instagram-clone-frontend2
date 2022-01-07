import {Route, Navigate} from 'react-router-dom';


const PublicRoute = ({element: Component, isLoggedIn, ...rest} : any) => {
  
  return (
    <Route 
      {...rest}
      element={(props:any) => (
        !isLoggedIn ? <Component {...props} /> : <Navigate to="/backoffice/admin" />
      )}
    />
  )
}

export default PublicRoute