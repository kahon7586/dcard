import Header from "./Layouts/Header"
import "./App.css"
import MyContextProvider from "./Context/MyContextProvider"

const App = () => {
  return (
    <MyContextProvider>
      <Header />
    </MyContextProvider>
  )
}

export default App
