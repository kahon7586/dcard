import { PostData } from "../../Data/PostData"
import { UserData } from "../../Data/UserData"
import { getProfile } from "../../Lib/getProfile"
import Button from "../../CVA/Button"

interface PostProps {
  postId: string
}

const Post = ({ postId }: PostProps) => {
  const {
    userId,
    info: { title, content, postAt },
    counts,
    client,
  } = PostData[postId]

  const {
    userInfo: { nickName = "anonymous", email, gender, profileURL, school },
  } = UserData[userId]

  return (
    <div className="flex flex-col text-dcard-text-2 py-4">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon">
          {getProfile(profileURL, gender)}
        </Button>
        <span>
          {nickName}・{}
        </span>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Post
