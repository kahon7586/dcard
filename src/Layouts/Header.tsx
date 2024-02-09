import { FaSearch } from "react-icons/fa"
import Dcard_logo from "../Assets/logo.8b5bbef2.svg"
import { IoMdMenu as Hamburger } from "react-icons/io"
import Button from "../CVA/Button"
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc"
import { useEffect, useRef, useState } from "react"
import SmallHeaderMenu from "../Components/HeaderMenu/SmallHeaderMenu"
import { useHeaderMenu } from "../Context/useHeaderMenu"

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768)

  const { isToggled, toggle } = useHeaderMenu()
  const headerRef = useRef<HTMLHeadElement>(null)

  useEffect(() => {
    if (headerRef.current === null) return

    function handleResize() {
      if (window.innerWidth < 768) {
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
      <div className=" gap-6 mx-auto max-w-[1024px] flex px-16 py-2.5 md:justify-center justify-around items-center">
        <a
          href="/"
          className="shrink-0">
          <img
            className="w-auto h-8"
            src={Dcard_logo}
          />
        </a>

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
              className="md:hidden flex border border-dcard-border rounded-md"
              size="icon"
              onClick={toggle}>
              <Hamburger />
            </Button>
            <SmallHeaderMenu isSmallScreen={isSmallScreen} />
          </div>

          <div className="md:flex hidden gap-4">
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
