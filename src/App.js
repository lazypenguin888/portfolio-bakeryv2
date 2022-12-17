import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import './App.css'
import BakeryV2 from './components/BakeryV2/BakeryV2'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <BakeryV2/>
    </div>
  )
}

export default App