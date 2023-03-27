import styled from 'styled-components'
import fakeProfilePicture from '../../assets/fakeProfilePicture.jpg'

const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    border-radius: 50%;
    cursor: pointer;
  }
`

interface Props {
  width?: number
  height?: number
  profilePicture?: string
}

const ProfilePicture = ({ height = 32, width = 32, profilePicture }: Props) => {
  return (
    <Container height={height} width={width}>
      <img src={profilePicture || fakeProfilePicture} alt='xd' />
    </Container>
  )
}

export default ProfilePicture
