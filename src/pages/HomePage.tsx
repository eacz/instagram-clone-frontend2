import { setDarkTheme, setLightTheme } from '../store/theme/slice';
import { useAppDispatch } from '../hooks/index';

const HomePage = () => {  
  const dispatch = useAppDispatch()
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => dispatch(setLightTheme())}>Light</button>
      <button onClick={() => dispatch(setDarkTheme())}>Dark</button>
    </div>
  )
}

export default HomePage
