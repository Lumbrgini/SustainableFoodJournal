import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <section id="center">
        <div className="hero">Sustainable Data Journal</div>
        <button onClick={()=>setCount(count+1)}>{count}</button>
        <button onClick={()=>setCount(0)}>Set count to zero</button>
      </section>
    </>
  )
}

export default App
