import { PostPhoto, PostActions, PostDescription } from '.'
import { Comments } from './comments'

interface Props {
  postPhotos: string[]
  likes: number
  profileName: string
  description?: string
}
const PostBody = ({ postPhotos, description, likes, profileName }: Props) => {
  return (
    <>
      <PostPhoto photo={postPhotos[0]} />
      <PostActions />
      <PostDescription likes={likes} description={description} profileName={profileName} />
      {/*<Comments />*/}
    </>
  )
}

export default PostBody
