import { useTranslation } from 'react-i18next'
import { AppStores, AuthRedirect, AuthWrapper, FacebookRegister, RegisterForm } from '../../components/auth'
import { Divider } from '../../components/common'
import { useAppSelector } from '../../hooks'

const RegisterPage = () => {
  const { t } = useTranslation()
  const error = useAppSelector((s) => s.auth.error)
  return (
    <AuthWrapper>
      <div className='content'>
        <h1>Instagram</h1>
        <h2 className='subtitle'>{t('register.subtitle')}</h2>
        <FacebookRegister />
        <Divider text={t('auth.or')} />
        <RegisterForm />
        {error && <p className='error'>{error}</p>}
      </div>
      <AuthRedirect text={t('auth.text-login')} path='/accounts/login' linkText={t('auth.login')} />
      <AppStores />
    </AuthWrapper>
  )
}

export default RegisterPage
