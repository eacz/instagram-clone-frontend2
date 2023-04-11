import { PostPhoto, PostActions, PostDescription } from '.'
import { useAppSelector } from '../../hooks'
import { User } from '../../interfaces'
import { Comments } from './comments'

interface Props {
  postPhotos: string[]
  likes: User[]
  profileName: string
  description?: string
  id: number
}
const PostBody = ({ postPhotos, description, likes, profileName, id }: Props) => {
  const user = useAppSelector(state => state.auth.user)
  const isLiked = likes.some(u => u.id === user?.id)
  return (
    <>
      <PostPhoto photo={postPhotos[0]} />
      <PostActions id={id} isLiked={isLiked} />
      <PostDescription likes={likes.length} description={description} profileName={profileName} />
      {/*<Comments />*/}
    </>
  )
}

export default PostBody
