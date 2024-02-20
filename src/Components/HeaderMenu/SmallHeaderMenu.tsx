import { useEffect } from "react"
import { useHeaderMenu } from "../../Context/useHeaderMenu"
import { menuItems } from "../../Data/Header"
import Button from "../../CVA/Button"

interface SmallHeaderMenuProps {
  isSmallScreen: boolean
}

const SmallHeaderMenu = ({ isSmallScreen }: SmallHeaderMenuProps) => {
  const { isToggled, close } = useHeaderMenu()

  return (
    <ul
      className={`absolute border rounded-lg bg-white text-nowrap right-0 lg:right-[103px] top-[45px] ${
        isToggled ? "block" : "hidden"
      }`}>
      <div className="absolute top-[-10px] right-[6px] w-0 h-0 border-x-[10px] border-solid border-x-transparent border-b-[10px] border-b-white" />
      {isSmallScreen && (
        <li className="hover:bg-dcard-text rounded-t-lg px-4 py-2 flex">
          <a href="/login">Login/Register</a>
        </li>
      )}
      {isSmallScreen && <hr />}
      {menuItems.map((item) => (
        <li
          className="[&:nth-child(2)]:rounded-t-lg last:rounded-b-lg hover:bg-dcard-text px-4 py-2 "
          key={item.content}>
          <a href={item.path}>{item.content}</a>
        </li>
      ))}
      {isSmallScreen && <hr />}
      {isSmallScreen && (
        <li className="rounded-b-lg hover:bg-dcard-text px-4 py-2 flex">
          <Button className="font-bold w-full">Get App</Button>
        </li>
      )}
    </ul>
  )
}

export default SmallHeaderMenu
