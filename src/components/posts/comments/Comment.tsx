import styled, { useTheme } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    margin: 4px 0;
    a {
      font-weight: 700;
      cursor: pointer;
      margin-right: 4px;
      text-decoration: none;
    }
  }
  svg {
    cursor: pointer;
  }
`

const comment = { username: '9rukim', comment: 'Amazing!!' }

const Comment = () => {
  const color = useTheme().type === 'dark' ? 'white' : 'black'
  return (
    <Container>
      <p>
        <a href='#'>{comment.username}</a>
        {comment.comment}
      </p>
      <FontAwesomeIcon size='xs' icon={faHeart} color={color} />
    </Container>
  )
}

export default Comment
