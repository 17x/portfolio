import React from "react";

const IconComp = ({icon}) => {
  return <div className={'mr-8 p-2 w-20 h-20 content-center'}>
    <img className={'inline-block object-contain max-h-full'}
         src={icon}
         alt="" />
  </div>
}

export default IconComp