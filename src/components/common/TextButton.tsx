import styled from 'styled-components'

const TextButton = styled.button`
  color: ${({theme}) => theme.primaryColor};
  background-color: transparent;
  cursor: pointer;
  border: none;
  font-weight: 700;

`

export default TextButton
