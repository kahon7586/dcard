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
  limit: number
  skip: number
  delay: number
  select: string[]
}

function createPostQueryUrl(options: PostQuery) {
  // exampleUrl https://dummyjson.com/posts?limit=10&skip=10&select=title,reactions,userId
  const basic = "https://dummyjson.com/posts"
  const queryPairs = Object.entries(options) as [string, number | string[]][] // [[name, value], [name, value], ...]
  let queryUrl = ""

  queryPairs.forEach(([name, value]) => {
    if (value === 0 || (value instanceof Array && value.length === 0)) return
    // skip when no value

    const heading = queryUrl.length === 0 ? "?" : "&"

    if (typeof value === "number") {
      queryUrl += heading + name + "=" + value
    } else {
      queryUrl += heading + name + "=" + value.join(",")
    }
  })

  return basic + queryUrl
}

export function usePostList(options: Partial<PostQuery>, dep: React.DependencyList) {
  const DEFAULT_VALUE: PostQuery = { limit: 0, skip: 0, delay: 0, select: [] }
  const mergedValue: PostQuery = { ...DEFAULT_VALUE, ...options }

  const [isPostsLoad, setIsPostLoad] = useState(false)
  const [postList, setPostList] = useState<PostList | null>(null)

  useEffect(() => {
    const abortController = new AbortController()
    const postUrl = createPostQueryUrl(mergedValue)

    async function fetchPostData() {
      console.log("fetching post data: " + postUrl)
      try {
        let res = await fetch(postUrl, { signal: abortController.signal })
        let data = (await res.json()) as PostList // structure should follow postList
        console.log("post fetching complete!")
        setPostList(data)
        setIsPostLoad(true)
      } catch (err) {
        console.log(err)
        setIsPostLoad(true)
      }
    }

    fetchPostData()

    return () => {
      abortController.abort()
    }
  }, dep)

  return [isPostsLoad, postList] as [boolean, PostList | null]
}
