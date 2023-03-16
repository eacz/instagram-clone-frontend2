import fakePicture from '../../assets/fakePicture.jpg'
import styled from 'styled-components'

const PostPhotoContainer = styled.div`
  img {
    width: 100%;
  }
`

const PostPhoto = () => {
  return (
    <PostPhotoContainer>
      <img src={fakePicture} alt='fake post pic' />
    </PostPhotoContainer>
  )
}

export default PostPhoto
