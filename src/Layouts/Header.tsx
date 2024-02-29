import { FaSearch } from "react-icons/fa"
import Dcard_logo from "../Assets/logo.8b5bbef2.svg"
import { IoMdMenu as Hamburger } from "react-icons/io"
import Button from "../CVA/Button"
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc"
import { useEffect, useRef, useState } from "react"
import SmallHeaderMenu from "../Components/HeaderMenu/SmallHeaderMenu"
import { useHeaderMenu } from "../Context/useHeaderMenu"
import React from "react"

const Logo = React.memo(() => {
  return (
    <a
      href="/"
      className="shrink-0">
      <img
        className="w-auto h-8"
        src={Dcard_logo}
      />
    </a>
  )
})

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024)

  const { isToggled, toggle } = useHeaderMenu()
  const headerRef = useRef<HTMLHeadElement>(null)

  useEffect(() => {
    if (headerRef.current === null) return

    function handleResize() {
      if (window.innerWidth < 1024) {
        setIsSmallScreen(true)
      } else {
        setIsSmallScreen(false)
      }
    }

    const headerObserver = new ResizeObserver(handleResize)

    headerObserver.observe(headerRef.current)

    return () => headerObserver.disconnect()
  }, [])

  return (
    <header
      className="bg-dcard "
      ref={headerRef}>
      <div className=" gap-6 mx-auto max-w-[1024px] flex px-16 py-2.5 lg:justify-center justify-around items-center">
        <Logo />

        <div className=" max-w-[500px] flex border border-dcard-border rounded-md flex-grow">
          <input
            className=" flex-grow rounded-l-md bg-dcard-border px-2 placeholder-dcard-text placeholder-opacity-50"
            type="text"
            placeholder="Search..."
          />
          <Button
            size="icon"
            variant="ghost"
            className="rounded-r-md flex-grow-0">
            <FaSearch fill="white" />
          </Button>
        </div>

        <div>
          <div className="relative">
            <Button
              className="lg:hidden flex size-8 hover:bg-dcard-light rounded-md"
              variant="ghost"
              size="icon"
              onClick={toggle}>
              <Hamburger className="h-full w-full p-1" />
            </Button>
            <SmallHeaderMenu isSmallScreen={isSmallScreen} />
          </div>

          <div className="lg:flex hidden gap-4">
            <Button
              className="text-white px-0"
              variant="ghost">
              <a href="/login">Login/Register</a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={toggle}>
              {isToggled ? <VscTriangleDown fill="white" /> : <VscTriangleUp fill="white" />}
            </Button>
            <Button className="font-bold">Get App</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
