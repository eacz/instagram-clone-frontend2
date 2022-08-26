import { Suspense, useEffect } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AppRouter } from './routers'
import { useAppSelector, useAppDispatch } from './hooks/index'
import { LoadingPage } from './pages'
import { checkToken } from './store/auth/slice'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${({ theme }) => theme.background};
  }
  h1,h2,h3,h4,h5,h6, p, a, time {
    color: ${({ theme }) => theme.fontColor};
    font-family: 'Roboto'
  }
  p, a {
    font-size: ${({ theme }) => theme.globalParagraphSize};
  }

  .pointer {
    cursor: pointer;
  }
`

const App = () => {
  const { currentTheme } = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()
  const checking = useAppSelector((state) => state.auth.checking)

  //check if there is a token and if its valid for the current session
  useEffect(() => {
    dispatch(checkToken())
  }, [dispatch])

  if (checking) return <LoadingPage />
  return (
    <Suspense fallback={<LoadingPage />}>
      <ThemeProvider theme={currentTheme}>
        <AppRouter />
        <GlobalStyle />
      </ThemeProvider>
    </Suspense>
  )
}

export default App
