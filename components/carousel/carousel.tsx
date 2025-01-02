import {ReactElement, ReactNode, useEffect, useRef, useState} from "react";

type CarouselChildProps = {
  carousel: true; // Custom prop
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode[];
};

type Props = {
  autoplay?: boolean
  autoplaySpeed?: number
  pagination?: boolean
  defaultIndex?: number
  indicator?: boolean
  currentIndicatorIndex?: number
  children: React.ReactNode[];
};
let _id = 0
const Carousel = ({
                    autoplaySpeed = 1000,
                    autoplay = true,
                    defaultIndex,
                    indicator = true,
                    pagination = true,
                    children
                  }: Props) => {
  const timerRef = useRef<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(defaultIndex || 0)
  const LOCAL_ID = _id + 1

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      setCurrentIndex(0)
    } else if (newIndex >= children.length) {
      setCurrentIndex(children.length - 1)
    } else {
      setCurrentIndex(newIndex)
    }
  };

  const updateTimer = () => {
    clearInterval(timerRef.current)

    if (autoplay) {
      timerRef.current = setInterval(() => {
        updateIndex(currentIndex + 1)
      }, autoplaySpeed) as unknown as number
    }
  }

  useEffect(() => {
    updateTimer()

    return () => {
      clearInterval(timerRef.current)
    }
  }, [timerRef])

  console.log(currentIndex)

  return (
    <div
      data-carousel={true}
      data-carousel-id={LOCAL_ID}
      style={{}}
      className={`relative overflow-hidden`}>

      {/* slides */}
      <div
        className={`relative h-full flex`}
        style={{
          transition: 'transform 0.3s ease',
          transform: `translateX(${-100 * currentIndex}%)`,
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
          <div className={'z-10 absolute top-0 left-1 h-full items-center flex cursor-pointer'}>
            <div onClick={() => {
              updateIndex(currentIndex - 1)
            }} className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-black
        opacity-30 hover:opacity-100
        "></div>
          </div>

          {/* next */}
          <div className={'z-10 absolute top-0 right-0 h-full items-center flex cursor-pointer'}>
            <div
              onClick={() => {
                updateIndex(currentIndex + 1)
              }}
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
