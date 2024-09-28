import React from 'react';
import {FeedNodeDataListItem} from "./type";

const Feed = ({list}: { list: FeedNodeDataListItem[] }) => {
  return (
    <div className="mt-2 mr-2">
      {
        list && list.map(({link, linkText, img, content, title, stacks}, idx: number) => (
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

              {
                link && <div className={'mt-1 text-sm'}>
                  <a href={link as string}
                     target={'_blank'}
                     className={'underline text-blue-400 hover:text-blue-800'}>{linkText || 'link'}</a>
                </div>
              }
            </div>
          </div>
        ))
      }
    </div>
  )
};

export default Feed;
