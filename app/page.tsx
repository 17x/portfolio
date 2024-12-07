'use client';

import {useEffect, useState} from "react";
import Feeds from "../components/feeds";

const Page = () => {
  const [feeds, setFeeds] = useState([])

  useEffect(() => {
    async function getData() {
      const {data: nodeList} = await import('../timeline/index')
      setFeeds(nodeList)
    }

    getData()

  }, []);

  return <div className={'w-3/4 mx-auto my-20'}>
    <Feeds feeds={feeds} />
  </div>
}

export default Page
