import React, {FC, useState} from "react";
import Carousel from "../carousel";
import Modal from "../modal";

interface Props extends Omit<GenericRecord<{}>, 'type'> {
  children?: React.ReactNode | React.ReactNode[]
}

const ContentComp: FC<Props> = ({description, icon, images, children}) => {
  const [showFullscreenPreview, setShowFullscreenPreview] = useState<number>(-1)

  return <div className={'whitespace-pre-line content-center text-sm flex-1  ' + (icon ? '' : 'content-center')}>
    <p className="break-words text-neutral-800 first-letter:text-2xl first-letter:mr-[1px]">
      {decodeURIComponent(description)}
    </p>
    {
      images &&
      <div className={'w-20 h-20'}>
        <Carousel autoplay={false}
                  autoplaySpeed={100}
                  onItemClick={(i) => {
                    setShowFullscreenPreview(i)
                  }}
                  slides={images.map(item => {
                    return {
                      url: item,
                      alt: 'item'
                    }
                  })} />
      </div>
    }
    <>
      {children}
    </>
    {
      showFullscreenPreview >= 0 &&
      <Modal onClose={() => setShowFullscreenPreview(-1)}>
        <div className={'w-[90vw] h-[90vh]'}>
          <Carousel autoplay={false}
                    autoplaySpeed={100}
                    defaultIndex={showFullscreenPreview}
                    slides={images.map(item => {
                      return {
                        url: item,
                        alt: 'item'
                      }
                    })} />
        </div>
      </Modal>
    }
  </div>
}

export default ContentComp