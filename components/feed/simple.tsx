import Link from "next/link";
import React, {FC} from "react";
import IconComp from "./Icon";
import ContentComp from "./content";

interface ModalProps {
  data: SimpleRecord
  onClick?: (e: any, v: DemoLink) => void;
  children?: React.ReactNode;
}

const SimpleFeed: FC<ModalProps> = ({data: {demo, icon, description}, onClick}: ModalProps) => {
  return (
    <>
      <IconComp icon={icon} />
      <ContentComp icon={icon} description={description}>
        {
          demo && demo.stacks &&
          <>
            <div className={'mt-5 italic text-xs text-neutral-500'}>{demo.stacks}</div>
          </>
        }
        {
          demo && demo.link &&
          <Link href={demo.link}
                onClick={(e) => onClick(e, demo)}
                target={'_blank'}
                className={'underline mr-2 text-blue-400 hover:text-blue-800'}>{demo.linkText || 'Link'}</Link>
        }

      </ContentComp>
    </>
  );
};
export default SimpleFeed;
