import SideMenuSection from "../Components/SideMenu/SideMenuSection"
import SideMenuItem from "../Components/SideMenu/SideMenuItem"
import { generalShortCuts, trendingCategory, selectedCaregory } from "../Data/SideMenu"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import Button from "../CVA/Button"
import { IoIosArrowForward } from "react-icons/io"
import { setHeightToBottom } from "../Lib/setHeightToBottom"
import { useReachBottom } from "../Hooks/useReachBottom"

const LeftSideMenu = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const scrollMenuRef = useRef<HTMLDivElement | null>(null)

  useReachBottom(scrollMenuRef, () => {
    if (window.innerWidth >= 1024) {
      setIsSideMenuOpen(false)
    }
  })

  useLayoutEffect(() => {
    setHeightToBottom(scrollMenuRef)
  }, [isSideMenuOpen])

  function clickSideMenuBtn() {
    setIsSideMenuOpen((prev) => !prev)
  }

  return (
    <>
      <div className={`${isSideMenuOpen ? "hidden" : "block"} lg:hidden absolute left-[-12px] top-[50%]`}>
        <Button
          className="rounded-full hover:bg-dcard-hover"
          variant="ghost"
          size="icon"
          onClick={clickSideMenuBtn}>
          <IoIosArrowForward />
        </Button>
      </div>

      <div
        className={`${
          isSideMenuOpen ? "block" : "hidden"
        } lg:hidden absolute top-0 bg-black bg-opacity-80 w-full h-full`}
        onClick={() => setIsSideMenuOpen(false)}></div>

      <aside
        className={`bg-dcard-bg absolute top-0 left-0 ${
          isSideMenuOpen ? "block" : "hidden"
        } lg:pt-4 lg:block lg:static`}>
        <SideMenuSection>
          {generalShortCuts.map((item) => (
            <SideMenuItem
              content={item.content}
              Icon={item.Icon}
              path={item.path}
              key={item.path}
            />
          ))}
        </SideMenuSection>
        <div
          className="overflow-y-auto overflow-x-hidden"
          ref={scrollMenuRef}>
          <SideMenuSection title="Trending">
            {trendingCategory.map((item) => (
              <SideMenuItem
                content={item.content}
                Icon={item.Icon}
                path={item.path}
                key={item.path}
              />
            ))}
          </SideMenuSection>
          <SideMenuSection title="Just For You">
            {selectedCaregory.map((item) => (
              <SideMenuItem
                content={item.content}
                Icon={item.Icon}
                path={item.path}
                key={item.path}
              />
            ))}
          </SideMenuSection>
        </div>
      </aside>
    </>
  )
}

export default LeftSideMenu
