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
    <ContentComp themeColor={themeColor}
                 icon={icon}
                 assets={assets}
                 description={description}
                 stacks={demo && demo.stacks}>
      {
        demo && demo.link &&
        <Link href={demo.link}
              onClick={demo.openInNewTab ? null : (e) => onClick(e, demo)}
              target={'_blank'}
              className={'underline mr-2 text-blue-400 hover:text-blue-800'}>{demo.linkText || 'Link'}</Link>
      }

    </ContentComp>
  );
};

export default SimpleFeed;
