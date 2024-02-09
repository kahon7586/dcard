import { ReactNode } from "react"
import HeaderMenuProvider from "./HeaderMenuProvider"

interface ContextProviderProps {
  children: ReactNode
}

const MyContextProvider = ({ children }: ContextProviderProps) => {
  return (
    <>
      <HeaderMenuProvider>{children}</HeaderMenuProvider>
    </>
  )
}

export default MyContextProvider
