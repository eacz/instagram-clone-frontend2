import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages'
import { LoginPage, RegisterPage } from '../pages/Auth'
import { RequireAuth, PublicRoute } from './'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RequireAuth Component={HomePage} />} />
        <Route path='accounts'>
          <Route path='register' element={<PublicRoute Component={RegisterPage} />} />
          <Route path='login' element={<PublicRoute Component={LoginPage} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
