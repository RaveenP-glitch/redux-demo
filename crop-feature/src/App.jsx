import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageCrop from './components/ImageCrop';
import ImageCropProvider from './providers/ImageCropProvider';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <ImageCropProvider>
        <ImageCrop />
      </ImageCropProvider>
    </div>
  )
}

export default App
