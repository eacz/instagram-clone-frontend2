import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import { ILink } from '../../interfaces'
import FooterLink from './FooterLink'


const Container = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  padding: 0 20px  0 50px;
`

const FooterLinks = () => {
  const { t } = useTranslation()

  const links: ILink[] = [
    { to: '', text: t('footer.about') },
    { to: '', text: t('footer.help') },
    { to: '', text: t('footer.press') },
    { to: '', text: t('footer.api') },
    { to: '', text: t('footer.jobs') },
    { to: '', text: t('footer.privacy') },
    { to: '', text: t('footer.terms') },
    { to: '', text: t('footer.locations') },
    { to: '', text: t('footer.language') },
    { to: '', text: t('footer.meta') },
  ]

  return (
    <Container>
      {links.map((link) => (
        <FooterLink text={link.text} to={link.text} key={link.text} />
      ))}
      <FooterLink text={t('footer.copy')} to='' isLink={false} />
    </Container>
  )
}

export default FooterLinks
