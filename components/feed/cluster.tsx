import Link from "next/link";
import React, {FC} from "react";
import IconComp from "./Icon";
import ContentComp from "./content";

interface ModalProps {
  data: ClusterRecord
  onClick?: (e: any, v: DemoLink) => void;
  children?: React.ReactNode;
}

const ClusterFeed: FC<ModalProps> = ({data: {icon, list, description}, onClick, ...rest}: ModalProps) => {
  return (
    <>
      <IconComp icon={icon} />
      <ContentComp icon={icon} description={description}>
        <div className={'mt-1 text-sm flex flex-wrap items-center'}>
          <h1 className={'mr-2'}>Samples: </h1>
          {
            list.map((item, index) => {
              return (
                <Link href={item.link}
                      onClick={(e) => onClick(e, item)}
                      key={index}
                      target={'_blank'}
                      className={'block text-center w-6 rounded border mr-2 text-blue-400 hover:text-blue-800'}>{index + 1}</Link>
              );
            })
          }
        </div>

      </ContentComp>
    </>
  );
};
export default ClusterFeed;