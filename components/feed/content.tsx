import React, {FC, useState} from "react";
import Carousel from "../carousel";

interface Props extends Omit<GenericRecord<{}>, 'type'> {
  children?: React.ReactNode | React.ReactNode[]
}

const ContentComp: FC<Props> = ({description, icon, assets = [], children}) => {
  return <div className={'whitespace-pre-line content-center text-sm flex-1  ' + (icon ? '' : 'content-center')}>
    <p className="break-words text-neutral-800 first-letter:text-2xl first-letter:mr-[1px]">
      {decodeURIComponent(description)}
    </p>
    {
      assets.length > 0 &&
      <Carousel autoplay={true}
                autoplaySpeed={3000}
                style={{width: 200, height: 300}}
      >
        {
          assets.map((item, index) => {
            return <div key={index}
                        onClick={(i) => {
                          // setShowFullscreenPreview(index)
                        }}
                        className={'flex-1 bg-sky-800 border border-blue-500'}>
              {
                item.type === 'text' &&
                <span>{item.data as string}</span>
              }
              {
                item.type === 'img' &&
                <img src={item.data as string} alt="" />
              }

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