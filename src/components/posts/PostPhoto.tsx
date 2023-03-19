import styled from 'styled-components'

const PostPhotoContainer = styled.div`
  img {
    width: 100%;
  }
`
interface Props {
  photo: string
}
const PostPhoto = ({photo}: Props) => {
  return (
    <PostPhotoContainer>
      {/* TODO: slider of multiple photos */}
      <img src={photo} alt='fake post pic' />
    </PostPhotoContainer>
  )
}

export default PostPhoto
