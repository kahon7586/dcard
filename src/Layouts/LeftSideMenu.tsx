import SideMenuSection from "../Components/SideMenu/SideMenuSection"
import SideMenuItem from "../Components/SideMenu/SideMenuItem"
import { generalShortCuts, trendingCategory, selectedCaregory } from "../Data/SideMenu"
import { useEffect, useRef, useState } from "react"

const LeftSideMenu = () => {
  const scrollMenuRef = useRef<HTMLDivElement | null>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const menu = scrollMenuRef.current
    if (menu === null) return
    const rect = menu.getBoundingClientRect()
    setHeight(window.innerHeight - rect.top - 1)

    function handler() {
      console.log("detect resize, innerHeight: ", innerHeight)
      setHeight(window.innerHeight - rect.top - 1)
    }

    window.addEventListener("resize", handler)

    return () => {
      window.removeEventListener("resize", handler)
    }
  }, [])

  return (
    <aside className="pt-6">
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
        ref={scrollMenuRef}
        style={{ height: height }}>
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
  )
}

export default LeftSideMenu
