import { HTMLAttributes, ReactNode, useLayoutEffect, useRef, useState } from "react"
import Button from "../CVA/Button"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"

interface CollapseProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  closeHeight?: string
  duration?: string
  delay?: string
}

const Collapse = ({ children, className, closeHeight = "1.5rem", duration = "1000ms", delay = "0" }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const collapseRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const collapse = collapseRef.current
    if (collapse === null) return

    const scrollHeight = collapse.scrollHeight // the content of height
    collapse.style.transitionDuration = duration
    collapse.style.transitionDelay = delay

    if (isOpen) {
      collapse.style.height = scrollHeight + "px"
    } else {
      collapse.style.height = closeHeight
    }
  }, [isOpen])

  function handleClickArrow() {
    setIsOpen((prev) => !prev)
  }

  return (
    <section className="flex items-start justify-center">
      <div
        className={`transition-height overflow-hidden ${className}`}
        ref={collapseRef}>
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

export default Collapse
