import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { ProfilePicture } from '.'

const PostHeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  .left-header {
    display: flex;
  }
`

const PostHeader = () => {
  return (
    <PostHeaderContainer>
      <div className='left-header'>
        <ProfilePicture />
        <p>lighthouse_professional_tattoo</p>
      </div>
      <FontAwesomeIcon icon={faEllipsis} color='white' />
    </PostHeaderContainer>
  )
}

export default PostHeader
