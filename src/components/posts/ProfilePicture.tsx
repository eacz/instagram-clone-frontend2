import styled from 'styled-components'
import fakeProfilePicture from '../../assets/fakeProfilePicture.jpg'

const Container = styled.div<Props>`
  margin-right: 0.5rem;
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
}

const ProfilePicture = ({ height = 32, width = 32 }: Props) => {
  return (
    <Container height={height} width={width}>
      <img src={fakeProfilePicture} alt='xd' />
    </Container>
  )
}

export default ProfilePicture
