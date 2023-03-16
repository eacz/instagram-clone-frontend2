import styled from 'styled-components'
import { MenuItem } from '.'
import {
  faHeart as HeartRegular,
  faCommentDots as CommentRegular,
  faSquarePlus as SquareRegular,
  faCompass as CompassRegular,
} from '@fortawesome/free-regular-svg-icons'
import {
  faHeart as HeartSolid,
  faCommentDots as CommentSolid,
  faHouse as Home,
  faSquarePlus as SquareSolid,
  faCompass as CompassSolid,
} from '@fortawesome/free-solid-svg-icons'
import { ProfilePicture } from '../posts'

const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Menu = () => {
  return (
    <Container>
      <MenuItem iconInactive={Home} iconActive={Home} />
      <MenuItem iconInactive={CommentRegular} iconActive={CommentSolid} />
      <MenuItem iconInactive={SquareRegular} iconActive={SquareSolid} />
      <MenuItem iconInactive={CompassRegular} iconActive={CompassSolid} />
      <MenuItem iconInactive={HeartRegular} iconActive={HeartSolid} />
      <ProfilePicture height={20} width={20} />
    </Container>
  )
}

export default Menu
