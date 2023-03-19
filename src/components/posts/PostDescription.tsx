import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
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
interface Props {
  likes: number
  profileName: string
  description?: string
}
const PostDescription = ({ description, likes, profileName }: Props) => {
  const { t } = useTranslation()

  return (
    <Container>
      <a href='#'>
        {likes} {t('post.likes')}
      </a>
      <p className='post-description'>
        <Link to={`/${profileName}`}>{profileName}</Link> {' '}
        {description}
      </p>
    </Container>
  )
}

export default PostDescription
