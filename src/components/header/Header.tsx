import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Logo, Menu, MenuItem } from '.'

const Container = styled.aside`
  height: 100vh;
  max-width: calc(100vw - 85vw);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 40px;
  position: fixed;
  z-index: 1;
  border-right: 1px solid ${(p) => p.theme.backgroundContrast};
  @media screen and (max-width: 1000px) {
    max-width: 40px;
    margin-left: 10px;
  }
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
