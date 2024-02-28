import { BoardInfo } from "../Data/BoardInfo"
import Button from "../CVA/Button"
import { useLayoutEffect, useRef, useState } from "react"
import { useHeightToBottom } from "../Hooks/useHeightToBottom"
import Collapse from "../Components/Collapse"

interface RightSidebarProps {
  boardInfo: BoardInfo
}

const RightSidebar = ({ boardInfo }: RightSidebarProps) => {
  const { name, Icon, postPerDay, info, tags } = boardInfo

  const menuRef = useRef<HTMLDivElement | null>(null)

  useHeightToBottom(menuRef)

  return (
    <aside
      className="hidden lg:flex flex-col bg-white max-w-[300px] px-2 py-4 gap-2 rounded-md m-4 mb-0 overflow-y-auto"
      ref={menuRef}>
      <div className="flex text-[1.3rem] items-center gap-2">
        <Icon className="shrink-0" />
        <a href="/mood">{name}</a>
      </div>

      <div className="text-dcard-text-2 text-[0.9rem]">There are {postPerDay} posts every day.</div>

      <Collapse
        className="text-dcard-text-2 text-[0.9rem]"
        duration={500}>
        {info}
      </Collapse>

      <Collapse
        className="text-dcard-text-2 text-[0.9rem] flex flex-wrap gap-x-3 gap-y-2"
        closeHeight="2rem"
        duration={500}>
        {tags.map((tag) => (
          <Button
            className="text-sm rounded-full bg-dcard-btn-bg-gray text-black"
            variant="ghost"
            key={tag}>
            {tag}
          </Button>
        ))}
      </Collapse>

      <div className="w-full py-2">
        <Button className="text-lg w-full">New Post</Button>
      </div>
    </aside>
  )
}

export default RightSidebar
