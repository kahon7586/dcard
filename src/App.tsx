import Header from "./Layouts/Header"
import "./App.css"
import MyContextProvider from "./Context/MyContextProvider"
import LeftSideMenu from "./Layouts/LeftSideMenu"
import Postboard from "./Layouts/Postboard"
import RightSidebar from "./Layouts/RightSidebar"
import { MoodBoardInfo } from "./Data/MoodBoardInfo"

const App = () => {
  return (
    <MyContextProvider>
      <Header />
      <div className="flex justify-center items-start mx-auto">
        <LeftSideMenu />
        <Postboard />
        <RightSidebar boardInfo={MoodBoardInfo} />
      </div>
    </MyContextProvider>
  )
}

export default App
