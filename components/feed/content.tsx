import React, {FC, useState} from "react";
import Carousel from "../carousel";
// import Modal from "../modal";
// import Highlight from "../highlight";

interface Props extends Omit<GenericRecord<{}>, 'type'> {
  children?: React.ReactNode | React.ReactNode[]
}

const ContentComp: FC<Props> = ({description, icon, assets = [], children}) => {
  // const [showFullscreenPreview, setShowFullscreenPreview] = useState<number>(-1)

  return <div className={'whitespace-pre-line content-center text-sm flex-1  ' + (icon ? '' : 'content-center')}>
    <p className="break-words text-neutral-800 first-letter:text-2xl first-letter:mr-[1px]">
      {decodeURIComponent(description)}
    </p>
    {/*<Highlight />*/}

    {
      assets.length > 0 &&
      <Carousel autoplay={true}
                autoplaySpeed={5000}
      >
        {/*<div className={'w-full h-full flex flex-row flex-nowrap overflow-hidden'}*/}
        {
          assets.map((item, index) => {
            return <div key={index}
                        onClick={(i) => {
                          // setShowFullscreenPreview(index)
                        }}
                        className={'bg-sky-800 border border-blue-500'}>
              {/*<img src={item.url} alt="" className={'object-fill'} />*/}
              {index}{index}{index}{index}{index}{index}{index}
            </div>
          })}
      </Carousel>
    }
    <>
      {children}
    </>
    {/*{
      showFullscreenPreview >= 0 &&
      <Modal onClose={() => setShowFullscreenPreview(-1)}>
        <div className={'w-[90vw] h-[90vh]'}>
          <Carousel autoplay={false}
                    autoplaySpeed={100}
                    defaultIndex={showFullscreenPreview}
                    assets={assets.map(item => {
                      return {
                        url: item,
                        alt: 'item'
                      }
                    })} />
        </div>
      </Modal>
    }*/}
  </div>
}

export default ContentComp