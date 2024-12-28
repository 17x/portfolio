import {useEffect, useState} from "react";

type Props = {
  slides: { url: string; alt: string }[];
  autoplay?: boolean;
  autoplaySpeed?: number;
  // infiniteLoop?: boolean;
  onItemClick?: (index: number) => void;
  defaultIndex?: number;
};

const Carousel = ({slides, autoplaySpeed, autoplay, onItemClick, defaultIndex}: Props) => {
  let _timer = null
  const [currentIndex, setCurrentIndex] = useState<number>(defaultIndex || 0)

  const handleSlideIndex = (num: number) => {
    const _i = num === slides.length - 1 ? 0 : num

    setCurrentIndex(_i)
  }

  useEffect(() => {
    if (autoplay) {
      _timer = setInterval(() => {
        setCurrentIndex(currentIndex + 1)
      }, autoplaySpeed)

      return () => {
        clearInterval(_timer)
      }
    }
  }, [])

  return (
    <div className={'w-full h-full flex-nowrap flex-row relative overflow-hidden'}>
      {/* slides */}
      <div className={'h-full flex flex-row flex-nowrap'}
           style={{
             transition: 'transform 0.3s ease',
             transform: `translateX(${(-100 / slides.length) * currentIndex}%)`,
             width: `${slides.length * 100}%`
           }}>
        {
          slides.map((item, index) => {
            return <div key={index}
                        onClick={() => {
                          onItemClick && onItemClick(index)
                        }}
                        className={'w-full h-full overflow-hidden bg-sky-800 border border-blue-500'}>
              <img src={item.url} alt="" className={'object-fill'} />
              {index}{index}{index}{index}{index}{index}{index}
            </div>
          })
        }
      </div>

      {/* indicators */}
      <div className={'z-10 absolute bottom-0 w-full h-5 items-center flex'}>
        <div className={'w-full h-5 flex'}>
          {slides.map((_, index) => {
            return <span key={index}
                         className={'inline-block w-1 h-1 rounded-full border-blue-500'}></span>
          })}
        </div>
      </div>

      {/* prev */}
      <div className={'z-10 absolute top-0 left-1 h-full items-center flex cursor-pointer'}>
        <div onClick={() => {
          handleSlideIndex(currentIndex - 1)
        }} className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-black
        opacity-30 hover:opacity-100
        "></div>
      </div>

      {/* next */}
      <div className={'z-10 absolute top-0 right-1 h-full items-center flex cursor-pointer'}>
        <div onClick={() => {
          handleSlideIndex(currentIndex + 1)
        }}
             className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-black
        opacity-30 hover:opacity-100
        "></div>
      </div>

    </div>
  );
};

export default Carousel;
