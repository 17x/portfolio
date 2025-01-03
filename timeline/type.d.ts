import {Merge} from "type-fest";

declare global {
  declare type TimelineNode = {
    year: string
    description?: string
    data: TimelineNodeRecord[]
  }

  declare type TimelineNodeRecord = SimpleRecord | ClusterRecord

  declare type SimpleProps = {
    type: 'simple'
    demo?: Merge<DemoLink, { media?: DemoMediaType }>
  }

  declare type ClusterProps = {
    type: 'cluster'
    list: DemoLink[]
    // carousel?: boolean
    stacks?: string
  }

  type GenericRecord<T> = T & {
    type: string
    description: string
    icon?: string
    assets?: DemoAssets[]
  }

  declare type DemoLink = {
    link?: string
    linkText?: string
    media?: DemoMediaType
    // assets?: DemoAssets[]
    stacks?: string
  }

  /**
   * Media type is for render demos into different width on the screen
   */
  declare type DemoMediaType = 's' | 'm' | 'l'

  declare type DemoAssets = {
    type: 'img' | 'code' | 'text' | 'link'
    data: string
  }

  declare type SimpleRecord = GenericRecord<SimpleProps>
  declare type ClusterRecord = GenericRecord<ClusterProps>

}