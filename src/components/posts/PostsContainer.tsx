import { Post } from '.'
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 30px;
  max-width: 670px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const posts = [1, 2, 3, 4, 5, 6, 7, 8]
const PostsContainer = () => {
  return (
    <Container>
      {posts.map((post) => (
        <Post key={post} />
      ))}
    </Container>
  )
}

export default PostsContainer
