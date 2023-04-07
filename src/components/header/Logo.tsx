import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const Container = styled.div`
  h1 {
    font-family: 'Grand Hotel';
    text-align: center;
    font-size: 2.5rem;
    @media screen and (max-width: 1000px) {
      display: none;
    }
  }

  svg {
    font-size: 1.7em;
    @media screen and (min-width: 1000px) {
      display: none;
    }
  }
  @media screen and (max-width: 1000px) {
    margin-bottom: 3rem;
  }
`

const Logo = () => {
  return (
    <Container>
      <h1>Instagram</h1>
      <FontAwesomeIcon height={24} width={24} size='lg' icon={faInstagram as IconProp} />
    </Container>
  )
}

export default Logo
