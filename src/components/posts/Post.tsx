import styled from 'styled-components'
import { PostHeader } from '.'

const PostContainer = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
`

const Post = () => {
  return (
    <PostContainer>
      <PostHeader />
    </PostContainer>
  )
}

export default Post
