import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { AddComment } from './comments'

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

const PostFooter = () => {
  const { i18n } = useTranslation()

  //TODO: replace this with a time library
  const rtf = new Intl.RelativeTimeFormat(i18n.language, {
    localeMatcher: 'best fit',
    numeric: 'always',
    style: 'long',
  })
  return (
    <Container>
      <div className='main'>
        <time>{rtf.format(-1, 'day')}</time>
      </div>
      <AddComment />
    </Container>
  )
}

export default PostFooter
