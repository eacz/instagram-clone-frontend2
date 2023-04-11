import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import styled, { useTheme } from 'styled-components'
const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 16px;
  svg {
    cursor: pointer;
  }
`

interface Props {
  id: number
  isLiked: boolean
}

const PostActions = ({ id, isLiked }: Props) => {
  const color = useTheme().type === 'dark' ? 'white' : 'black'

  return (
    <Container>
      <div>
        {/* TODO: makes post's icons a generic component, cuz al of them share the same styles */}
        {isLiked ? (
          <FontAwesomeIcon color='red' style={{ padding: '0 8px 0 0' }} size='lg' icon={solidHeart} />
        ) : (
          <FontAwesomeIcon color={color} style={{ padding: '0 8px 0 0' }} size='lg' icon={faHeart} />
        )}
        <FontAwesomeIcon color={color} style={{ padding: '0 8px' }} size='lg' icon={faComment} />
        <FontAwesomeIcon color={color} style={{ padding: '0 8px' }} size='lg' icon={faPaperPlane} />
      </div>
      <FontAwesomeIcon color={color} style={{ padding: '0 8px' }} size='lg' icon={faBookmark} />
    </Container>
  )
}

export default PostActions
