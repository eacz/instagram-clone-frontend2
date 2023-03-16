import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Button } from '../common'
import logo from '../../assets/facebook-logo-inverted.png'

const Wrapper = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;
  p {
    margin: 0;
    color: #ffffff;
  }
`

const FacebookRegister = () => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <img src={logo} alt='facebook logo' />
      <p>{t('register.facebook-button')}</p>
    </Wrapper>
  )
}

export default FacebookRegister
