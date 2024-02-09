import { createContext, useContext } from "react"

export interface HeaderMenuContextValue {
  isToggled: boolean
  toggle: () => void
  close: () => void
}

export const HeaderMenuContext = createContext<HeaderMenuContextValue | null>(null)

export function useHeaderMenu() {
  const value = useContext(HeaderMenuContext)

  if (value === null) {
    throw Error("Cannot read context value.")
  }

  return value
}
