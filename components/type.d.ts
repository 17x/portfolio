import {StaticImageData} from "next/image";

declare type FeedNodeDataListItem = {
  title?: string,
  content?: string,
  stacks?: string,
  img?: StaticImageData,
  link?: string | string[]
  linkText?: string
}

declare type FeedNodeData = {
  year: string,
  title?: string,
  list: FeedNodeDataListItem[]
}