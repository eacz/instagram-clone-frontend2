import { useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
  position: relative;
  max-height: 120px;
  height: 100%;
  /*max-width: 630px;*/
  max-width: calc(100vw - 45vw);
  width: 100%;
  margin-bottom: 3rem;
  .arrow {
    position: absolute;
    cursor: pointer;
  }
  .left-arrow {
    left: 0;
    top: 50%;
  }
  .right-arrow {
    right: 0;
    top: 50%;
  }

  @media screen and (max-width: ${(p) => p.theme.breakpointMobile}px) {
    max-width: calc(100vw - 23vw);
  }
`

const Container = styled.div`
  display: flex;
  /*border: 1px solid ${({ theme }) => theme.backgroundContrast};*/
  margin: 16px 0 0;
  padding: 16px 0;
  overflow: hidden;
  animation: all 0.3s ease;
  scroll-behavior: smooth;
`
interface Props {
  children?: JSX.Element | JSX.Element[]
  elements: number
}

const StoriesContainer = ({ children, elements }: Props) => {
  const [currentScroll, setCurrentScroll] = useState(0)
  const containerRef = useRef<null | HTMLDivElement>(null)
  const maximumScrollValue = useMemo(() => elements * 50, [elements])

  const handleScroll = (to: 'right' | 'left') => {
    if (to === 'right') {
      const toScroll = currentScroll + 200 > maximumScrollValue ? maximumScrollValue : currentScroll + 200
      containerRef.current?.scroll(toScroll, 0)
      setCurrentScroll(toScroll)
    } else {
      const toScroll = currentScroll - 200 < 0 ? 0 : currentScroll - 200
      containerRef.current?.scroll(toScroll, 0)
      setCurrentScroll(toScroll)
    }
  }

  return (
    <Wrapper>
      <Container ref={containerRef}>{children}</Container>
      {currentScroll !== 0 && (
        <div className=' left-arrow arrow' onClick={() => handleScroll('left')}>
          <FontAwesomeIcon color='#ffffff' size='lg' icon={faCircleChevronLeft} />
        </div>
      )}
      {currentScroll !== maximumScrollValue && (
        <div className=' right-arrow arrow' onClick={() => handleScroll('right')}>
          <FontAwesomeIcon color='#ffffff' size='lg' icon={faCircleChevronRight} />
        </div>
      )}
    </Wrapper>
  )
}

export default StoriesContainer
