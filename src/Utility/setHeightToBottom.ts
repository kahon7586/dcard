import { MutableRefObject } from "react"

export function setHeightToBottom(targetDivRef: MutableRefObject<HTMLDivElement | null>, bottomOffset = 5) {
  const targetDiv = targetDivRef.current
  if (targetDiv === null) return
  const rect = targetDiv.getBoundingClientRect()
  targetDiv.style.height = `${window.innerHeight - rect.top - bottomOffset}px`
}
