import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { ProfileResumeHome } from '../profile'
import { TextButton } from '../common'

const Container = styled.article`
  .suggestions-text {
    display: flex;
    justify-content: space-between;
    margin: 0 30px;
    p {
      font-weight: 700;
    }
  }
`

const fakeSuggestions = [
  {
    username: 'tina',
    name: 'Agos',
  },
  {
    username: 'mimimimimimi',
    name: 'Mimi',
  },
  {
    username: 'ciruela',
    name: 'Ciri',
  },
  {
    username: 'poli',
    name: 'Poli',
  },
]

const Suggestions = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <div className='suggestions-text'>
        <p>{t('footer.suggestions')}</p>
        <TextButton>{t('footer.see-all')}</TextButton>
      </div>
      {fakeSuggestions.map((user) => (
        <ProfileResumeHome key={user.username} name={user.name} username={user.username} />
      ))}
    </Container>
  )
}

export default Suggestions
