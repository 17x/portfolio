import {StaticImageData} from "next/image";
import {IntRange} from "type-fest";

declare global {
  declare type TimelineNode = {
    year: IntRange<1900, 3000>
    data: DemoSite | DemoFragments
    /**
     * Describe node
     */
    description: string
  }

  declare type DemoSite = {
    content: string
    link?: string
    img?: StaticImageData
    type: 'site'
    media: DemoMediaType
  } & Demo

  declare type briefItem = {
    type: 'text'
  } & Demo

  declare type DemoFragments = {
    type: 'fragments'
  } & Demo

  declare type Demo = {
    type: DemoTypes
    /**
     * @param Set a poster for fast reviewing in the demo list
     */
    poster: StaticImageData
    year: string
    title?: string
    list: FeedNodeDataListItem[]
  }

  declare type DemoMediaType = 's' | 'm' | 'l'
  declare type DemoTypes = 'site' | 'fragments' | 'text'
}


// 1. text without link
// 2. text with link
// 3. text with link and icon
// 4. text with link and icon images

// A Feed may contain keys:

// A demo may contain keys:
/*
* @ basic:
* Belongs: belong to which company or period
* text content
* link
* link text
* icon
* images
*
* @ description:
* m or pc
*
*
* */