import { IconType } from "react-icons"
import Button from "../../CVA/Button"

interface SideMenuItemProps {
  content: string
  Icon: IconType
  path: string
}

const SideMenuItem = ({ content, Icon, path }: SideMenuItemProps) => {
  return (
    <Button
      className="flex items-center gap-4 font-bold text-lg w-[200px]"
      variant="category"
      size="default"
      Icon={Icon}>
      <a href={path}>{content}</a>
    </Button>
  )
}

export default SideMenuItem
