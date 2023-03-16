import styled from 'styled-components'
import fakeProfilePicture from '../../assets/fakeProfilePicture.jpg'


const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  .image-container {
    position: relative;
    margin: 10px;
    .image {
      height: 56px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
`

const Storie = () => {
  return (
    <Container>
      <figure className='image-container'>
        <img src={fakeProfilePicture} alt='user-profile' className='image' />
      </figure>
      <span className='user-name'>username</span>
    </Container>
  )
}

export default Storie
