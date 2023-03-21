import { Header } from '../components/header'

import styled from 'styled-components'
const Container = styled.main`
  display: flex;
  height: 100%;
  .content {
    margin-left: calc(100vw - 80vw);
  }
`

interface Props {
  children: JSX.Element | JSX.Element[]
}
const MainLayout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      <div className='content'>{children}</div>
    </Container>
  )
}

export default MainLayout
