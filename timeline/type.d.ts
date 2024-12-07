import {StaticImageData} from "next/image";
import {IntRange} from "type-fest";

declare global {
  declare type TimelineNode = {
    year: string
    description?: string
    data: TimelineNodeRecord[]
  }

  declare type TimelineNodeRecord = SimpleRecord | SiteRecord | ClusterRecord

  declare type SimpleRecord = {
    type: 'simple',
    description: string
    demo: DemoLink
    icon?: StaticImageData
  }

  declare type ClusterRecord = {
    type: 'cluster',
    description: string
    icon?: StaticImageData
    list: DemoLink[]
  }

  declare type DemoLink = {
    link: string
    linkText?: string
    media: DemoMediaType
    img?: StaticImageData
    stacks?: string
  }

  declare type DemoMediaType = 's' | 'm' | 'l'
}