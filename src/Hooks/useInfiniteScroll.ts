import { MutableRefObject, useEffect } from "react"
import { throttle } from "../Utility/throttle"

// useInfiniteScroll hook will operate callbackFn when user scroll down to the bottom of scrollRef
// tirggerHeight could customize the rest of height to trigger callbackFn

//  scrollHeight: the total height of element (include overflow part)
//  scrollTop: the top position of visible part
//  clientHeight: the height of visible part

export function useInfiniteScroll(
  scrollRef: MutableRefObject<HTMLDivElement | null>,
  callbackFn: () => void,
  tirggerHeight = 10
) {
  useEffect(() => {
    if (scrollRef.current === null) return

    const scrollDiv = scrollRef.current

    function scrollHandler() {
      const { scrollHeight, scrollTop, clientHeight } = scrollDiv

      if (clientHeight + scrollTop > scrollHeight - tirggerHeight) {
        console.log("reach bottom!")
        callbackFn()
      } else console.log("not bottom")
    }

    scrollDiv.addEventListener("scroll", throttle(scrollHandler, 200))

    return () => {
      scrollDiv.removeEventListener("scroll", throttle(scrollHandler, 200))
    }
  }, [])
}
