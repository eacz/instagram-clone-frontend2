import { Header } from '../components/header'

interface Props {
  children: JSX.Element | JSX.Element[]
}
const MainLayout = ({ children }: Props) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  )
}

export default MainLayout
