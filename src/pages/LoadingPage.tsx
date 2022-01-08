import styled from 'styled-components';
import logo from '../assets/grey-logo.png';

const Wrapper = styled.div`
background-color: ${({theme}) => theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  img {
    height: 80px;
    width: 80px;
  }
`;

const LoadingPage = () => {
  return (
    <Wrapper>
      <img src={logo} alt="" />
    </Wrapper>
  )
}

export default LoadingPage
