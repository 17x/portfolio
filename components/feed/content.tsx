import React, {FC} from "react";

interface Props {
  description
  icon
  children?: React.ReactNode | React.ReactNode[]
}

const ContentComp: FC<Props> = ({description, icon, children}) => {
  return <div className={'whitespace-pre-line content-center text-sm flex-1  ' + (icon ? '' : 'content-center')}>
    <p className="break-words text-neutral-800 first-letter:text-2xl first-letter:mr-[1px]">
      {decodeURIComponent(description)}
    </p>
    <>
      {children}
    </>
  </div>
}

export default ContentComp