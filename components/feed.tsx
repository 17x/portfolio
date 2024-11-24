import React from 'react';
import {FeedNodeDataListItem} from "./type";
import Modal from "./modal";
import Link from "next/link";
import DOC_URL from "../global/";

const Feed = ({list}: { list: FeedNodeDataListItem[] }) => {

  return (
    <div className="mt-2 mr-2">
      {
        list && list.map(({link, linkText, img, content, title, stacks}, idx: number) => {
          const linkList = !link ? [] : link instanceof Array ? link : [link]


          return (
            <div key={idx}
                 className={'min-h-10 mr-2 mb-2 items-center  flex rounded-md overflow-hidden p-4 w-5/6 border border-solid border-neutral-400 hover:border-neutral-700'}>
              {
                img &&
                <div className={'mr-2 w-20 h-20 content-center'}>
                  <img className={'inline-block object-contain'}
                       src={img.src}
                       alt="" />
                </div>
              }
              <div className={'content-center flex-1 ' + (img ? '' : 'content-center')}>
                <p className="break-words text-neutral-800">{content}</p>

                {stacks && <div className={'mt-5 italic text-neutral-500'}>{stacks}</div>}

                <div className={'mt-1 text-sm flex'}>
                  {
                    linkList.map((value, index) => {
                      console.log(value, DOC_URL)
                      value = value.indexOf('.') != -1 ? value : DOC_URL + value
                      return (
                        false ?
                          <Modal key={index} /> :
                          <Link href={value}
                                key={index}
                                target={'_blank'}
                                className={'underline mr-2 text-blue-400 hover:text-blue-800'}>{linkText || 'demo'}</Link>
                      );
                    })
                  }
                </div>

              </div>
            </div>
          );
        })
      }
    </div>
  )
};

export default Feed;
