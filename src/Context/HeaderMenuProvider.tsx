import { ReactNode, useEffect, useState } from "react"
import { HeaderMenuContext, HeaderMenuContextValue } from "./useHeaderMenu"

interface HeaderMenuProviderProps {
  children: ReactNode
}

const HeaderMenuProvider = ({ children }: HeaderMenuProviderProps) => {
  const [isToggled, setIsToogled] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768)

  function toggle() {
    setIsToogled((prev) => !prev)
  }

  function close() {
    setIsToogled(false)
  }

  const contextValue: HeaderMenuContextValue = {
    isToggled,
    toggle,
    close,
  }

  return <HeaderMenuContext.Provider value={contextValue}>{children}</HeaderMenuContext.Provider>
}

export default HeaderMenuProvider
