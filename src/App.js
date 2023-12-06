import "./App.css"
import { BrowserRouter as Route, Routes } from "react-router-dom"
import Home from "./components/Home"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}></Route>
      </Routes>
    </>
  )
}

export default App
