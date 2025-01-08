import React, {Ref} from "react";
import Carousel from "../carousel";
import Highlight from "../highlight";
import {CarouselProps} from "../carousel/carousel";
import {HighlightProps} from "../highlight/highlight";
import LazyLoad from "../lazyload/lazyLoad";

type Props = {
  slides: DemoAssets[]
  onClick?: (i: number) => void
  carouselConfig?: Omit<CarouselProps, 'ref' | 'children'>
  highlightConfig?: Omit<HighlightProps, 'url'>
};

const SlideInFeeds = ({slides, onClick, carouselConfig, highlightConfig}: Props) => {
  return (
    <LazyLoad>
      <Carousel  {...carouselConfig}>
        {
          slides.map((item, index) => {
            return <div key={index}
                        onClick={() => onClick && onClick(index)}
                        className={'flex-1 flex justify-center min-w-0 min-h-0 overflow-hidden  items-center'}>
              {
                item.type === 'text' &&
                <span>{item.data as string}</span>
              }
              {
                item.type === 'img' &&
                <img className={'max-h-40 inline-block object-contain max-w-full'}
                     src={item.data}
                     alt="" />
              }
              {
                item.type === 'code' &&
                <Highlight url={item.data as string}
                           {...highlightConfig} />
              }

            </div>
          })}
      </Carousel>
    </LazyLoad>

  );
};
export default SlideInFeeds;
