import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageCrop from './components/ImageCrop';
import ImageCropProvider from './providers/ImageCropProvider';
import ClickIncrease from './components/fontsizechanger/ClickIncrease';
import HoverIncrease from './components/fontsizechanger/HoverIncrease';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ClickIncrease />
      <HoverIncrease />
    </div>
  )
}

export default App
