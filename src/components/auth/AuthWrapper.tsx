import styled from "styled-components";

const AuthWrapper = styled.div`
  h1 {
    font-family: 'Grand Hotel';
    text-align: center;
    margin-top: 1rem;
    font-size: 3rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  .content {
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 1rem 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 300px;
    .subtitle {
      color: #8e8e8e;
      font-size: 1.2rem;
      text-align: center;
      margin-top: 0;
    }
  }
  .facebook {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .2rem;
    p {
      color: ${({theme}) => theme.type === 'dark' ? theme.fontColor : '#385185'};
      cursor: pointer;
    }
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 768px){
    .content {
      border: none;
    }
  }
`
export default AuthWrapper