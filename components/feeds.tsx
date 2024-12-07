import React from 'react';
import Feed from "./feed";
import {FeedNodeData} from "./type";

const COLORS = [
  "pink-400", "rose-400", "red-400", "orange-400", "amber-400",
  "yellow-400", "lime-400", "green-400", "emerald-400", "teal-400",
  "cyan-400", "sky-400", "blue-400", "indigo-400", "violet-400",
  "purple-400", "fuchsia-400", "pink-300", "rose-300", "red-300",
  "orange-300", "amber-300", "yellow-300", "lime-300", "green-300",
  "emerald-300", "cyan-300", "blue-300", "indigo-300", "violet-600"
];
const createGradient = colors => {
  const baseClasses = "bg-gradient-to-b";
  const gradientClasses = colors.map((color, index) => {
    if (index === 0) return `from-${color}`; // First color
    if (index === colors.length - 1) return `to-${color}`; // Last color
    return `via-${color}`; // Intermediate colors
  });
  return `${baseClasses} ${gradientClasses.join(" ")}`;
};
const Feeds = ({feeds}: { feeds: FeedNodeData[] }) => {
  let colors = [...COLORS]
  colors.length = feeds.length

  return <div className={'relative'}>
    <div>
      {/*Placeholder*/}
      <div className={'flex items-start relative h-48'}>
        <div className={'absolute h-full flex'}>
          <div className={'w-1 h-full ' + createGradient([COLORS[COLORS.length - 1], colors[0]])}></div>
        </div>
      </div>
      {/*Loop*/}
      {
        feeds.map((feed, idx: number) => {
          const bgColor = 'bg-' + colors[idx]
          const textColor = 'text-' + colors[idx]
          let _nextColor = colors[idx + 1]
          const gradientColor = createGradient([colors[idx], _nextColor])

          return (
            <div key={idx} className={'relative min-h-48'}>
              {/*Decor gradient part*/}
              <div className={'absolute top-0 left-0 h-full flex'}>
                <div className={'w-1 h-full ' + gradientColor}></div>
              </div>

              <div className={'relative'}>
                <div className={'inline-block align-middle w-4 h-1 ' + bgColor}></div>
                <div className={'inline-block align-middle ml-4 w-4 h-4 drop-shadow-lg rounded-3xl border border-solid border-gray-200 ' + bgColor}></div>
                <h1 className={'inline-block align-middle ml-4 text-3xl font-bold drop-shadow-lg ' + textColor}>{feed.year}</h1>
              </div>

              <div className={'ml-12 pb-20'}>
                <div className={'ml-4 mt-4 flex-1 pt-8 pb-8 pl-8 pr-8 rounded-lg border border-' + colors[idx]}>
                  <h3>{feed.title}</h3>
                  <Feed list={feed.list} />
                </div>
              </div>
            </div>
          );
        })
      }</div>
  </div>

};

export default Feeds;
