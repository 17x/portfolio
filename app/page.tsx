'use client';

import {useEffect, useState} from "react";
import TimelineNodes from "../components/timelineNodes";
import data from "../public/data/timeline";

const Page = () => {
  const [feeds, setFeeds] = useState([])

  useEffect(() => {
    async function getData() {
      // const nodeList: TimelineNode[] = await (await fetch('data/timeline/index.json')).json()

      setFeeds(data)
    }

    getData()

  }, []);

  return <div className={'w-5/6 mx-auto my-20'}>
    <TimelineNodes feeds={feeds} />
  </div>
}

export default Page
