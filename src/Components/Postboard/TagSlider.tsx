import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import Button from "../../CVA/Button"
import { usePostboardContext } from "../../Context/Postboard/usePostboardContext"
import { useCallback, useEffect, useRef, useState } from "react"
import React from "react"

const TagSlider = () => {
  const {
    PostboardInfo: { tags },
  } = usePostboardContext()

  const TRANSLATE_PER_CLICK = 300

  const [translate, setTranslate] = useState(0)
  const sliderRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (slider === null) return
    slider.style.transform = `translate(-${translate}px, 0px)`
  }, [translate])

  const handleClickLeft = useCallback(() => {
    if (translate > TRANSLATE_PER_CLICK) {
      setTranslate((prev) => prev - TRANSLATE_PER_CLICK)
    } else {
      setTranslate(0)
    }
  }, [translate])

  const handleClickRight = useCallback(() => {
    const slider = sliderRef.current
    if (slider === null) return
    const { scrollWidth, clientWidth } = slider
    const leftSideAtEnd = scrollWidth - clientWidth

    if (translate + TRANSLATE_PER_CLICK < leftSideAtEnd) {
      setTranslate((prev) => prev + TRANSLATE_PER_CLICK)
    } else {
      setTranslate(leftSideAtEnd)
    }
  }, [translate])

  return (
    <div className="lg:hidden w-auto max-w-[350px] relative overflow-x-hidden">
      <div
        className="transition-transform flex mx-8 gap-2 "
        ref={sliderRef}>
        {tags.map((tag) => (
          <Button
            className="text-sm rounded-full bg-dcard-btn-bg-gray text-black text-nowrap"
            variant="ghost"
            key={tag}>
            {tag}
          </Button>
        ))}
      </div>

      <Button
        className="bg-white shadow-[rgba(255,255,255,1)_10px_0px_6px_0px] absolute aspect-auto left-0 top-0 h-full w-6"
        variant="ghost"
        size="icon"
        onClick={handleClickLeft}>
        <IoIosArrowBack fill="black" />
      </Button>

      <Button
        className="bg-white shadow-[rgba(255,255,255,1)_-10px_0px_6px_0px] absolute aspect-auto top-0 right-0 h-full w-6"
        variant="ghost"
        size="icon"
        onClick={handleClickRight}>
        <IoIosArrowForward fill="black" />
      </Button>
    </div>
  )
}

export default React.memo(TagSlider)
