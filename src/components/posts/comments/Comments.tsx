import { Comment } from '.'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const Container = styled.section`
  padding: 0px 16px 6px 16px;
  p.more-commments {
    color: ${({theme}) => theme.backgroundContrast };
    margin: 0 0 3px 0;
  }
`

const comments = [1, 2, 3, 4, 5, 6]
const Comments = () => {
  const { t } = useTranslation()
  return (
    <Container>
      {comments.length > 2 && (
        <p className='more-commments'>
          {t('post.comment.more-comments', { commentsNumber: comments.length })}
        </p>
      )}
      {comments.map((comment, index) => index < 2 && <Comment key={comment} />)}
    </Container>
  )
}

export default Comments
