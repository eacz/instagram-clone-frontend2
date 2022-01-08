import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { RootState } from './store/index';
import AppRouter from './routers/AppRouter';
import { useAppSelector } from './hooks/index';
import { Suspense } from 'react';
import LoadingPage from './pages/LoadingPage';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${({theme}) => theme.background};
  }
  h1,h2,h3,h4,h5,h6, p {
    color: ${({theme}) => theme.fontColor};
    font-family: 'Roboto'
  }
`

const App = () => {
  const { currentTheme } = useAppSelector((state: RootState) => state.theme)  
  return (
    <Suspense fallback={<LoadingPage />}>
      <ThemeProvider theme={currentTheme}>
        <AppRouter />
        <GlobalStyle />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
