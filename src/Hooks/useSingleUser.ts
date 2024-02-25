import { useEffect, useState } from "react"

export type UserGender = "male" | "female" | "other"

export interface UserInfo {
  gender: UserGender
  username: string
  image: string
}

export interface QueryInfo {
  users: UserInfo[]
  total: number
  skip: number
  limit: number
}

export function useSingleUser(userId: number) {
  const userUrl = `https://dummyjson.com/users/filter?key=id&value=${userId}&select=gender,username,image`

  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)

  useEffect(() => {
    async function fetchUserData() {
      try {
        let res = await fetch(userUrl)
        let data = (await res.json()) as QueryInfo // structure should be followed
        console.log("data fetched")
        setUserInfo(data.users[0])
      } catch (err) {
        console.log(err)
      }
    }
    fetchUserData()
  }, [])

  return userInfo as UserInfo | null
}
