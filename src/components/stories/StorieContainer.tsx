import styled from 'styled-components'
import { Storie } from '.'

const Container = styled.div`
  max-height: 120px;
  height: 100%;
  max-width: 630px;
  width: 100%;
  display: flex;
  border: 1px solid ${({ theme }) => theme.backgroundContrast};
  margin: 16px 0 0;
  padding: 16px 0;
`

const StorieContainer = () => {
  const stories = [1,2,3,4,5,6,7,8]
  return (
    <Container>
      {stories.map( (storie) => <Storie key={storie} />)}
    </Container>
  )
}

export default StorieContainer
