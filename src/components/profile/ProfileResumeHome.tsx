import styled from 'styled-components'
import { ProfilePicture } from '../posts'
import { useTranslation } from 'react-i18next'
import { TextButton } from '../common'

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 5px 0;
  .profile {
    p {
      color: ${(p) => p.theme.fontColor};
      margin: 0;
    }
    .username {
      font-weight: 700;
    }
    .name {
      font-weight: 200;
    }
  }
  .change-link {
    color: ${(p) => p.theme.primaryColor};
    text-decoration: none;
    font-weight: 700;
  }
`

interface Props {
  isUser?: boolean
  name: string
  username: string
  photo?: string
}

const ProfileResumeHome = ({ isUser = false, name, username, photo }: Props) => {
  const { t } = useTranslation()
  const profilePictureSize = isUser ? 56 : 32
  return (
    <Container>
      <ProfilePicture profilePicture={photo} width={profilePictureSize} height={profilePictureSize} />
      <div className='profile'>
        <p className='username'>{username}</p>
        <p className='name'>{name}</p>
      </div>
      <TextButton changeColorOnHover={!isUser}>
        {' '}
        {isUser ? t('footer.change') : t('footer.follow')}
      </TextButton>
    </Container>
  )
}

export default ProfileResumeHome
