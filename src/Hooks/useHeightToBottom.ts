import { MutableRefObject, useEffect, useLayoutEffect } from "react"

// add a resize listener to ref element that adjust height to reach viewport bottom,
// this hook also accept callbackFn to operate when listener is triggered

const TEST_BOTTOM_OFFSET = 5

export function setMaxHeightToBottom(targetDivRef: MutableRefObject<HTMLDivElement | null>, TEST_BOTTOM_OFFSET = 5) {
  const targetDiv = targetDivRef.current
  if (targetDiv === null) return
  const rect = targetDiv.getBoundingClientRect()
  targetDiv.style.maxHeight = `${window.innerHeight - rect.top - TEST_BOTTOM_OFFSET}px`
}

export function useHeightToBottom(
  divRef: MutableRefObject<HTMLDivElement | null>,
  callbackFn?: () => void,
  deps?: React.DependencyList // for initially height set
) {
  useLayoutEffect(() => {
    setMaxHeightToBottom(divRef)
  }, deps)
  // Initially height set with deps

  useEffect(() => {
    function handler() {
      setMaxHeightToBottom(divRef)
      if (callbackFn !== undefined) callbackFn()
    }

    window.addEventListener("resize", handler)

    return () => {
      window.removeEventListener("resize", handler)
    }
  }, [])
}
