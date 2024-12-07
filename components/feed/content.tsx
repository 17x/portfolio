import React, {FC} from "react";

interface Props {
  description
  icon
  children?: React.ReactNode | React.ReactNode[]
}

const ContentComp: FC<Props> = ({description, icon, children}) => {
  return <div className={'content-center text-sm flex-1 ' + (icon ? '' : 'content-center')}>
    <p className="break-words text-neutral-800 first-letter:text-2xl">{description}</p>
    <>
      {children}
    </>
  </div>
}

export default ContentComp