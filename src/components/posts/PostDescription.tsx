import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const Container = styled.section`
  padding: 6px 16px 0px;

  a {
    text-decoration: none;
    font-weight: 700;
    cursor: pointer;
  }
  .post-description {
    margin-right: 0.2rem;
  }
`
const likes = 456
const profileName = 'lighthouse_professional_tattoo'
const description =
  'Blossom 🌷By @9rukim He is in Seoul now. Please contact to him directly🖤'
const PostDescription = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <a href='#'>
        {likes} {t('post.likes')}
      </a>
      <p className='post-description'>
        <a href='#'>{profileName}</a>
        {description}
      </p>
    </Container>
  )
}

export default PostDescription
