import styled from 'styled-components'
import fakeProfilePicture from '../../assets/fakeProfilePicture.jpg'

const Container = styled.div`
  margin-right: 0.5rem;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
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
