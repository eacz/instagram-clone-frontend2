import styled, { useTheme } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { ProfilePicture } from '../posts'

const Container = styled.li<StyleProps>`
  width: 100%;
  display: flex;
  align-items: center;
  list-style: none;
  gap: 1rem;
  margin: 0;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    margin-bottom: 1rem;
  }
  .item-menu {
    font-weight: ${(p) => (p.active ? '700' : '400')};
    @media screen and (max-width: 1000px) {
      display: none;
      margin-bottom: 1rem;
    }
  }
`
interface StyleProps {
  active?: boolean
}

interface Props {
  iconActive: IconDefinition
  iconInactive: IconDefinition
  text: string
  active?: boolean
  isProfile?: boolean
}

const MenuItem = ({ iconActive, iconInactive, active, text, isProfile = false }: Props) => {
  const color = useTheme().type === 'dark' ? 'white' : 'black'
  return (
    <Container active={active}>
      {isProfile ? (
        <>
          <ProfilePicture width={24} height={24} />
          <p className='item-menu'>{text}</p>
        </>
      ) : (
        <>
          {active ? (
            <FontAwesomeIcon height={24} width={24} size='lg' color={color} icon={iconActive} />
          ) : (
            <FontAwesomeIcon height={24} width={24} size='lg' color={color} icon={iconInactive} />
          )}
          <p className='item-menu'>{text}</p>
        </>
      )}
    </Container>
  )
}

export default MenuItem
