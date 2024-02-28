import { HTMLAttributes, ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import Button from "../CVA/Button"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import React from "react"

interface CollapseProps extends HTMLAttributes<HTMLDivElement> {
  closeHeight?: string
  duration?: number
  delay?: number
}

const Collapse = ({
  children,
  className,
  closeHeight = "1.5rem",
  duration = 1000,
  delay = 0,
  ...props
}: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const collapseRef = useRef<HTMLDivElement | null>(null)
  const scrollHeightRef = useRef<number | null>(null)

  useLayoutEffect(() => {
    const collapse = collapseRef.current
    const scrollHeight = scrollHeightRef.current
    if (collapse === null) return
    if (scrollHeight === null) scrollHeightRef.current = collapse.scrollHeight
    // store the height of content if not being done

    collapse.style.transitionDuration = duration.toString() + "ms"
    collapse.style.transitionDelay = delay.toString() + "ms"

    if (isOpen) {
      collapse.classList.remove("truncate")
      collapse.style.height = scrollHeight + "px"
    } else {
      const truncateDelay = duration
      // after collapse behavior is done, add truncate immediately
      setTimeout(() => {
        collapse.classList.add("truncate")
      }, truncateDelay)
      collapse.style.height = closeHeight
    }
  }, [isOpen])

  const handleClickArrow = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])
  // prevent re-render Button(child) when Collapse isOpen state change (parent)

  return (
    <section className="flex items-start justify-center">
      <div
        className={`transition-height overflow-hidden ${className}`}
        ref={collapseRef}
        {...props}>
        {children}
      </div>
      <Button
        className="w-4 mt-1"
        size="icon"
        variant="ghost"
        onClick={handleClickArrow}>
        {isOpen ? <IoIosArrowUp fill="text-dcard-text" /> : <IoIosArrowDown fill="text-dcard-text" />}
      </Button>
    </section>
  )
}

export default React.memo(Collapse)
