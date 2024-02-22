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
}

export const PostData: { [key: string]: Post } = {
  p1: {
    postId: "p1",
    userId: "u1",
    info: {
      title: "post 1 test",
      content: "content1 test",
      postAt: new Date("2024-1-31"),
    },
    counts: {
      like: 2,
      comment: 3,
    },
  },
  p2: {
    postId: "p2",
    userId: "u2",
    info: {
      title: "post 2 test",
      content: "content2 test",
      postAt: new Date("2024-2-15"),
    },
    counts: {
      like: 2324,
      comment: 344,
    },
  },
  p3: {
    postId: "p3",
    userId: "u3",
    info: {
      title: "post 3 test",
      content: "content3 test",
      postAt: new Date("2024-2-22"),
    },
    counts: {
      like: 0,
      comment: 1,
    },
  },
}
