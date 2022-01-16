import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import facebookLogo from '../../assets/facebook-logo.png'
import Divider from '../../components/common/Divider';
import { AppStores, AuthRedirect, LoginForm } from '../../components/auth'

const Wrapper = styled.div`
  h1 {
    font-family: 'Grand Hotel';
    text-align: center;
    margin-top: 1rem;
    font-size: 3rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  .content {
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 1rem 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 300px;
  }
  .facebook {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .2rem;
    p {
      color: ${({theme}) => theme.type === 'dark' ? theme.fontColor : '#385185'};
      cursor: pointer;
    }
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 768px){
    .content {
      border: none;
    }
  }
`

const LoginPage = () => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <div className='content'>
        <h1>Instagram</h1>
        <LoginForm />
        <Divider text={t('login.or')}/>
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
    </Wrapper>
  )
}

export default LoginPage
