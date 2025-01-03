import React, {useEffect, useRef, useState} from "react";

export type CarouselProps = Omit<React.HTMLProps<HTMLDivElement>, 'className'> & {
  autoplay?: boolean
  autoplaySpeed?: number
  pagination?: boolean
  defaultIndex?: number
  indicator?: boolean
  currentIndicatorIndex?: number
  children: React.ReactNode[];
  onIndexChange?: (index: number) => void;
}

let _id = 0
const Carousel = ({
                    autoplaySpeed = 1000,
                    autoplay = true,
                    defaultIndex = 0,
                    indicator = true,
                    pagination = true,
                    onIndexChange,
                    children,
                    ...rest
                  }: CarouselProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const timerRef1 = useRef<number | null>(null);
  const timerRef2 = useRef<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(defaultIndex)
  const [focused, setFocused] = useState<boolean>(false)
  const [localId, setLocalId] = useState<number>(++_id)
  const firstOne = currentIndex === 0
  const lastOne = currentIndex === children.length - 1

  const updateIndex = (num: number) => {
    let _newIndex: number

    if (num < 0) {
      _newIndex = 0
    } else if (num >= children.length) {
      _newIndex = children.length - 1
    } else {
      _newIndex = num
    }

    setCurrentIndex(_newIndex)
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!focused) return

    if (event.key === 'ArrowLeft') {
      updateIndex(currentIndex - 1)
    }

    if (event.key === 'ArrowRight') {
      updateIndex(currentIndex + 1)
    }
  }

  const updateTimer = () => {
    if (autoplay) {
      let animating = false

      clearInterval(timerRef1.current)
      clearTimeout(timerRef2.current)

      timerRef1.current = setInterval(() => {
        if (animating) return

        animating = true
        updateIndex(currentIndex + 1)
        timerRef2.current = setTimeout(() => {
          animating = false
        }, autoplaySpeed) as unknown as number

      }, autoplaySpeed) as unknown as number
    }
  }

  useEffect(() => {
    updateTimer()
    onIndexChange && onIndexChange(currentIndex)
    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, focused])

  return (
    <div
      ref={rootRef}
      data-carousel={true}
      data-carousel-id={localId}
      onMouseDown={() => {
        setFocused(true)
      }}
      className={`relative overflow-hidden`}
      {...rest}
    >

      {/* slides */}
      <div
        className={`relative h-full flex`}
        style={{
          transition: 'transform 0.3s ease',
          transform: `translateX(${(-100 / children.length) * currentIndex}%)`,
          width: children.length * 100 + '%'
        }}
      >
        {children}
      </div>

      {
        indicator &&
        <div className={'z-10 absolute bottom-0 w-full h-5 items-center flex'}>
          <div className={'w-full h-5 flex'}></div>
        </div>}

      {
        pagination &&
        <>
          {/* prev */}
          <div
            onClick={() => updateIndex(currentIndex - 1)}
            style={{
              opacity: firstOne ? 0 : 1,
              pointerEvents: firstOne ? 'none' : 'auto',
              cursor: firstOne ? 'default' : 'pointer'
            }}
            className={'w-6 z-10 absolute top-0 left-0 h-full items-center flex justify-center cursor-pointer hover:bg-gradient-to-l from-transparent to-gray-400'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-500 hover:text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </div>

          {/* next */}
          <div onClick={() => updateIndex(currentIndex + 1)}
               style={{
                 opacity: lastOne ? 0 : 1,
                 pointerEvents: lastOne ? 'none' : 'auto',
                 cursor: lastOne ? 'default' : 'pointer'
               }}
               className={'w-6 z-10 absolute top-0 right-0 h-full items-center flex justify-center cursor-pointer hover:bg-gradient-to-r from-transparent to-gray-400'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-500 hover:text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </>
      }

    </div>
  );
};

export default Carousel;
