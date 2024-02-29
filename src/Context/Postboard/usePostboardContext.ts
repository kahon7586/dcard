import { createContext, useContext } from "react"
import { PostboardInfo, PostboardLabel } from "../../Data/PostboardInfo"

export interface PostboardContextProps {
  currLabel: PostboardLabel
  setCurrLabel: React.Dispatch<React.SetStateAction<PostboardLabel>>
  labelList: PostboardLabel[]
  PostboardInfo: PostboardInfo
}

export const PostboardContext = createContext<PostboardContextProps | {}>({})

export function usePostboardContext() {
  const contextValues = useContext(PostboardContext)

  if (Object.keys(contextValues).length === 0) {
    throw Error("Context can't be used outside of provider: usePostboardContext")
  }

  return contextValues as PostboardContextProps
}
