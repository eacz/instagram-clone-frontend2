import { useEffect } from 'react'
import styled from 'styled-components'

import { Post, PostsContainer } from '../components/posts'
import { StoriesContainer, Story } from '../components/stories'
import { useAppSelector, useAppDispatch } from '../hooks'
import { StoryType } from '../interfaces'
import { MainLayout } from '../layouts'
import { getFeed } from '../store/post/actions'

const stories: { id: number; storyType: StoryType }[] = [
  { id: 2, storyType: 'unwatched' },
  { id: 3, storyType: 'unwatched' },
  { id: 4, storyType: 'unwatched' },
  { id: 5, storyType: 'unwatched' },
  { id: 6, storyType: 'unwatched' },
  { id: 7, storyType: 'watched' },
  { id: 8, storyType: 'watched' },
  { id: 9, storyType: 'watched' },
  { id: 10, storyType: 'watched' },
  { id: 11, storyType: 'watched' },
  { id: 12, storyType: 'watched' },
  { id: 13, storyType: 'watched' },
  { id: 14, storyType: 'watched' },
  { id: 15, storyType: 'watched' },
  { id: 16, storyType: 'watched' },
  { id: 17, storyType: 'watched' },
  { id: 18, storyType: 'watched' },
]

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HomePage = () => {
  const { feedPosts } = useAppSelector((s) => s.posts)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getFeed())

    return () => {}
  }, [dispatch])

  return (
    <MainLayout>
      <Container>
        <StoriesContainer elements={stories.length}>
          {stories.map((story) => (
            <Story key={story.id} storyType={story.storyType} username={`username ${story.id}`} />
          ))}
        </StoriesContainer>
        <PostsContainer>
          {feedPosts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </PostsContainer>
      </Container>
    </MainLayout>
  )
}

export default HomePage
