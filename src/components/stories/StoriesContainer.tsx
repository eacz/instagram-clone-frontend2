import styled from 'styled-components'
import { Story } from '.'
import { StoryType } from '../../interfaces'

const Container = styled.div`
  max-height: 120px;
  height: 100%;
  max-width: 630px;
  width: 100%;
  display: flex;
  border: 1px solid ${({ theme }) => theme.backgroundContrast};
  margin: 16px 0 0;
  padding: 16px 0;
  overflow: scroll;
`

const StoriesContainer = () => {
  const stories: { id: number; storyType: StoryType }[] = [
    { id: 1, storyType: 'new-story' },
    { id: 2, storyType: 'unwatched' },
    { id: 3, storyType: 'unwatched' },
    { id: 4, storyType: 'unwatched' },
    { id: 5, storyType: 'unwatched' },
    { id: 6, storyType: 'unwatched' },
    { id: 7, storyType: 'watched' },
    { id: 8, storyType: 'watched' },
  ]

  return (
    <Container>
      {stories.map((storie) => (
        <Story key={storie.id} storyType={storie.storyType} />
      ))}
    </Container>
  )
}

export default StoriesContainer
