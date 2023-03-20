import styled from 'styled-components'
import { PostHeader, PostBody, PostFooter } from '.'
import { IPost } from '../../interfaces'

const PostContainer = styled.article`
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 470px;
  border: 1px solid ${({ theme }) => theme.backgroundContrast};
  border-radius: 8px;
`
interface Props {
  post: IPost
}
const Post = ({ post }: Props) => {
  return (
    <PostContainer>
      <PostHeader profilePicture={post.user.profilePicture} profileName={post.user.username} />
      <PostBody postPhotos={post.images} description={post.description} likes={post.likes.length} profileName={post.user.username} />
      <PostFooter />
    </PostContainer>
  )
}

export default Post
