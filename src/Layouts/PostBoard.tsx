import { useEffect, useLayoutEffect, useRef, useState } from "react"
import postImg from "../Assets/1280.webp"
import Button from "../CVA/Button"
import { MoodBoardInfo } from "../Data/MoodBoardInfo"
import Post from "../Components/Postboard/Post"
import { PostListData } from "../Data/PostListData"
import { setHeightToBottom } from "../Lib/setHeightToBottom"

const Postboard = () => {
  const { name, Icon } = MoodBoardInfo
  const LABELS: string[] = ["Hot", "New", "Rules"]

  const [currLabel, setCurrLabel] = useState(LABELS[0])
  const PostboardRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    setHeightToBottom(PostboardRef)
  }, [])

  useEffect(() => {
    function handler() {
      setHeightToBottom(PostboardRef)
    }

    window.addEventListener("resize", handler)

    return () => {
      window.removeEventListener("resize", handler)
    }
  }, [])

  return (
    <div
      className="flex bg-white flex-col min-w-[500px] max-w-[768px] mt-2 mx-2 overflow-y-auto"
      ref={PostboardRef}>
      <img
        className="bg-black object-cover object-bottom"
        src={postImg}
      />

      <div className="flex flex-col bg-white px-8 py-8">
        <div className="flex justify-between items-center pb-4">
          <div className="flex gap-6 text-[2rem] items-center">
            <Icon />
            <span className="leading-3">{name}</span>
          </div>
          <Button className="h-fit">Follow</Button>
        </div>

        <div>
          {LABELS.map((label, i) => (
            <button
              className={`px-4 py-2 text-lg text-dcard-text-2 hover:text-black ${
                currLabel === label ? "border-b-2 border-b-dcard" : null
              }`}
              onClick={() => setCurrLabel(label)}
              key={label}>
              {label}
            </button>
          ))}
        </div>

        <hr />

        <div>
          {PostListData.map((post) => (
            <Post
              key={post.postId}
              postId={post.postId}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Postboard
