import { setDarkTheme, setLightTheme } from '../store/theme/slice';
import { useAppDispatch } from '../hooks/index';
import { useTranslation } from 'react-i18next';

const HomePage = () => {  
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  return (
    <div>
      <h1>{t('home')}</h1>
      <button onClick={() => dispatch(setLightTheme())}>Light</button>
      <button onClick={() => dispatch(setDarkTheme())}>Dark</button>
    </div>
  )
}

export default HomePage
