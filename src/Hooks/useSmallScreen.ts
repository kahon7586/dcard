import { useEffect, useState } from "react"

export function useSmallScreen(effectFn?: React.EffectCallback) {
  const [isSmall, setIsSmall] = useState(() => {
    return window.innerWidth < 1024
  })

  useEffect(() => {
    function resizeHandler() {
      if (window.innerWidth < 1024) setIsSmall(true)
      else setIsSmall(false)
    }

    window.addEventListener("resize", resizeHandler)

    return () => {
      window.removeEventListener("resize", resizeHandler)
    }
  }, [])

  useEffect(() => {
    if (isSmall === true && effectFn !== undefined) {
      effectFn()
    }
  }, [isSmall])

  return [isSmall]
}
