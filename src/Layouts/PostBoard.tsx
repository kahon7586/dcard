import { useEffect, useLayoutEffect, useRef, useState } from "react"
import Button from "../CVA/Button"
import { MoodBoardInfo } from "../Data/MoodBoardInfo"
import Post from "../Components/Postboard/Post"
import { setHeightToBottom } from "../Utility/setHeightToBottom"
import { useHeightToBottom } from "../Hooks/useHeightToBottom"
import { usePostList } from "../Hooks/usePostList"
import { useInfiniteScroll } from "../Hooks/useInfiniteScroll"

const Postboard = () => {
  const { name, Icon } = MoodBoardInfo
  const LABELS: string[] = ["Hot", "New", "Rules"]
  const POST_PER_LOAD = 1

  const [currLabel, setCurrLabel] = useState(LABELS[0])
  const skipNum = useRef(0)

  const PostboardRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    setHeightToBottom(PostboardRef)
  }, [])

  function handleScrollEnd() {
    console.log("reach bottom")
  }

  useHeightToBottom(PostboardRef)
  useInfiniteScroll(PostboardRef, handleScrollEnd)

  const [isPostsLoad, postList] = usePostList({ limit: POST_PER_LOAD, skip: skipNum.current, delay: 500 }, [skipNum])

  return (
    <div
      className="flex  bg-white flex-col min-w-[500px] max-w-[768px] mt-2 mx-2  overflow-y-auto"
      ref={PostboardRef}>
      <img
        className="bg-black object-cover object-bottom"
        src={"https://placehold.co/1280x427"}
      />

      <div className="flex flex-col bg-white px-8 pt-8 mb-8 sticky top-0">
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
      </div>

      <div className="px-8">
        {isPostsLoad ? (
          postList?.posts.map((post) => (
            <Post
              post={post}
              key={post.id}
            />
          ))
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  )
}

export default Postboard
