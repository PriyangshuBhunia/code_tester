
import { useEffect, useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import "prismjs/components/prism-javascript";
import "./App.css";
import axios from "axios";3
import Markdown from "react-markdown";
import rehypeHighLight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"

function App() {
  const [code, setCode] = useState(``);

  const [review, setReview] = useState(``);

  useEffect(()=>{
    prism.highlightAll()
  })

  async function reviewCode() {
     const response = await axios.post('http://localhost:3000/ai/get-review',{code})
     
     setReview(response.data)
     
  }

  return (
    <>
    <main>
      <div className="laft">
        <div className="code" style={{position: "relative"}}>
          {code.trim() === "" && (
            <div style={{
              position: "absolute",
              top: 10,
              left: 10,
              color: "#999",
              fontFamily: "Fira Code, monospace",
              fontSize: 16,
              pointerEvents: "none",
              userSelect: "none",
              whiteSpace: "pre-wrap"
            }}>
              Enter your Code...
            </div>
          )}
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding={10}
            style={{
              fontFamily: "Fira Code, monospace",
              fontSize: 16,
              border: "1px solid #ddd",
              borderRadius: "5px",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <div 
        onClick={reviewCode}
        className={`review ${code.trim() === "" ? "red" : "green"}`}>review</div>
      </div>
      <div className="right">
        <Markdown
        rehypePlugins={[rehypeHighLight]}
        >{review}</Markdown>
      </div>
    </main>
    </>
  );
}

export default App;

