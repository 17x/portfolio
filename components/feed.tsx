import React from 'react';
import {FeedNodeDataListItem} from "./type";

const Feed = ({list}: { list: FeedNodeDataListItem[] }) => {
  return (
    <div className="mt-2 mr-2">
      {
        list && list.map(({link, poster, content, title, stacks}, idx: number) => (
          <div key={idx}
               className={'min-h-10 mr-2 mb-2 flex rounded-md overflow-hidden p-4 w-4/6 border border-solid border-neutral-400 hover:border-neutral-700'}>
            {
              poster &&
              <div className={'mr-2 w-20 h-20 flex'}>
                <img className={'inline-block object-contain rounded-md border border-solid border-neutral-100'}
                     src={poster.src}
                     alt="" />
              </div>
            }
            <div className={'flex-1 ' + (poster ? '' : 'content-center')}>
              <p className="text-base break-words text-neutral-800">{content}</p>

              {stacks && <div className={'mt-1 text-sm italic text-neutral-500'}>{stacks}</div>}

              {
                link && <div>
                  <a href={link} className={'underline text-blue-400 hover:text-blue-800'}>Link</a>
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
