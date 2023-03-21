import styled from 'styled-components'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { AddComment } from './comments'

dayjs.extend(relativeTime)

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
  const formattedDate = dayjs(createdAt).fromNow()
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
