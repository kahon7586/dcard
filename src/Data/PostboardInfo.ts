import { IconType } from "react-icons"

export type PostboardLabel = "Hot" | "New" | "Rules"

export const TEST_LABELS: PostboardLabel[] = ["Hot", "New", "Rules"]

export interface PostboardInfo {
  name: string
  Icon: IconType
  info: string
  tags: string[]
  postPerDay: number
}
