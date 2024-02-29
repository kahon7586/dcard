import { useRef } from "react"
import Button from "../CVA/Button"
import Post from "../Components/Postboard/Post"
import { useHeightToBottom } from "../Hooks/useHeightToBottom"
import { PostInfo, usePostList } from "../Hooks/usePostList"
import Labels from "../Components/Postboard/Labels"
import PostboardProvider from "../Context/Postboard/PostboardProvider"
import { usePostboardContext } from "../Context/Postboard/usePostboardContext"

const TEST_QUERY = {
  limit: 3,
  delay: 250,
}

const StickySection = () => {
  const {
    PostboardInfo: { Icon, name },
  } = usePostboardContext()

  return (
    <div className="flex flex-col bg-white px-8 pt-8 sticky top-0 z-20">
      <div className="flex justify-between items-center pb-4">
        <div className="flex gap-6 text-[2rem] items-center">
          <Icon />
          <span className="leading-3">{name}</span>
        </div>
        <div className="flex gap-2">
          <Button
            className="text-black bg-gray-100 w-[100px] relative group"
            variant="ghost">
            Follow
            <div className="absolute inset-0 py-1 px-3 rounded-lg bg-gradient-to-l from-dcard-light-hover to-75% to-dcard-girl text-white [text-shadow:_0_0_10px_rgb(0_0_0_/_50%)] motion-safe:transition-[clip-path] motion-safe:duration-500 ease-out [clip-path:circle(20%_at_120%_120%)] group-hover:[clip-path:circle(170%_at_120%_120%)] w-[100px]">
              <span className="">For More</span>
            </div>
          </Button>
          <Button className="h-fit lg:hidden">New Post</Button>
        </div>
      </div>

      <Labels />

      <hr />
    </div>
  )
}

interface PostsSetcionProps {
  postList: PostInfo[] | null
}

const PostsSetcion = ({ postList }: PostsSetcionProps) => {
  return (
    <div>
      {postList !== null ? (
        postList.map((post) => (
          <Post
            post={post}
            key={post.id}
          />
        ))
      ) : (
        <p>loading</p>
      )}
    </div>
  )
}

const Postboard = () => {
  const PostboardRef = useRef<HTMLDivElement | null>(null)

  const postList = usePostList(TEST_QUERY, PostboardRef)
  // the place where data fetcing and infinite scroll behavior live

  useHeightToBottom(PostboardRef)

  return (
    <PostboardProvider>
      <div
        className="flex  bg-white flex-col min-w-[500px] max-w-[768px] mt-2 mx-2 overflow-y-auto"
        ref={PostboardRef}>
        <img
          className="bg-black object-cover object-bottom"
          src={"https://placehold.co/1280x427"}
        />

        <StickySection />

        <PostsSetcion postList={postList} />
      </div>
    </PostboardProvider>
  )
}

export default Postboard
