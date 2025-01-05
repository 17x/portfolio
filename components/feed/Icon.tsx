import React from "react";
// import Image from "../image";
import LazyLoad from "../lazyload/lazyLoad";

const IconComp = ({icon}) => {
  return <div className={'mr-8 p-2 w-20 h-20 content-center'}>
    <LazyLoad>
      <img className={'inline-block object-contain max-h-full'}
           src={icon}
           alt="" />
    </LazyLoad>
  </div>
}

export default IconComp