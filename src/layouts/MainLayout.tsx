import styled from 'styled-components'

import { Footer } from '../components/footer'
import { Header } from '../components/header'

const Container = styled.main`
  display: flex;
  height: 100%;
  .content {
    margin-left: calc(16vw);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    /*width: calc(100vw - 20vw);*/
  }
  footer {
    margin-top: 1rem;
  }
  @media screen and (max-width: 1000px) {
    footer {
      display: none;
    }
    .content {
      margin-left: 50px;
      /*margin-left: 0;s*/
      width: calc(100vw - 50px);
    }
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
      <Footer />
    </Container>
  )
}

export default MainLayout
