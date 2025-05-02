import { useState } from 'react'
import "prismjs/themes/prism-tomorrow.css";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <div className="laft">
        <div className="code"></div>
        <div className="review">review</div>
      </div>
      <div className="right"></div>
    </main>
    </>
  )
}

export default App
