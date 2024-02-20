export interface Post {
  postId: string
  userId: string
  info: {
    title: string
    content: string
    postAt: Date
  }
  counts: {
    like: number
    comment: number
  }
  client: {
    liked: boolean
    commented: boolean
    collected: boolean
  }
}

export const PostData: { [key: string]: Post } = {
  p1: {
    postId: "p1",
    userId: "u1",
    info: {
      title: "post 1 test",
      content: "content1 test",
      postAt: new Date("2024-2-20"),
    },
    counts: {
      like: 2,
      comment: 3,
    },
    client: {
      liked: false,
      commented: false,
      collected: false,
    },
  },
}
