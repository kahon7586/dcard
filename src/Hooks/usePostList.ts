// This hook will be used like useState, but just return post array

import { useEffect, useState } from "react"

export interface PostInfo {
  id: number
  title: string
  body: string
  userId: number
  tags: string[]
  reactions: number
}

export interface PostList {
  posts: PostInfo[]
  total: number
  skip: number
  limit: 30
}

export function usePostList() {
  const postUrl = "https://dummyjson.com/posts?delay=2000&limit=10&skip=10"

  const [isPostsLoad, setIsPostLoad] = useState(false)
  const [postList, setPostList] = useState<PostList | null>(null)

  useEffect(() => {
    async function fetchPostData() {
      try {
        let res = await fetch(postUrl)
        let data = (await res.json()) as PostList // structure should follow postList
        console.log("data fetched")
        console.log(data)
        setPostList(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchPostData()
  }, [])

  useEffect(() => {
    if (postList !== null) {
      setIsPostLoad(true)
    }
  }, [postList])

  return [isPostsLoad, postList] as [boolean, PostList | null]
}
