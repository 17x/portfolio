import React, {FC, useState} from "react";
import Modal from "../modal";
import SlideInFeeds from "./slideInFeeds";

interface Props extends Omit<GenericRecord<{}>, 'type'> {
  children?: React.ReactNode | React.ReactNode[]
}

const styles1 = {width: 500, height: 200, boxShadow: '1px 1px 5px 0px #dfdfdf'}
const styles2 = {width: '100%', height: '100%', borderRadius: '3px'};
const ContentComp: FC<Props> = ({description, icon, assets = [], children}) => {
  const [showFullscreenPreview, setShowFullscreenPreview] = useState<number>(-1)
  const [carouselIndex, setCarouselIndex] = useState(0)

  return <div className={'whitespace-pre-line content-center text-sm flex-1 ' + (icon ? '' : 'content-center')}>
    <p className="break-words text-neutral-800 first-letter:text-2xl first-letter:mr-[1px]">
      {decodeURIComponent(description)}
    </p>

    {
      assets.length > 0 &&
      <div className={'relative inline-block'}>
        <SlideInFeeds slides={assets}
                      style={styles1}
                      onIndexChange={(i) => {
                        setCarouselIndex(i)
                      }} />
        <button
          onClick={() => setShowFullscreenPreview(carouselIndex)}
          className="absolute right-0 bottom-0 z-20 p-2 rounded-full bg-gray-300 opacity-50 hover:opacity-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-500"
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

    <>
      {children}
    </>

    {
      showFullscreenPreview >= 0 &&
      <Modal onClose={() => setShowFullscreenPreview(-1)}>
        <div className={'w-[90vw] h-[90vh]'}>
          <SlideInFeeds slides={assets}
                        style={styles2}
                        defaultIndex={showFullscreenPreview} />
        </div>
      </Modal>
    }

  </div>
}

export default ContentComp