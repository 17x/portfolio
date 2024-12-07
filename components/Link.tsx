import React, {AnchorHTMLAttributes} from "react";
import Modal from "./modal";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string,
  label?: string,
  openModal?: boolean
  modalContent?: React.ReactNode
  className?: string
  children?: React.ReactNode | React.ReactNode[]
}

// console.log(process.env.DOC_URL)
const Link = ({openModal, href, ...rest}: Props) => {
  href = href.indexOf('.') != -1 ? '' : process.env.DOC_URL
  console.log(href)
  return (
    <div>
      Link
      {openModal ? <Modal /> : <a href={href} {...rest}></a>}
    </div>
  );
};
export default Link;