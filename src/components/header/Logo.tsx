import styled from 'styled-components'

const Container = styled.div`
  h1 {
    font-family: 'Grand Hotel';
    text-align: center;
    font-size: 2.5rem;
  }
`

const Logo = () => {
  return (
    <Container>
      <h1>Instagram</h1>
    </Container>
  )
}

export default Logo
