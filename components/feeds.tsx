import React from 'react';
import Feed from "./feed";
import {FeedNodeData} from "./type";

const Feeds = ({feeds}: { feeds: FeedNodeData[] }) => {
  return <>{
    feeds.map((feed, idx: number) => (
      <div key={idx} className={'flex min-h-40'}>
        <div className={'w-3 text-center'}>
          <div className={'inline-block w-3 h-3 rounded-3xl bg-neutral-200 border border-solid border-neutral-400'}></div>
          <div className={'inline-block w-0.5 h-5/6 bg-neutral-200'}></div>
        </div>
        <div className="ml-3 flex-1">
          <h1 className="text-3xl font-bold">{feed.year}{/*<span className={'ml-2 text-2xl font-normal'}>{feed.title}</span>*/}</h1>
          <h3>{feed.title}</h3>
          <Feed list={feed.list} />
        </div>
      </div>
    ))
  }
  </>

};

export default Feeds;
