import Header from "./Layouts/Header"
import "./App.css"
import MyContextProvider from "./Context/MyContextProvider"
import LeftSideMenu from "./Layouts/LeftSideMenu"
import PostBoard from "./Layouts/PostBoard"
import RightSidebar from "./Layouts/RightSidebar"
import { MoodBoardInfo } from "./Data/MoodBoardInfo"

const App = () => {
  return (
    <MyContextProvider>
      <Header />
      <div className="flex justify-center items-start mx-auto">
        <LeftSideMenu />
        <PostBoard />
        <RightSidebar boardInfo={MoodBoardInfo} />
      </div>
    </MyContextProvider>
  )
}

export default App
