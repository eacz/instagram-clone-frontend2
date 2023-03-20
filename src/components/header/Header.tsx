import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Logo, Menu, MenuItem } from '.'

const Container = styled.aside`
  height: 100vh;
  max-width: 335px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 40px;
  position: fixed;
  z-index: 1;
`

const Header = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <div>
        <Logo />
        <Menu />
      </div>
      <MenuItem text={t('navbar.more')} iconInactive={faBars} iconActive={faBars} />
    </Container>
  )
}

export default Header
