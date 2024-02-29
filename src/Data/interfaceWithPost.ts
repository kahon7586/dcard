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
