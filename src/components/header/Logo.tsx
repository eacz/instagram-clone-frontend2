import styled, { useTheme } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: 'Grand Hotel';
    text-align: center;
    font-size: 2.5rem;
    margin: 0;
  }
  svg {
    cursor: pointer;
    margin-left: 1rem;
  }
`

const Logo = () => {
  const color = useTheme().type === 'dark' ? 'white' : 'black'

  return (
    <Container>
      <h1>Instagram</h1>
      <FontAwesomeIcon color={color} icon={faChevronDown} />
    </Container>
  )
}

export default Logo
