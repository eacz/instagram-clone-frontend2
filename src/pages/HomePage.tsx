import { useEffect } from 'react'
import { Post, PostsContainer } from '../components/posts'
import { useAppSelector, useAppDispatch } from '../hooks'
import { MainLayout } from '../layouts'
import { getFeed } from '../store/post/actions'

const HomePage = () => {
  const { feedPosts } = useAppSelector((s) => s.posts)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getFeed())

    return () => {}
  }, [dispatch])

  return (
    <MainLayout>
      <PostsContainer>
        {feedPosts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </PostsContainer>
    </MainLayout>
  )
}

export default HomePage
