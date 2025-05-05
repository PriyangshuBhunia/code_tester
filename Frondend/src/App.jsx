import { useEffect, useState } from 'react'
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs"
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [code, setCode] = useState(`function sum() {return 1 + 1}`);

  useEffect(()=>{
    prism.highlightAll();
  },[]);
  return (
    <>
    <main>
      <div className="laft">
        <div className="code">
          <Editor>
            value{code}
            onValueChange = {code => setCode(code)}
            highlight ={code => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding ={10}
            style={{
              fontFamily :"fira code ,",
              fontSize : 16,
              border : "1px solid #ddd",
              borderRedius: "5px",
              height: "100%",
              width: "100%"
            }}
          </Editor>
        </div>
        <div className="review">review</div>
      </div>
      <div className="right"></div>
    </main>
    </>
  )
}

export default App
