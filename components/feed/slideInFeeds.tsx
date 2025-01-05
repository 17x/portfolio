import React, {Ref} from "react";
import Carousel from "../carousel";
import Highlight from "../highlight";
import {CarouselProps} from "../carousel/carousel";
import {HighlightProps} from "../highlight/highlight";

type Props = {
  slides: DemoAssets[]
  onClick?: (i: number) => void
  carouselConfig?: Omit<CarouselProps, 'ref' | 'children'>
  highlightConfig?: Omit<HighlightProps,'url'>
};

const SlideInFeeds = ({slides, onClick, carouselConfig, highlightConfig}: Props) => {
  return (
    <Carousel  {...carouselConfig}>
      {
        slides.map((item, index) => {
          return <div key={index}
                      onClick={() => onClick && onClick(index)}
                      className={'flex-1 min-w-0 min-h-0 overflow-hidden'}>
            {
              item.type === 'text' &&
              <span>{item.data as string}</span>
            }
            {
              item.type === 'img' &&
              <img src={item.data as string} alt="" />
            }
            {
              item.type === 'code' &&
              <Highlight url={item.data as string}
                         {...highlightConfig} />
            }

          </div>
        })}
    </Carousel>
  );
};
export default SlideInFeeds;
