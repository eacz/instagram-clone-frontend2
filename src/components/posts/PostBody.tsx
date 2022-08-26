import { PostPhoto, PostActions, PostDescription } from '.'
import { Comments } from './comments'

const PostBody = () => {
  return (
    <>
      <PostPhoto />
      <PostActions />
      <PostDescription />
      <Comments />
    </>
  )
}

export default PostBody
