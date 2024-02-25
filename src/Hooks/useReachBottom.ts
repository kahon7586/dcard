import { MutableRefObject, useEffect } from "react"
import { setHeightToBottom } from "../Utility/setHeightToBottom"

// add a resize listener to ref element that adjust height to reach viewport bottom,
// this hook also accept callbackFn to operate when listener is triggered

export function useReachBottom(divRef: MutableRefObject<HTMLDivElement | null>, callbackFn?: () => void) {
  useEffect(() => {
    function handler() {
      setHeightToBottom(divRef)
      if (callbackFn !== undefined) callbackFn()
    }

    window.addEventListener("resize", handler)

    return () => {
      window.removeEventListener("resize", handler)
    }
  }, [])
}
