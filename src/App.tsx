import Header from "./Layouts/Header"
import "./App.css"
import LeftSideMenu from "./Layouts/LeftSideMenu"
import RightSidebar from "./Layouts/RightSidebar"
import { MoodBoardInfo } from "./Data/MoodBoardInfo"
import Postboard from "./Layouts/Postboard"

const App = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-start mx-auto">
        <LeftSideMenu />
        <Postboard />
        <RightSidebar boardInfo={MoodBoardInfo} />
      </div>
    </>
  )
}

export default App
