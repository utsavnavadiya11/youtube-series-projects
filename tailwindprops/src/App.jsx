import './App.css'
import Card from './components/Card'

function App() {

  return (
    <div>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card image = "https://images.unsplash.com/photo-1719937206158-cad5e6775044?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" titile = "Card 1" description = "This is Sample React Card 1 powered by Tailwind" />
      <Card image = "https://images.unsplash.com/photo-1719937206158-cad5e6775044?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" titile = "Card 2" description = "This is Sample React Card 2 powered by Tailwind" />      
      
    </div>
  )
}

export default App
