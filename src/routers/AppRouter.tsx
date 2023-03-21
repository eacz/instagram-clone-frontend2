import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import dayjs from 'dayjs'
import es from 'dayjs/locale/es'
import en from 'dayjs/locale/en'

import { HomePage } from '../pages'
import { LoginPage, RegisterPage } from '../pages/Auth'
import { RequireAuth, PublicRoute } from './'
import { ProfilePage } from '../pages/'

const AppRouter = () => {  
  const { i18n } = useTranslation()
  switch (i18n.resolvedLanguage) {
    case 'es':
      dayjs.locale(es)
      break;
    default:
      dayjs.locale(en)
      break;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RequireAuth Component={HomePage} />} />
        <Route path='accounts'>
          <Route path='register' element={<PublicRoute Component={RegisterPage} />} />
          <Route path='login' element={<PublicRoute Component={LoginPage} />} />
        </Route>
        <Route path=':profileName' element={<RequireAuth Component={ProfilePage} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
