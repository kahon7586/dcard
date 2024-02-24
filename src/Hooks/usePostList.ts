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

export interface PostQuery {
  limit?: number
  skip?: number
  delay?: number
  select?: string[]
}

function createPostQueryUrl(options: Partial<PostQuery>) {
  // exampleUrl https://dummyjson.com/posts?limit=10&skip=10&select=title,reactions,userId
  const basic = "https://dummyjson.com/posts"
  const queryPairs = Object.entries(options) as [string, number | string[]][] // [[name, value], [name, value], ...]
  let queryUrl = ""

  queryPairs.forEach(([name, value]) => {
    console.log(name, value)
    if (value === 0 || []) return
    const heading = queryUrl.length === 0 ? "?" : "&"
    if (typeof value === "number") queryUrl += heading + name + "=" + value
    else queryUrl += heading + name + "=" + value.join(",")
  })

  console.log("queryUrl: " + basic + queryUrl)

  return basic + queryUrl
}

export function usePostList(options: PostQuery) {
  const DEFAULT_VALUE: PostQuery = { limit: 0, skip: 0, delay: 0, select: [] }
  const mergeValue: PostQuery = { ...DEFAULT_VALUE, ...options }

  console.log("query params:")
  console.log(mergeValue)

  const postUrl = createPostQueryUrl(mergeValue)

  const [isPostsLoad, setIsPostLoad] = useState(false)
  const [postList, setPostList] = useState<PostList | null>(null)

  useEffect(() => {
    async function fetchPostData() {
      try {
        let res = await fetch(postUrl)
        let data = (await res.json()) as PostList // structure should follow postList
        console.log(data)
        setPostList(data)
      } catch (err) {
        console.log(err)
      }
    }

    // fetchPostData()
  }, [])

  useEffect(() => {
    if (postList !== null) {
      setIsPostLoad(true)
    }
  }, [postList])

  return [isPostsLoad, postList] as [boolean, PostList | null]
}
