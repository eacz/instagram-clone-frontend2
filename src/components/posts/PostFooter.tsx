import styled from 'styled-components'

import { AddComment } from './comments'
import { time } from '../../utils'


const Container = styled.section`
  .main {
    padding: 6px 16px;
  }
  time {
    letter-spacing: 0.2px;
    color: ${({ theme }) => theme.backgroundContrast};
    font-weight: bold;
    font-size: 12px;
  }
`

interface Props {
  createdAt: string
}

const PostFooter = ({ createdAt }: Props) => {
  const formattedDate = time.getRelativeTime(createdAt)
  return(
    <Container>
      <div className='main'>
        <time>{formattedDate}</time>
      </div>
      <AddComment />
    </Container>
  )
}

export default PostFooter
