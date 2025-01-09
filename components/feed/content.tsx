import React, {FC, useState} from "react";
import Modal from "../modal";
import Carousel from "../carousel";
import Highlight from "../highlight";
import LazyLoad from "../lazyload/lazyLoad";
import {HighlightProps} from "../highlight/highlight";

interface Props extends Omit<GenericRecord<{}>, 'type'> {
  stacks?: string
  children?: React.ReactNode | React.ReactNode[]
  themeColor?: string
}


const carouselStyle1 = {
  width: '100%',
}
const carouselStyle2 = {width: '100%', height: '100%', borderRadius: '3px'};
const highlightConfig1 = {
  preClassName: 'scrollbar-custom ',
  customWrapStyle: {height: 180, padding: '10px'},
  customPreStyle: {padding: 10, background: 'none'},
}
const highlightConfig2 = {
  preClassName: 'scrollbar-custom ',
  // customWrapStyle: {/*padding: assets.length > 1 ? '18px 28px' : ''*/},
  customPreStyle: {padding: 20, background: 'none'}
}
const defaultBorderColorValue = 'gray-300'

const ContentComp: FC<Props> = ({
                                  description,
                                  themeColor = defaultBorderColorValue,
                                  icon,
                                  assets,
                                  stacks,
                                  children
                                }) => {
  const [showFullscreenPreview, setShowFullscreenPreview] = useState<number>(-1)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const sliderLen = assets ? assets.length : 0

  // const borderColor = themeColor.replace(/[2-9]/, (char) => (Number(char) - 1).toString())
  const _f = description instanceof Array

  if (sliderLen > 1) {
    highlightConfig1.customWrapStyle.padding = '0 1.5rem'
  }
  return <>
    <div className={`min-h-6 items-stretch flex overflow-hidden`}>
      {
        icon && <div className={'mr-4 sm:mr-8 max-w-12 max-h-12 sm:max-w-20 sm:max-h-20 content-center flex'}>
          <LazyLoad>
            <img className={'object-contain'}
                 src={icon}
                 alt="" />
          </LazyLoad>
        </div>
      }
      <div className={'whitespace-pre-line content-center text-sm flex-1 ' + (icon ? '' : 'content-center')}>
        <div className={`break-words text-neutral-800 first-letter:text-lg first-letter:mr-[1px]`}>
          {
            _f
              ? description.map(
                (item, i) =>
                  <p className={'first:text-gray-600 pl-[0.9rem] mb-2 indent-[-0.9rem] first-line:indent-4'}
                     key={i}>{decodeURIComponent(item)}</p>
              )
              : <p className={'first:text-gray-600'}>{decodeURIComponent(description)}</p>
          }
        </div>

        <>
          {children}
        </>
      </div>
    </div>

    {
      sliderLen > 0 &&
      <div className={`pt-0 mt-4 relative `}>
        <LazyLoad>
          <Carousel style={carouselStyle1}
                    onIndexChange={(i) => {
                      setCarouselIndex(i)
                    }}>
            {
              assets.map((item, index) => {
                return <SlideItem item={item}
                                  key={index}
                                  highlightConfig={highlightConfig1}
                                  imgMaxHeight={'max-h-40'} />
              })}
          </Carousel>
        </LazyLoad>

        <button
          onClick={() => setShowFullscreenPreview(carouselIndex)}
          className={`absolute right-0 bottom-0 z-20 p-2 rounded-full bg-${themeColor} opacity-20 hover:opacity-100 flex items-center justify-center`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="10.5" cy="10.5" r="7" />
            <line x1="16.5" y1="16.5" x2="20" y2="20" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    }

    {
      stacks &&
      <>
        <div className={'mt-5 italic text-xs text-neutral-500'}>{stacks}</div>
      </>
    }

    {
      showFullscreenPreview >= 0 &&
      <Modal onClose={() => setShowFullscreenPreview(-1)}>
        <div className={'w-[90vw] h-[90vh] overflow-hidden'}>
          <LazyLoad>
            <Carousel
              autoplay={false}
              defaultIndex={showFullscreenPreview}
              style={carouselStyle2}>
              {
                assets.map((item, index) => {
                  return <SlideItem item={item}
                                    key={index}
                                    highlightConfig={highlightConfig2} />
                })}
            </Carousel>
          </LazyLoad>
        </div>
      </Modal>
    }
  </>
}

type SlideItemProps = {
  item: DemoAssets
  highlightConfig?: Omit<HighlightProps, 'url'>
  imgMaxHeight?: string
}

const SlideItem: FC<SlideItemProps> = ({item, highlightConfig, imgMaxHeight = ''}) => {
  return <div onClick={null}
              className={'flex-1 flex justify-center min-w-0 min-h-0 overflow-hidden items-center'}>
    {
      item.type === 'text' &&
      <span>{item.data as string}</span>
    }
    {
      item.type === 'img' &&
      <img className={imgMaxHeight + ' inline-block object-contain max-w-full'}
           src={item.data}
           alt="" />
    }
    {
      item.type === 'code' &&
      <Highlight url={item.data as string}
                 {...highlightConfig} />
    }
  </div>
}

export default ContentComp