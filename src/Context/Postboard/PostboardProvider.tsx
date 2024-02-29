import { ReactNode, useState } from "react"
import { TEST_LABELS } from "../../Data/PostboardInfo"
import { PostboardContext, PostboardContextProps } from "./usePostboardContext"
import { MoodBoardInfo } from "../../Data/MoodBoardInfo"

interface PostboardProviderProps {
  children: ReactNode
}

const PostboardProvider = ({ children }: PostboardProviderProps) => {
  const [currLabel, setCurrLabel] = useState(TEST_LABELS[0])

  const contextValue: PostboardContextProps = {
    currLabel: currLabel,
    setCurrLabel: setCurrLabel,
    labelList: TEST_LABELS,
    PostboardInfo: MoodBoardInfo,
  }

  return <PostboardContext.Provider value={contextValue}>{children}</PostboardContext.Provider>
}

export default PostboardProvider
