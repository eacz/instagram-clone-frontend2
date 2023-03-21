import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react'

const Wrapper = styled.div`
  position: relative;

  .arrow {
    position: absolute;
    cursor: pointer;
  }
  .left-arrow {
    left: 0;
    top: 30%;
  }
  .right-arrow {
    right: 0;
    top: 30%;
  }
`

const Container = styled.div`
  max-height: 120px;
  height: 100%;
  max-width: 630px;
  width: 100%;
  display: flex;
  border: 1px solid ${({ theme }) => theme.backgroundContrast};
  margin: 16px 0 0;
  padding: 16px 0;
  overflow: hidden;
  animation: all 0.3s ease;
  scroll-behavior: smooth;
`
interface Props {
  children?: JSX.Element | JSX.Element[]
}

const StoriesContainer = ({ children }: Props) => {
  const [currentScroll, setCurrentScroll] = useState(0)
  const containerRef = useRef<null | HTMLDivElement>(null)

  const handleScroll = (to: 'right' | 'left') => {
    if (to === 'right') {
      containerRef.current?.scroll(currentScroll + 200, 0)
      setCurrentScroll((currentScroll) => currentScroll + 200)
    } else {
      containerRef.current?.scroll(currentScroll - 200, 0)
      setCurrentScroll((currentScroll) => currentScroll - 200)
    }
  }

  return (
    <Wrapper>
      <Container ref={containerRef}>{children}</Container>
      <div className=' left-arrow arrow' onClick={() => handleScroll('left')}>
        <FontAwesomeIcon color='#ffffff' size='lg' icon={faCircleChevronLeft} />
      </div>
      <div className=' right-arrow arrow' onClick={() => handleScroll('right')}>
        <FontAwesomeIcon color='#ffffff' size='lg' icon={faCircleChevronRight} />
      </div>
    </Wrapper>
  )
}

export default StoriesContainer
