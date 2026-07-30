import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Standalone React App</h1>
      <p>Ready for GitHub export</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>
    </div>
  )
}