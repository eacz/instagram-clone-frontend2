import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import RegisterPage from '../pages/Auth/RegisterPage'
import LoginPage from '../pages/Auth/LoginPage'
import RequireAuth from './RequireAuth';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={ <RequireAuth Component={HomePage} /> }
        />
        <Route path='accounts'>
          <Route path='register' 
            element={ <PublicRoute Component={RegisterPage} />}
             />
          <Route path='login' 
            element={ <PublicRoute Component={LoginPage} />} 
            />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
