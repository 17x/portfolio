import React from "react";

const IconComp = ({icon}) => {
  if (!icon) return null;
  return <div className={'mr-8 p-2 w-20 h-20 content-center'}>
    <img className={'inline-block object-contain max-h-full'}
         src={icon.src}
         alt="" />
  </div>
}

export default IconComp