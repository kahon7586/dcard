import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"
import { BoardInfo } from "../Data/BoardInfo"
import Button from "../CVA/Button"
import { useLayoutEffect, useRef, useState } from "react"
import { useHeightToBottom } from "../Hooks/useHeightToBottom"

interface RightSidebarProps {
  boardInfo: BoardInfo
}

const RightSidebar = ({ boardInfo }: RightSidebarProps) => {
  const { name, Icon, postPerDay, info, tags } = boardInfo

  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const [isTagsOpen, setIsTagsOpen] = useState(false)

  const menuRef = useRef<HTMLDivElement | null>(null)
  const infoRef = useRef<HTMLDivElement | null>(null)
  const tagsRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    setTimeout(() => {
      const info = infoRef.current
      if (info === null) return
      if (isInfoOpen === true) info.classList.remove("truncate")
      if (isInfoOpen === false) info.classList.add("truncate")
    }, 500)
  }, [isInfoOpen])

  useHeightToBottom(menuRef)

  function handleClickInfo() {
    setIsInfoOpen((prev) => !prev)
  }
  function handleClickTags() {
    setIsTagsOpen((prev) => !prev)
  }

  return (
    <aside
      className="hidden lg:flex flex-col bg-white px-2 py-4 gap-2 rounded-md m-4 mb-0 overflow-y-auto"
      ref={menuRef}>
      <div className="flex text-[1.3rem] items-center gap-2">
        <Icon className="shrink-0" />
        <a href="/mood">{name}</a>
      </div>

      <div className="text-dcard-text-2 text-[0.9rem]">There are {postPerDay} posts every day.</div>

      <div className="flex items-start justify-center">
        <div
          className={`text-dcard-text-2 text-[0.9rem] transition-all duration-500 ease-in-out max-w-[15rem] overflow-hidden ${
            isInfoOpen ? "max-h-[250px]" : "max-h-[1.5rem]"
          }`}
          ref={infoRef}>
          {info}
        </div>
        <Button
          className="w-4 mt-1"
          size="icon"
          variant="ghost"
          onClick={handleClickInfo}>
          {isInfoOpen ? <IoIosArrowUp fill="text-dcard-text" /> : <IoIosArrowDown fill="text-dcard-text" />}
        </Button>
      </div>

      <div className="flex items-start justify-center">
        <div
          className={`flex flex-wrap gap-x-3 gap-y-2 text-dcard-text-2 text-[0.9rem] transition-all duration-500 ease-in-out max-w-[15rem] overflow-hidden ${
            isTagsOpen ? "max-h-[250px]" : "max-h-[2rem]"
          }`}
          ref={tagsRef}>
          {tags.map((tag) => (
            <Button
              className="text-sm rounded-full bg-dcard-btn-bg-gray text-black"
              variant="ghost"
              key={tag}>
              {tag}
            </Button>
          ))}
        </div>
        <Button
          className="w-4 mt-1"
          size="icon"
          variant="ghost"
          onClick={handleClickTags}>
          {isTagsOpen ? <IoIosArrowUp fill="text-dcard-text" /> : <IoIosArrowDown fill="text-dcard-text" />}
        </Button>
      </div>

      <div className="w-full py-2">
        <Button className="text-lg w-full">New Post</Button>
      </div>
    </aside>
  )
}

export default RightSidebar
