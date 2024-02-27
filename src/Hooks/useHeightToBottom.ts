import { MutableRefObject, useEffect, useLayoutEffect } from "react"

// add a resize listener to ref element that adjust height to reach viewport bottom,
// this hook also accept callbackFn to operate when listener is triggered

function setHeightToBottom(targetDivRef: MutableRefObject<HTMLDivElement | null>, bottomOffset = 5) {
  const targetDiv = targetDivRef.current
  if (targetDiv === null) return
  const rect = targetDiv.getBoundingClientRect()
  targetDiv.style.height = `${window.innerHeight - rect.top - bottomOffset}px`
}

export function useHeightToBottom(
  divRef: MutableRefObject<HTMLDivElement | null>,
  callbackFn?: () => void,
  deps?: React.DependencyList
) {
  useLayoutEffect(() => {
    setHeightToBottom(divRef)
  }, deps)

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
