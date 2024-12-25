import {StaticImageData} from "next/image";

declare global {
  declare type TimelineNode = {
    year: string
    description?: string
    data: TimelineNodeRecord[]
  }

  declare type TimelineNodeRecord = SimpleRecord | ClusterRecord

  /**
   * SimpleRecord
   * Simple text description, with or without a link
   */
  declare type SimpleProps = {
    type: 'simple'
    demo?: DemoLink
  }
  /**
   * ClusterRecord
   * A group of samples
   */
  declare type ClusterProps = {
    type: 'cluster'
    list: DemoLink[]
    carousel? :boolean
    stacks?: string
  }

  declare type SimpleRecord = GenericRecord<SimpleProps>
  declare type ClusterRecord = GenericRecord<ClusterProps>

  type GenericRecord<T> = T & {
    type: string
    description: string
    icon?: StaticImageData
  }

  declare type DemoLink = {
    link: string
    linkText?: string
    media: DemoMediaType
    img?: StaticImageData
    stacks?: string
  }

  /**
   * Media type is for render demos into different width on the screen
   */
  declare type DemoMediaType = 's' | 'm' | 'l'
}