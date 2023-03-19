import styled from 'styled-components'

const Container = styled.div`
  margin: 0 30px;
  max-width: 670px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
interface Props {
  children?: JSX.Element | JSX.Element[]
}
const PostsContainer = ({ children }: Props) => {
  return <Container>{children}</Container>
}

export default PostsContainer
