import { useState } from 'react'
import './App.css'
import Movies from './Components/Movies'

function App() {
  const [inputVal, setInputVal] = useState("")

  const inputval = (e)=>{
    setInputVal(e.target.value)
  }

  return (
    <>
      <div className="search">
    <input type="text" name="input" id="" placeholder="Enter movie name" onChange={inputval} />
    <button >submit</button>
   </div>
   <Movies query = {inputVal} />
    </>
  )
}

export default App
