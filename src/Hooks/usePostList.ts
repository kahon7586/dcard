// This hook will be used like useState, but just return post array

import { MutableRefObject, useEffect, useRef, useState } from "react"
import { useInfiniteScroll } from "./useInfiniteScroll"
import useDataFetch from "./useDataFetch"

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

export function usePostList(options: Partial<PostQuery>, postboardRef: MutableRefObject<HTMLDivElement | null>) {
  const [isBottom, setIsBottom] = useInfiniteScroll(postboardRef, () => console.log("test reach")) // useState like

  const postList = useDataFetch(options, () => setIsBottom(false), [isBottom]) // useEffect like

  return postList as PostInfo[] | null
}
