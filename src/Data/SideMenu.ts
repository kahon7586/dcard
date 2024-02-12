import { IconType } from "react-icons"
import SideMenuItem from "../Components/SideMenu/SideMenuItem"
import { IoIosListBox } from "react-icons/io"
import { FaFireAlt } from "react-icons/fa"
import { BsShopWindow } from "react-icons/bs"
import { IoGameController } from "react-icons/io5"
import { FaTrophy } from "react-icons/fa"
import { IoPeopleCircle } from "react-icons/io5"

interface SideMenuItem {
  content: string
  icon: IconType
  path: string
}

export const generalShortCuts: SideMenuItem[] = [
  { content: "All", icon: IoIosListBox, path: "/all" },
  { content: "Popular", icon: FaFireAlt, path: "/popular" },
  { content: "Goods", icon: BsShopWindow, path: "/goods" },
  { content: "Games", icon: IoGameController, path: "/games" },
  { content: "Leaderboard", icon: FaTrophy, path: "/leaderboard" },
  { content: "ACG-Zone", icon: IoPeopleCircle, path: "/acg-zone" },
]
