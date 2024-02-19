import SideMenuSection from "../Components/SideMenu/SideMenuSection"
import SideMenuItem from "../Components/SideMenu/SideMenuItem"
import { generalShortCuts, trendingCategory, selectedCaregory } from "../Data/SideMenu"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import Button from "../CVA/Button"
import { IoIosArrowForward } from "react-icons/io"

const LeftSideMenu = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const scrollMenuRef = useRef<HTMLDivElement | null>(null)

  function adjustMenuHeight() {
    const menu = scrollMenuRef.current
    if (menu === null) return
    const rect = menu.getBoundingClientRect()
    menu.style.height = `${window.innerHeight - rect.top - 1}px`
  }

  useEffect(() => {
    function handler() {
      adjustMenuHeight()
      if (window.innerWidth >= 768) {
        setIsSideMenuOpen(false)
      }
    }

    window.addEventListener("resize", handler)

    return () => {
      window.removeEventListener("resize", handler)
    }
  }, [])

  useLayoutEffect(() => {
    adjustMenuHeight()
  }, [isSideMenuOpen])

  function clickSideMenuBtn() {
    setIsSideMenuOpen((prev) => !prev)
  }

  return (
    <>
      <div className={`${isSideMenuOpen ? "hidden" : "block"} md:hidden absolute left-[-12px] top-[50%]`}>
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
        } md:hidden absolute top-0 bg-black bg-opacity-80 w-full h-full`}
        onClick={() => setIsSideMenuOpen(false)}></div>

      <aside
        className={`bg-dcard-bg absolute top-0 left-0 ${
          isSideMenuOpen ? "block" : "hidden"
        } md:pt-6 md:block md:static`}>
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
          className="overflow-y-auto"
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
