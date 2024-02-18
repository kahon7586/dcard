import { IconType } from "react-icons"
import SideMenuItem from "../Components/SideMenu/SideMenuItem"
import { IoIosListBox } from "react-icons/io"
import { FaFireAlt } from "react-icons/fa"
import { BsShopWindow } from "react-icons/bs"
import { IoGameController } from "react-icons/io5"
import { FaTrophy } from "react-icons/fa"
import { IoPeopleCircle } from "react-icons/io5"
import { BsFillChatHeartFill } from "react-icons/bs"
import { IoMdChatbubbles } from "react-icons/io"
import { BsCupHot } from "react-icons/bs"
import { MdFace3 } from "react-icons/md"
import { FaAirFreshener } from "react-icons/fa"
import { PiRainbowCloudBold } from "react-icons/pi"
import { MdWork } from "react-icons/md"
import { PiShootingStarBold } from "react-icons/pi"
import { IoIosMore } from "react-icons/io"
import { PiStudentFill } from "react-icons/pi"
import { GiLargeDress } from "react-icons/gi"
import { GiBigDiamondRing } from "react-icons/gi"
import { FaBook } from "react-icons/fa"
import { FaRegLaughSquint } from "react-icons/fa"
import { PiGenderIntersexBold } from "react-icons/pi"

interface LeftSideMenuItem {
  content: string
  Icon: IconType
  path: string
}

export const generalShortCuts: LeftSideMenuItem[] = [
  { content: "All", Icon: IoIosListBox, path: "/all" },
  { content: "Popular", Icon: FaFireAlt, path: "/popular" },
  { content: "Goods", Icon: BsShopWindow, path: "/goods" },
  { content: "Games", Icon: IoGameController, path: "/games" },
  { content: "Leaderboard", Icon: FaTrophy, path: "/leaderboard" },
  { content: "ACG-Zone", Icon: IoPeopleCircle, path: "/acg-zone" },
]

export const trendingCategory: LeftSideMenuItem[] = [
  { content: "Relationship", Icon: BsFillChatHeartFill, path: "/relationship" },
  { content: "Talk", Icon: IoMdChatbubbles, path: "/talk" },
  { content: "Mood", Icon: BsCupHot, path: "/mood" },
  { content: "Girl", Icon: MdFace3, path: "/girl" },
  { content: "Makeup", Icon: FaAirFreshener, path: "/makeup" },
  { content: "Rainbow", Icon: PiRainbowCloudBold, path: "/rainbow" },
  { content: "Job", Icon: MdWork, path: "/job" },
  { content: "Entertainer", Icon: PiShootingStarBold, path: "/entertainer" },
  { content: "More...", Icon: IoIosMore, path: "/popular" },
]

export const selectedCaregory: LeftSideMenuItem[] = [
  { content: "Freshman", Icon: PiStudentFill, path: "/freshman" },
  { content: "Makeup", Icon: FaAirFreshener, path: "/makeup" },
  { content: "Dressup", Icon: GiLargeDress, path: "/dressup" },
  { content: "Marriage", Icon: GiBigDiamondRing, path: "/marriage" },
  { content: "Light Novel", Icon: FaBook, path: "/light_novel" },
  { content: "Meme", Icon: FaRegLaughSquint, path: "/meme" },
  { content: "Sex", Icon: PiGenderIntersexBold, path: "/sex" },
]
