import React, { useEffect, useRef, useState } from "react"
import { PostInfo, PostJSON, PostQuery } from "../Data/interfaceWithPost"

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

const useDataFetch = (callbackFn: React.EffectCallback, deps: readonly boolean[], options: Partial<PostQuery>) => {
  // using useDataFetch like useEffect with query option will return the dataList

  // callbackFn: the effectFn to operate after data fetching request is done(resolved or rejected)
  // deps: boolean[] that determine whether should send a request
  // options: query value

  const [postList, setPostList] = useState<PostInfo[] | null>(null)

  const prevPostNumRef = useRef<number>(0)

  useEffect(() => {
    if (!(deps.includes(true) || postList === null)) return
    // two condition to fetch post data:
    // 1. when user reach the end.
    // 2. when postList is not initially loaded.

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
        const dataJSON: PostJSON = await (await fetch(postUrl, { signal: abortController.signal })).json()
        const postListData = dataJSON.posts
        console.log("post fetching complete!")

        setPostList((prev) => {
          if (prev === null) return postListData
          return [...prev, ...postListData]
          // create a new postList or append the old one
        })

        const newLoadedPostNum = finalQuery.limit
        prevPostNumRef.current += newLoadedPostNum
        // update the currently loaded post num
      } catch (err) {
        console.log(err)
      } finally {
        callbackFn()
      }
    }

    fetchPostData()

    return () => {
      abortController.abort()
      // cancel request when re-render
    }
  }, deps)

  return postList
}

export default useDataFetch
