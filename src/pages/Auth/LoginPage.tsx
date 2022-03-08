import { useTranslation } from 'react-i18next'
import facebookLogo from '../../assets/facebook-logo.png'
import Divider from '../../components/common/Divider';
import { AppStores, AuthRedirect, AuthWrapper, LoginForm } from '../../components/auth'

const LoginPage = () => {
  const { t } = useTranslation()
  return (
    <AuthWrapper>
      <div className='content'>
        <h1>Instagram</h1>
        <LoginForm />
        <Divider text={t('auth.or')}/>
        <div className='facebook'>
          <img src={facebookLogo} alt='' />
          <p>{t('login.facebook')}</p>
        </div>
        <a style={{marginTop: '1rem'}} href="/">{t('login.password')}</a>
      </div>
      <AuthRedirect 
        text={t('auth.text-register')} path='/accounts/register' linkText={t('auth.register')} 
      />
      <AppStores />
    </AuthWrapper>
  )
}

export default LoginPage
