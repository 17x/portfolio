import React, {useEffect, useRef, useState} from "react";

type Props = Omit<React.HTMLProps<HTMLDivElement>, 'className'> & {
  autoplay?: boolean
  autoplaySpeed?: number
  pagination?: boolean
  defaultIndex?: number
  indicator?: boolean
  currentIndicatorIndex?: number
  children: React.ReactNode[];
}

let _id = 0
const Carousel = ({
                    autoplaySpeed = 1000,
                    autoplay = true,
                    defaultIndex = 0,
                    indicator = true,
                    pagination = true,
                    children,
                    ...rest
                  }: Props) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const timerRef1 = useRef<number | null>(null);
  const timerRef2 = useRef<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(defaultIndex)
  const [focused, setFocused] = useState<boolean>(false)
  // const [animating, setAnimating] = useState<boolean>(false)
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
              // pointerEvents: firstOne ? 'none' : 'auto',
              cursor: firstOne ? 'default' : 'pointer'
            }}
            className={'z-10 absolute top-0 left-1 h-full items-center flex cursor-pointer'}>
            <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-black
        opacity-30 hover:opacity-100
        "></div>
          </div>

          {/* next */}
          <div onClick={() => updateIndex(currentIndex + 1)}
               style={{
                 opacity: lastOne ? 0 : 1,
                 // pointerEvents: lastOne ? 'none' : 'auto',
                 cursor: lastOne ? 'default' : 'pointer'
               }}
               className={'z-10 absolute top-0 right-0 h-full items-center flex cursor-pointer'}>
            <div
              className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-black
        opacity-30 hover:opacity-100
        "></div>
          </div>
        </>
      }

    </div>
  );
};

export default Carousel;
