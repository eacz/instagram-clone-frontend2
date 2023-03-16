import styled from 'styled-components'
import { Logo, Menu, SearchBar } from '.'

const Container = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (min-width: ${({ theme }) => theme.breakpointMobile}px) {
    grid-template-columns: 1fr 2fr 1fr;
  }
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundContrast};
  margin-bottom: 1rem;
`

const Header = () => {
  return (
    <Container>
      <Logo />
      <SearchBar />
      <Menu />
    </Container>
  )
}

export default Header
