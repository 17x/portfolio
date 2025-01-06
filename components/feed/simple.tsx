import Link from "next/link";
import React, {FC} from "react";
// import IconComp from "./Icon";
import ContentComp from "./content";

// import Carousel from "../carousel";

interface ModalProps {
  data: SimpleRecord
  onClick?: (e: any, v: DemoLink) => void;
  children?: React.ReactNode;
  themeColor?: string
}

const SimpleFeed: FC<ModalProps> = ({
                                      data: {demo, icon, assets, description},
                                      onClick,
                                      themeColor
                                    }: ModalProps) => {
  return (
    <ContentComp themeColor={themeColor} icon={icon} assets={assets} description={description}>
      {
        demo && demo.link &&
        <Link href={demo.link}
              onClick={demo.openInNewTab ? null : (e) => onClick(e, demo)}
              target={'_blank'}
              className={'underline mr-2 text-blue-400 hover:text-blue-800'}>{demo.linkText || 'Link'}</Link>
      }
      {
        demo && demo.stacks &&
        <>
          <div className={'mt-5 italic text-xs text-neutral-500'}>{demo.stacks}</div>
        </>
      }
    </ContentComp>
  );
};

export default SimpleFeed;
