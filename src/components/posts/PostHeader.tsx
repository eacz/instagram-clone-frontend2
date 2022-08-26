import styled, { useTheme } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { ProfilePicture } from '.'

const PostHeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  .left-header {
    display: flex;
    align-items: center;
  }
  p,
  svg {
    cursor: pointer;
  }
`
const profileName = 'lighthouse_professional_tattoo'
const PostHeader = () => {
  const color = useTheme().type === 'dark' ? 'white' : 'black'

  return (
    <PostHeaderContainer>
      <div className='left-header'>
        <ProfilePicture />
        <p>{profileName}</p>
      </div>
      <FontAwesomeIcon icon={faEllipsis} color={color} />
    </PostHeaderContainer>
  )
}

export default PostHeader
