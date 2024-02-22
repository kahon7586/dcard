import { PostData } from "../../Data/PostData"
import { UserData } from "../../Data/UserData"
import { getProfile } from "../../Lib/getProfile"
import Button from "../../CVA/Button"
import { timeFormatter } from "../../Lib/timeFormatter"
import { IoChatbubbleEllipses, IoHeartCircleSharp } from "react-icons/io5"
import { IoMdBookmark } from "react-icons/io"
import { useState } from "react"
import { currUser } from "../../Auth/currUser"

interface PostProps {
  postId: string
}

const Post = ({ postId }: PostProps) => {
  const {
    userId,
    info: { title, content, postAt },
    counts: { like, comment },
  } = PostData[postId]

  const {
    userInfo: { nickName = "anonymous", gender, profileURL },
  } = UserData[userId]

  const {
    userActivity: { likedPost, commentedPost, collectedPost },
  } = UserData[currUser]

  const [isLiked, setIsLiked] = useState(likedPost.includes(postId))
  const [isCommented, setIscommented] = useState(commentedPost.includes(postId))
  const [isCollected, setIsCollected] = useState(collectedPost.includes(postId))

  function handleClickLike() {
    setIsLiked(false)
    alert("You Like this post!")
  }

  return (
    <div className="flex flex-col text-dcard-text-2 py-4 border-b last:border-0">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon">
          {getProfile(profileURL, gender)}
        </Button>
        <span>
          {nickName}・{timeFormatter(postAt)}
        </span>
      </div>
      <div className="font-bold my-1 text-xl text-black">{title}</div>
      <div className="text-lg my-1">{content}</div>
      <div className="flex items-center gap-2 my-2">
        <Button
          className="flex items-center gap-1 p-0 leading-4 text-dcard-text-2 "
          variant="ghost"
          size="default"
          onClick={handleClickLike}>
          <div className="size-6">
            <IoHeartCircleSharp
              viewBox="0 0 500 500"
              className={`${isLiked ? "fill-dcard-girl" : "fill-dcard-text-2"}  hover:fill-dcard-girl size-full`}
            />
          </div>
          {like}
        </Button>
        <Button
          className="flex as items-center gap-1 p-0 leading-4 text-dcard-text-2"
          variant="ghost"
          size="default">
          <div className="size-6">
            <IoChatbubbleEllipses
              viewBox="10 0 530 530"
              className="fill-dcard-text-2 hover:fill-dcard-light-hover size-full"
            />
          </div>
          {comment}
        </Button>
        <Button
          className="flex items-center gap-1 p-0 leading-4 text-dcard-text-2"
          variant="ghost"
          size="default">
          <div className="size-6">
            <IoMdBookmark
              viewBox="0 0 500 500"
              className="fill-dcard-text-2 hover:fill-green-500 size-full"
            />
          </div>
        </Button>
      </div>
    </div>
  )
}

export default Post
