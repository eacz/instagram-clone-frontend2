import styled from 'styled-components'

import { ProfileResumeHome } from '../profile'
import { Suggestions, FooterLinks } from '.'


const Container = styled.footer`
  border: 1px solid ${(p) => p.theme.backgroundContrast};
  background-color: ${(p) => p.theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

`
const Footer = () => {
  return (
    <Container>
      <ProfileResumeHome isUser name='Esteban Canteros' username='eacz' />
      <Suggestions />
      <FooterLinks />
    </Container>
  )
}

export default Footer
