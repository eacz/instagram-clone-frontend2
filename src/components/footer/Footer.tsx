import styled from 'styled-components'

import { ProfileResumeHome } from '../profile'
import { Suggestions, FooterLinks } from '.'
import { useAppSelector } from '../../hooks'

const Container = styled.footer`
  border: 1px solid ${(p) => p.theme.backgroundContrast};
  background-color: ${(p) => p.theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
const Footer = () => {
  const user = useAppSelector((state) => state.auth.user)

  return (
    <Container>
      <ProfileResumeHome isUser photo={user?.profilePicture!} name={user?.name!} username={user?.username!} />
      <Suggestions />
      <FooterLinks />
    </Container>
  )
}

export default Footer
