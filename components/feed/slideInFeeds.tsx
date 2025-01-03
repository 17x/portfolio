import React from "react";
import Carousel from "../carousel";
import Highlight from "../highlight";
import {CarouselProps} from "../carousel/carousel";
import {HighlightProps} from "../highlight/highlight";

type Props = {
  slides: DemoAssets[]
  onClick?: (i: number) => void
  carouselProps?: Omit<CarouselProps, 'children'>
  highlightProps?: HighlightProps
};

const SlideInFeeds = ({slides, onClick, highlightProps, ...rest}: Props) => {
  return (
    <Carousel {...rest}>
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
              <Highlight customWrapStyle={{padding: 0}}
                         customPreStyle={{padding: 0, background: 'none'}}
                         url={item.data as string}
                         {...highlightProps} />
            }

          </div>
        })}
    </Carousel>
  );
};
export default SlideInFeeds;
