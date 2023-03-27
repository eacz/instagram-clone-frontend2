import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import {
  faHeart as HeartRegular,
  faCommentDots as CommentRegular,
  faCompass as CompassRegular,
} from '@fortawesome/free-regular-svg-icons'
import {
  faHeart as HeartSolid,
  faCommentDots as CommentSolid,
  faHouse as Home,
  faCompass as CompassSolid,
  faMagnifyingGlass,
  faFilm,
  faPlus
} from '@fortawesome/free-solid-svg-icons'

import { MenuItem } from '.'

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 !important;
  padding: 0;
  @media screen and (max-width: 1000px) {
    gap: .5rem;
  }
`

const Menu = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <MenuItem active text={t('navbar.home')} iconInactive={Home} iconActive={Home} />
      <MenuItem text={t('navbar.search')} iconInactive={faMagnifyingGlass} iconActive={faMagnifyingGlass} />
      <MenuItem text={t('navbar.explore')} iconInactive={CompassRegular} iconActive={CompassSolid} />
      <MenuItem text={t('navbar.reels')} iconInactive={faFilm} iconActive={faFilm} />
      <MenuItem text={t('navbar.messages')} iconInactive={CommentRegular} iconActive={CommentSolid} />
      <MenuItem text={t('navbar.notifications')} iconInactive={HeartRegular} iconActive={HeartSolid} />
      <MenuItem text={t('navbar.create')} iconInactive={faPlus} iconActive={faPlus} />
      <MenuItem text={t('navbar.profile')} iconInactive={HeartRegular} iconActive={HeartSolid} isProfile />
    </Container>
  )
}

export default Menu
