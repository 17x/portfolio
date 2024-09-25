import {StaticImageData} from "next/image";

declare type FeedNodeDataListItem = {
  title?: string,
  content?: string,
  stacks?: string,
  poster?: StaticImageData,
  link?: string
}

declare type FeedNodeData = {
  year: string,
  title?: string,
  list: FeedNodeDataListItem[]
}