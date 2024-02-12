import React from "react"
import Button from "../CVA/Button"
import SideMenuSection from "../Components/SideMenu/SideMenuSection"
import SideMenuItem from "../Components/SideMenu/SideMenuItem"
import { generalShortCuts } from "../Data/SideMenu"

const LeftSideMenu = () => {
  return (
    <aside>
      <SideMenuSection>
        {generalShortCuts.map((link) => (
          <SideMenuItem />
        ))}
      </SideMenuSection>
    </aside>
  )
}

export default LeftSideMenu
