import { MutableRefObject, useEffect, useState } from "react"

export function useInfiniteScroll(scrollRef: MutableRefObject<HTMLDivElement | null>, callbackFn: () => void) {
  const LOAD_Y_OFFSET = 10
  const [isBottom, setIsBottom] = useState(false)

  useEffect(() => {
    if (scrollRef.current === null) return

    const scrollDiv = scrollRef.current

    function scrollHandler() {
      const { scrollHeight, scrollTop, clientHeight } = scrollDiv

      if (clientHeight + scrollTop > scrollHeight - LOAD_Y_OFFSET) {
        setIsBottom(true)
        callbackFn()
      } else {
        console.log("not bottom")
        setIsBottom(false)
      }
    }

    scrollDiv.addEventListener("scroll", scrollHandler)

    return () => scrollDiv.removeEventListener("scroll", scrollHandler)
  }, [])
}
