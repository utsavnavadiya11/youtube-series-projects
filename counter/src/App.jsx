import './App.css'
import {useState} from 'react'

function App() {

  // let counter = 15
  let [counter, setCounter] = useState(0)

  function incrementCounter() {
    setCounter((counter) => counter += 1)
    console.log(counter)
  }
  
  function decrementCounter() {
    setCounter((counter) => counter -= 1)
    console.log(counter)
  }

  return (
    <div>
      <h1>
        This is Utsav
      </h1>
      <h2>Counter : {counter}</h2>
      <button onClick={incrementCounter}>Increment Counter</button>
      <br />
      <button onClick={decrementCounter}>Decrement Counter</button>
      <br /><br />
      <h1>Footer : Counter : {counter}</h1>
    </div>
  )
}

export default App
