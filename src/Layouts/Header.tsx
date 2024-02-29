import { FaSearch } from "react-icons/fa"
import Dcard_logo from "../Assets/logo.8b5bbef2.svg"
import Button from "../CVA/Button"
import React from "react"
import HeaderRightSetions from "../Components/HeaderMenu/HeaderRightSetions"

const Logo = () => {
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
}

const SearchBar = () => {
  return (
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
  )
}

const Header = () => {
  return (
    <header className="bg-dcard ">
      <div className=" gap-6 mx-auto max-w-[1024px] flex px-16 py-2.5 lg:justify-center justify-around items-center">
        <Logo />

        <SearchBar />

        <HeaderRightSetions />
      </div>
    </header>
  )
}

export default Header
