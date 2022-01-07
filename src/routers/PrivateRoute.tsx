import { Navigate, Route } from 'react-router-dom'

const PrivateRoute = ({component: Component, isLoggedIn, ...rest} : any) => {
    //localStorage.setItem('lastPath',rest.location.pathname);
    return (
        <Route 
        {...rest}
        component={(props:any)  => (
            isLoggedIn ? <Component {...props} /> : <Navigate to="/backoffice" />  
        )}
        
        />
    )
}

export default PrivateRoute