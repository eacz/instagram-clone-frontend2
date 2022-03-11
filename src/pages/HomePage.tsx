import { setDarkTheme, setLightTheme } from '../store/theme/slice'
import { useAppDispatch } from '../hooks/index'
import { useTranslation } from 'react-i18next'
import { lngs } from '../config/i18n'
import { Link } from 'react-router-dom'
import { logout } from '../store/auth/slice'

const HomePage = () => {
  const dispatch = useAppDispatch()
  const { t, i18n } = useTranslation()
  return (
    <div>
      <h1>{t('home')}</h1>
      <div>
        {Object.entries(lngs).map(([ key, value ]) => (
          <button
            key={key}
            type='submit'
            onClick={() => i18n.changeLanguage(key)}
          >
            {value.nativeName}
          </button>
        ))}
      </div>
      <button onClick={() => dispatch(setLightTheme())}>Light</button>
      <button onClick={() => dispatch(setDarkTheme())}>Dark</button>
      <p>{t('interpolation', {something: 'this is an interpolation example'})}</p>
      <p>{t('interpolation', {something: 'same as above'})}</p>
      <Link to="/accounts/register">Register</Link>
      <Link to="/accounts/login">Login</Link>
      <button onClick={() => dispatch(logout())} >logout</button>
    </div>
  )
}

export default HomePage
