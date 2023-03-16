import styled from 'styled-components'
import { PostHeader, PostBody, PostFooter } from '.'

const PostContainer = styled.article`
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 470px;
  border: 1px solid ${({ theme }) => theme.backgroundContrast};
  border-radius: 8px;
`

const Post = () => {
  return (
    <PostContainer>
      <PostHeader />
      <PostBody />
      <PostFooter />
    </PostContainer>
  )
}

export default Post
