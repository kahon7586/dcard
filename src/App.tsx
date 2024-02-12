import Header from "./Layouts/Header"
import "./App.css"
import MyContextProvider from "./Context/MyContextProvider"
import LeftSideMenu from "./Layouts/LeftSideMenu"
import PostBoard from "./Layouts/PostBoard"
import RightSidebar from "./Layouts/RightSidebar"

const App = () => {
  return (
    <MyContextProvider>
      <Header />
      <div className="flex justify-center items-start mx-auto">
        <LeftSideMenu />
        <PostBoard />
        <RightSidebar />
      </div>
    </MyContextProvider>
  )
}

export default App
