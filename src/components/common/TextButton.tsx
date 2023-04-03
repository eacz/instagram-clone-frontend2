import styled from 'styled-components'

interface Props {
  fontSize?: number
  changeColorOnHover?: boolean
}

const TextButton = styled.button<Props>`
  color: ${(p) => (p.disabled ? p.theme.disabledFontColor : p.theme.primaryColor)};
  background-color: transparent;
  cursor: ${(p) => (p.disabled ? 'default' : 'pointer')};
  border: none;
  font-weight: 700;
  font-size: ${(p) => (p.fontSize ? p.fontSize : 13)}px;
  transition: all 0.5s ease;
  &:hover {
    color: ${(p) => (p.changeColorOnHover ? p.theme.fontColor : p.theme.primaryColor)};
    transition: all 0.5s ease;
  }
`

export default TextButton
