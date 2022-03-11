import styled from "styled-components"

interface Props {
  primary?: boolean
}

const Button = styled.button<Props>`
  background-color: ${({theme}) => theme.primaryColor};
  color: #ffffff;
  padding: .5rem 1rem ;
  border-radius: 5px;
  border: none;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background-color: #b2dffc;
    cursor: default;
  }
`

export default Button