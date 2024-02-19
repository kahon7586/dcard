import { IconType } from "react-icons"

export interface BoardInfo {
  name: string
  Icon: IconType
  info: string
  tags: string[]
  postPerDay: number
}
