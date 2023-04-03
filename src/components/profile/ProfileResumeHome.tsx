import styled from 'styled-components'
import { ProfilePicture } from '../posts'
import { useTranslation } from 'react-i18next'

const Container = styled.section`
  
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  border: 1px solid ${p => p.theme.backgroundContrast};
  border-radius: 8px;
  padding: 5px 0;
  .profile-name {
    p {
      margin: 0;
    }
  }
  .change-link {
    color: ${(p) => p.theme.primaryColor};
    text-decoration: none;
    font-weight: 700;
  }
`

const name = 'Esteban Canteros'
const username = 'eacz'

const ProfileResumeHome = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <ProfilePicture width={56} height={56} />
      <div className='profile-name'>
        <p>{username}</p>
        <p>{name}</p>
      </div>
      {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
      <a href='#' className='change-link'>
        {t('footer.change')}
      </a>
    </Container>
  )
}

export default ProfileResumeHome
