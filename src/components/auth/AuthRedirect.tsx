import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid #dbdbdb;
  width: 100%;
  max-width: 300px;
  padding: .5rem 2rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: ${({theme}) => theme.primaryColor}
  }
  @media (max-width: 768px){ border: none; }
`
interface Props {
  text: string,
  linkText: string,
  path: string,
}
const AuthRedirect = ({ text, linkText, path }: Props) => {
  return (
    <Wrapper>
      <p>{text} <Link to={path}>{linkText}</Link></p>
    </Wrapper>
  )
}

export default AuthRedirect
