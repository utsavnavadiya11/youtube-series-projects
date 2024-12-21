import { useState } from 'react'
import './App.css'

function App() {

  
  const Colors = [
    {title: 'Red', value: 'bg-red-400'},
    {title: 'Blue', value: 'bg-blue-400'},
    {title: 'Green', value: 'bg-green-400'},
    {title: 'Yellow', value: 'bg-yellow-400'}
  ]
  
  let [color, setColor] = useState(Colors[0]?.value || 'bg-purple-400')

  return (
    <>
      <div className={`w-full h-screen duration-200 ${color}`}></div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='fiex flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          {Colors.map((currentColor, index) => {
    return (
      <button key={index} onClick={() => setColor(currentColor.value)
      } className={`outline-1 px-4 py-1 rounded-full ${currentColor.value} text-white shadow-lg`} >{currentColor.title}</button>
    )})}
        </div>
      </div>
    </>
  )
}

export default App
