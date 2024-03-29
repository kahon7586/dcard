import { MutableRefObject, useEffect, useState } from "react"
import { throttle } from "../Utility/throttle"

const TEST_THROTTLE_DELAY = 200

export function useInfiniteScroll(
  scrollRef: MutableRefObject<HTMLDivElement | null>,
  effectFn?: React.EffectCallback,
  triggerHeight: number = 10
) {
  // Using useInfiniteScroll like useState

  // scrollRef: target div that expected to has inifinite scroll behavior
  // effectFn: callbackFn will operate when reach bottom
  // triggerHeight: height to trigger reach bottom handler

  const [isBottom, setIsBottom] = useState(false)

  useEffect(() => {
    if (scrollRef.current === null) return

    const scrollDiv = scrollRef.current

    function handleReachBottom() {
      if (effectFn) effectFn()
      setIsBottom(true)
    }

    function scrollHandler() {
      const { scrollHeight, scrollTop, clientHeight } = scrollDiv

      //  scrollHeight: the total height of element (include overflow part)
      //  scrollTop: the top position of visible part
      //  clientHeight: the height of visible part

      const isReachBottom = clientHeight + scrollTop > scrollHeight - triggerHeight

      if (isReachBottom) handleReachBottom()
    }

    scrollDiv.addEventListener("scroll", throttle(scrollHandler, TEST_THROTTLE_DELAY))

    return () => {
      scrollDiv.removeEventListener("scroll", throttle(scrollHandler, TEST_THROTTLE_DELAY))
    }
  }, [])

  return [isBottom, setIsBottom] as [boolean, (state: boolean | (() => boolean)) => void]
}
