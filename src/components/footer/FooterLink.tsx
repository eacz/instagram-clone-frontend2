import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ILink } from '../../interfaces'

interface Props extends ILink {
  isLink?: boolean
}

const StyledLink = styled(Link)`
  color: ${(p) => p.theme.fontColor};
  text-decoration: none;
  font-size: 12px;
  cursor: ${p => p.to ? 'pointer' : 'text' };
  :hover {
    color: ${p => p.to ? p.theme.backgroundContrast : p.theme.fontColor};
  }
`
const FooterLink = ({ text, isLink = true, to }: Props) => {
  return <StyledLink to={isLink ? to || '' : ''}>{text}</StyledLink>
}

export default FooterLink
