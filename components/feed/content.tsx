import React, {FC, useState} from "react";
import SlideInFeeds from "./slideInFeeds";
import Modal from "../modal";
import IconComp from "./Icon";

interface Props extends Omit<GenericRecord<{}>, 'type'> {
  children?: React.ReactNode | React.ReactNode[]
}

const styles1 = {width: '100%', height: 200}
const styles2 = {width: '100%', height: '100%', borderRadius: '3px'};

const ContentComp: FC<Props> = ({description, icon, assets, children}) => {
  const [showFullscreenPreview, setShowFullscreenPreview] = useState<number>(-1)
  const [carouselIndex, setCarouselIndex] = useState(0)

  return <>
    <div className={'min-h-10 items-center flex overflow-hidden'}>
      {icon && <IconComp icon={icon} />}

      <div className={'whitespace-pre-line content-center text-sm flex-1 ' + (icon ? '' : 'content-center')}>
        <p className="break-words text-neutral-800 first-letter:text-2xl first-letter:mr-[1px]">
          {decodeURIComponent(description)}
        </p>

        <>
          {children}
        </>
      </div>
    </div>

    {
      assets && assets.length > 0 &&
      <div className={'border-t-2 pt-4 mt-2 relative' + (icon ? ' ml-28' : '')}>
        <SlideInFeeds slides={assets}
                      highlightConfig={
                        {
                          className: 'scrollbar-custom',
                          customWrapStyle: {padding: '4px 28px 4px 4px '},
                          customPreStyle: {padding: 0, background: 'none'},
                        }
                      }
                      carouselConfig={
                        {
                          // autoplay: false,
                          style: styles1,
                          onIndexChange: (i) => {
                            setCarouselIndex(i)
                          }
                        }
                      } />
        <button
          onClick={() => setShowFullscreenPreview(carouselIndex)}
          className="absolute right-0 bottom-0 z-20 p-2 rounded-full bg-gray-300 opacity-50 hover:opacity-100 flex items-center justify-center">
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
      showFullscreenPreview >= 0 &&
      <Modal onClose={() => setShowFullscreenPreview(-1)}>
        <div className={'w-[90vw] h-[90vh]'}>
          <SlideInFeeds slides={assets}
                        highlightConfig={
                          {
                            className: 'scrollbar-custom',
                            customWrapStyle: {padding: '18px 24px 18px 18px '},
                            customPreStyle: {padding: 20, background: 'none'}
                          }
                        }
                        carouselConfig={
                          {
                            autoplay: false,
                            style: styles2,
                            defaultIndex: showFullscreenPreview
                          }
                        } />
        </div>
      </Modal>
    }
  </>
}

export default ContentComp