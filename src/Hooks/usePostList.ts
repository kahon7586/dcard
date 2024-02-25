// This hook will be used like useState, but just return post array

import { MutableRefObject, useEffect, useRef, useState } from "react"
import { useInfiniteScroll } from "./useInfiniteScroll"

export interface PostInfo {
  id: number
  title: string
  body: string
  userId: number
  tags: string[]
  reactions: number
}

export interface PostJSON {
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

function createPostQueryUrl(options: Partial<PostQuery>) {
  // exampleUrl https://dummyjson.com/posts?limit=10&skip=10&select=title,reactions,userId
  const basicUrl = "https://dummyjson.com/posts"

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

  return basicUrl + queryUrl
}

export function usePostList(options: Partial<PostQuery>, postboardRef: MutableRefObject<HTMLDivElement | null>) {
  const [isBottom, setIsBottom] = useState(false)
  const [postList, setPostList] = useState<PostInfo[] | null>(null)

  const prevPostNumRef = useRef<number>(0)

  useEffect(() => {
    if (isBottom === false && postList !== null) return

    console.log("prevPostNum: " + prevPostNumRef.current)

    const abortController = new AbortController()
    // if a new request sended before the previous request complete,
    // the old request will be canceled by abortController

    async function fetchPostData() {
      const prevPostNum = prevPostNumRef.current
      const defaultQuery: PostQuery = { limit: 5, skip: prevPostNum, delay: 0, select: [] }
      const finalQuery: PostQuery = { ...defaultQuery, ...options }

      const postUrl = createPostQueryUrl(finalQuery)
      console.log("fetching post data from: " + postUrl)

      try {
        const dataJSON: PostJSON = await (await fetch(postUrl, { signal: abortController.signal })).json() // structure should follow PostJSON
        console.log(dataJSON)
        const postListData = dataJSON.posts
        console.log("post fetching complete!")

        setPostList((prev) => {
          if (prev === null) return postListData
          return [...prev, ...postListData]
        })

        const newLoadedPostNum = finalQuery.limit
        prevPostNumRef.current += newLoadedPostNum
      } catch (err) {
        console.log(err)
      } finally {
        setIsBottom(false)
      }
    }

    fetchPostData()

    return () => {
      abortController.abort()
      // cancel request when re-render
    }
  }, [isBottom])

  function handleScrollEnd() {
    setIsBottom(true)
  }

  useInfiniteScroll(postboardRef, handleScrollEnd)

  return postList as PostInfo[] | null
}
