import { getProfile } from "../../Utility/getProfile"
import Button from "../../CVA/Button"
import { timeFormatter } from "../../Utility/timeFormatter"
import { IoChatbubbleEllipses, IoHeartCircleSharp } from "react-icons/io5"
import { IoMdBookmark } from "react-icons/io"
import { PostInfo } from "../../Hooks/usePostList"
import { useSingleUser } from "../../Hooks/useSingleUser"
import { fakePostAt } from "../../Utility/fakePostAt"
import React from "react"

interface PostProps {
  post: PostInfo
}

const Post = ({ post }: PostProps) => {
  const { title, body, reactions, userId } = post

  const userInfo = useSingleUser(userId)

  if (userInfo === null) return null

  const { gender, image, username } = userInfo

  function handleClickLike() {
    alert("You Like this post!")
  }

  return (
    <div className="flex flex-col text-dcard-text-2 first:py-0 py-4 border-b last:border-0">
      <div className="flex items-center gap-2">
        <Button
          className="size-6"
          variant="ghost"
          size="icon">
          {getProfile(image, gender)}
        </Button>
        <span>
          {username}・{timeFormatter(fakePostAt())}
        </span>
      </div>
      <div className="font-bold my-1 text-xl text-black">{title}</div>
      <div className="text-lg my-1">{body}</div>
      <div className="flex items-center gap-2 my-2">
        <Button
          className="flex items-center gap-1 p-0 leading-4 text-dcard-text-2 "
          variant="ghost"
          size="default"
          onClick={handleClickLike}>
          <div className="size-6">
            <IoHeartCircleSharp
              viewBox="0 0 500 500"
              className={`${true ? "fill-dcard-girl" : "fill-dcard-text-2"}  hover:fill-dcard-girl size-full`}
            />
          </div>
          {reactions}
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
          {Math.floor(Math.random() * 50)}
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

export default React.memo(Post)
