import styled, { useTheme } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'

const Container = styled.li`
  list-style: none;
  svg {
    cursor: pointer;
  }
`

interface Props {
  iconActive: IconDefinition
  iconInactive: IconDefinition
  active?: boolean
}

const MenuItem = ({ iconActive, iconInactive, active }: Props) => {
  const color = useTheme().type === 'dark' ? 'white' : 'black'
  
  return (
    <Container>
      {active ? (
        <FontAwesomeIcon size='lg' color={color} icon={iconActive} />
      ) : (
        <FontAwesomeIcon size='lg' color={color} icon={iconInactive} />
      )}
    </Container>
  )
}

export default MenuItem
