import React, {FC} from "react";
import ContentComp from "./content";
import {resolveDemoUrl} from "../../lib/url";

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
        <a href={resolveDemoUrl(demo.link)}
           onClick={demo.openInNewTab ? null : (e) => onClick(e, demo)}
           target={'_blank'}
           rel={'noreferrer'}
           className={'underline mr-2 text-blue-400 hover:text-blue-800'}>{demo.linkText || 'Link'}</a>
      }

    </ContentComp>
  );
};

export default SimpleFeed;
