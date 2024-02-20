export type UserGender = "Male" | "Female" | "Other"

export interface User {
  userId: string
  userInfo: {
    nickName?: string
    email: string
    gender: UserGender
    profileURL?: string
    school?: string
  }
}

export const UserData: { [key: string]: User } = {
  u1: {
    userId: "u1",
    userInfo: {
      nickName: "Dcard User1",
      email: "u1@dcard.com",
      gender: "Male",
      // profileURL: "/src/Assets/u1-profile.jpg",
      school: "Nation Dcard University",
    },
  },
  u2: {
    userId: "u2",
    userInfo: {
      email: "u3@dcard.com",
      gender: "Female",
    },
  },
  u3: {
    userId: "u3",
    userInfo: {
      nickName: "DcArD uSeR3",
      email: "u3@dcard.com",
      gender: "Other",
      profileURL: "../Assets/u3-profile.jpg",
    },
  },
}
