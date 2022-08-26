import styled from 'styled-components'
import fakeProfilePicture from '../../assets/fakeProfilePicture.jpg'

const Container = styled.div`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
  }
`

const ProfilePicture = () => {
  return (
    <Container>
      <img src={fakeProfilePicture} alt='xd' />
    </Container>
  )
}

export default ProfilePicture
