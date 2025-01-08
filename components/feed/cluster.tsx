import Link from "next/link";
import React, {FC} from "react";
// import IconComp from "./Icon";
import ContentComp from "./content";
// import SlideInFeeds from "./slideInFeeds";
// import Modal from "../modal";

interface ModalProps {
  data: ClusterRecord
  onClick?: (e: any, v: DemoLink) => void;
  children?: React.ReactNode;
  themeColor?: string
}

const ClusterFeed: FC<ModalProps> = ({
                                       data: {icon, list, description, stacks, assets},
                                       themeColor,
                                       onClick,
                                       ...rest
                                     }: ModalProps) => {

  return (
    <ContentComp themeColor={themeColor} assets={assets} icon={icon} description={description}>
      <div className={'mt-1 pt-1 text-sm items-center'}>
        <h1 className={'mr-2 text-gray-600 font-bold mb-2'}>Link{list.length > 1 ? 's' : ''}: </h1>
        <div className={'gap-x-2 gap-y-1 text-sm flex flex-wrap items-center'}>
          {
            list.map((item, index) => {
              let _text = item.linkText || (index + 1)

              if (item.media === 'l') {
                // _text = '[Desktop] ' + _text
              }

              if (item.media === 's') {
                // _text = '[Phone] ' + _text
              }

              return (
                <Link href={item.link}
                      onClick={item.openInNewTab ? null : (e) => onClick(e, item)}
                      key={index}
                      target={'_blank'}
                      className={'underline mr-2 text-blue-400 hover:text-blue-800'}>{_text}</Link>
              );
            })
          }</div>
      </div>
      {
        stacks &&
        <>
          <div className={'mt-5 italic text-xs text-neutral-500'}>{stacks}</div>
        </>
      }
    </ContentComp>

  );
};

export default ClusterFeed;