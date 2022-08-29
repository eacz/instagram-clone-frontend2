import styled from 'styled-components'

const TextButton = styled.button`
  color: ${(p) =>
    p.disabled ? p.theme.disabledFontColor : p.theme.primaryColor};
  background-color: transparent;
  cursor: ${(p) => (p.disabled ? 'default' : 'pointer')};
  border: none;
  font-weight: 700;
`

export default TextButton
