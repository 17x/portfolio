import React from "react";
// import Image from "../image";
import LazyLoad from "../lazyload/lazyLoad";

const IconComp = ({icon}) => {
  return <div className={'mr-4 sm:mr-8 max-w-12 max-h-12 sm:max-w-20 sm:max-h-20 content-center flex'}>
    <LazyLoad>
      <img className={'object-contain'}
           src={icon}
           alt="" />
    </LazyLoad>
  </div>
}

export default IconComp