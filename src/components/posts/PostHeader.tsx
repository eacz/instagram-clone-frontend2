import styled, { useTheme } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { ProfilePicture } from '.'
import { Link } from 'react-router-dom'

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
    text-decoration: none;
  }
  p,
  svg {
    cursor: pointer;
  }
`

interface Props {
  profileName: string
  profilePicture: string
}

const PostHeader = ({ profilePicture, profileName }: Props) => {
  const color = useTheme().type === 'dark' ? 'white' : 'black'

  return (
    <PostHeaderContainer>
      <Link to={`/${profileName}`} className='left-header'>
        <ProfilePicture profilePicture={profilePicture} />
        <p>{profileName}</p>
      </Link>
      <FontAwesomeIcon icon={faEllipsis} color={color} />
    </PostHeaderContainer>
  )
}

export default PostHeader
