import Link from "next/link";
import React, {FC} from "react";
import IconComp from "./Icon";
import ContentComp from "./content";

interface ModalProps {
  data: ClusterRecord
  onClick?: (e: any, v: DemoLink) => void;
  children?: React.ReactNode;
}

const ClusterFeed: FC<ModalProps> = ({
                                       data: {icon, list, description, stacks, assets},
                                       onClick,
                                       ...rest
                                     }: ModalProps) => {
  return (
    <>
      <IconComp icon={icon} />
      <ContentComp icon={icon} description={description} assets={assets}>
        <div className={'mt-1 pt-1 text-sm flex items-start'}>
          <h1 className={'mr-2'}>Links: </h1>
          <div className={'gap-x-2 gap-y-1 text-sm flex flex-wrap items-center'}>
            {
              list.map((item, index) => {
                return (
                  <Link href={item.link}
                        onClick={(e) => onClick(e, item)}
                        key={index}
                        target={'_blank'}
                        className={'block text-center min-w-6 px-2 rounded border text-blue-400 hover:text-blue-800'}>{item.linkText || (index + 1)}</Link>
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
    </>
  );
};
export default ClusterFeed;