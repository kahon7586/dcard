import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import Test from "./Test.tsx"

const STRICT_MODE = true

if (STRICT_MODE) {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      {/* <App /> */}
      <Test />
    </React.StrictMode>
  )
} else {
  ReactDOM.createRoot(document.getElementById("root")!).render(<App />)
}
