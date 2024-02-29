import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc"
import Button from "../../CVA/Button"
import SmallDropdownMenu from "./SmallDropdownMenu"
import { IoMdMenu as Hamburger } from "react-icons/io"
import { useCallback, useState } from "react"

const HeaderRightSetions = () => {
  const [isToggled, setIsToggled] = useState(false)

  const handleToggle = useCallback(() => {
    setIsToggled((prev) => !prev)
  }, [])

  return (
    <div>
      <div className="relative">
        <Button
          className="lg:hidden flex size-8 hover:bg-dcard-light rounded-md"
          variant="ghost"
          size="icon"
          onClick={handleToggle}>
          <Hamburger className="h-full w-full p-1" />
        </Button>
        <SmallDropdownMenu toggled={isToggled} />
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
          onClick={handleToggle}>
          {isToggled ? <VscTriangleDown fill="white" /> : <VscTriangleUp fill="white" />}
        </Button>
        <Button className="font-bold">Get App</Button>
      </div>
    </div>
  )
}

export default HeaderRightSetions
