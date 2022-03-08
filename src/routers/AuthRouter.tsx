import { Route, Routes } from "react-router-dom"
import LoginPage from "../pages/Auth/LoginPage"
import RegisterPage from "../pages/Auth/RegisterPage"
//import PublicRoute from './PublicRoute';

const AuthRouter = () => {
  return (
    <Routes >
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  )
}

export default AuthRouter
