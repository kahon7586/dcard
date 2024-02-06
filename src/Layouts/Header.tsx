import { FaSearch } from "react-icons/fa"
import Dcard_logo from "../Assets/logo.8b5bbef2.svg"
import { IoMdMenu as Hamburger } from "react-icons/io"
import Button from "../CVA/Button"
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc"
import { useState } from "react"
import DropDownMenu from "../Components/DropDownMenu"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="bg-dcard ">
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
        <div className="relative">
          <Button
            className="md:hidden flex border border-dcard-border rounded-md"
            size="icon">
            <Hamburger />
          </Button>
          <div className="absolute right-0 top-[150%] z-[99] border rounded-lg  text-nowrap ">
            <DropDownMenu />
          </div>
          <div className="md:flex hidden gap-4">
            <Button
              className="text-white px-0"
              variant="ghost">
              Login/Register
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsMenuOpen((prev) => !prev)}>
              {isMenuOpen ? <VscTriangleUp fill="white" /> : <VscTriangleDown fill="white" />}
            </Button>
            <Button className="font-bold">Get App</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
